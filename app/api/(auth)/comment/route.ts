import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import {
  createAnimal,
  getAnimalsWithLimitAndOffsetBySessionToken,
} from '../../../../database/comment';
import { createOrUpdateComment } from '../../../announcements/[announcements]/actions';
import { getValidSessionByToken } from '../../../database/sessions';

export type Animal = {
  id: number;
  topic: string;
  comment: string;
};

export type Error = {
  error: string;
};

type AnimalsResponseBodyGet = { animals: Animal[] } | Error;
type AnimalsResponseBodyPost = { animal: Animal } | Error;

const animalSchema = z.object({
  firstName: z.string(),
  type: z.string(),
  accessory: z.string().optional(),
});

export async function GET(
  request: NextRequest,
): Promise<NextResponse<AnimalsResponseBodyGet>> {
  const { searchParams } = new URL(request.url);

  // 1. get the token from the cookie
  const sessionTokenCookie = cookies().get('sessionToken');

  // 2. check if the token has a valid session
  const session =
    sessionTokenCookie &&
    (await getValidSessionByToken(sessionTokenCookie.value));

  console.log('This comes from the API', session);

  if (!session) {
    return NextResponse.json(
      {
        error: 'session token is not valid',
      },
      { status: 401 },
    );
  }

  const limit = Number(searchParams.get('limit'));
  const offset = Number(searchParams.get('offset'));

  if (!limit || !offset) {
    return NextResponse.json(
      {
        error: 'Limit and Offset need to be passed as params',
      },
      { status: 400 },
    );
  }

  // query the database to get all the animals only if a valid session token is passed
  const animals = await getAnimalsWithLimitAndOffsetBySessionToken(
    limit,
    offset,
    sessionTokenCookie.value,
  );

  return NextResponse.json({ animals: animals });
}

export async function POST(
  request: NextRequest,
): Promise<NextResponse<CommentsResponseBodyPost>> {
  const body = await request.json();

  // zod please verify the body matches my schema
  const result = animalSchema.safeParse(body);

  if (!result.success) {
    // zod send you details about the error
    // console.log(result.error);
    return NextResponse.json(
      {
        error: 'The data is incomplete',
      },
      { status: 400 },
    );
  }
  // query the database to get all the animals
  const comment = await createOrUpdateComment(
    result.data.topic,
    result.data.comment,
  );

  if (!comment) {
    // zod send you details about the error
    // console.log(result.error);
    return NextResponse.json(
      {
        error: 'Error creating the new animal',
      },
      { status: 500 },
    );
  }

  return NextResponse.json({
    comment: comment,
  });
}
