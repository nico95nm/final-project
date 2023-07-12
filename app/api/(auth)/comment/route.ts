import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createComment, getAllComments } from '../../../../database/comment';
import { getValidSessionByToken } from '../../../../database/sessions';
import { Comment } from '../../../../migrations/1686916408-createTableComments';

export type Comments = {
  id: number;
  topic: string;
  comment: string;
};

export type Error = {
  error: string;
};

type CreatesResponseBodyGet = { comments: Comment[] } | Error;
type CommentsResponseBodyPost = { comment: Comment } | Error;

const commentSchema = z.object({
  userId: z.number(),
  postId: z.number(),
  topic: z.number(),
  comment: z.string(),
});

export async function GET(
  request: NextRequest,
): Promise<NextResponse<CreatesResponseBodyGet>> {
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

  /*   const limit = Number(searchParams.get('limit'));
  const offset = Number(searchParams.get('offset'));
 */
  /* if (!limit || !offset) {
    return NextResponse.json(
      {
        error: 'Limit and Offset need to be passed as params',
      },
      { status: 400 },
    );
  }
 */
  // query the database to get all the animals only if a valid session token is passed
  /*   const comments = await getCommentsWithLimitAndOffsetBySessionToken(
    limit,
    offset,
    sessionTokenCookie.value,
  ); */
  const comments = await getAllComments();

  return NextResponse.json({ comments: comments });
}

export async function POST(
  request: NextRequest,
): Promise<NextResponse<CommentsResponseBodyPost>> {
  const body = await request.json();

  // zod please verify the body matches my schema
  const result = commentSchema.safeParse(body);
  console.log(body);

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
  const comment = await createComment(
    result.data.userId,
    result.data.topic,
    result.data.comment,
  );
  // Ask Jose about this and above
  if (!comment) {
    // zod send you details about the error
    // console.log(result.error);
    return NextResponse.json(
      {
        error: 'Error creating comment',
      },
      { status: 500 },
    );
  }

  return NextResponse.json({
    comment: comment,
  });
}
