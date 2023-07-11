import { colors } from '@mui/material';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { string, z } from 'zod';
import { getValidSessionByToken } from '../../../../database/sessions';
import {
  createTopic,
  deleteTopicById,
  getTopics,
  getTopicsById,
  postTopicById,
  updateTopicById,
} from '../../../../database/topics';
import { Topic } from '../../../../migrations/1686916410-createTopics';

type Error = { error: string };

type TopicsResponseBodyPost = { topicComments: Topic } | Error;
type TopicsResponseBodyGet = { topicComments: Topic[] } | Error;
/* type TopicsResponseBodyDelete = { topicComments: Comment } | Error;
type TopicsResponseBodyPut = { comment: Comment } | Error; */

const topicCommentSchema = z.object({
  topicsComment: z.string(),
});

export async function GET(
  request: NextRequest,
): Promise<NextResponse<TopicsResponseBodyGet>> {
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




export async function POST(
  request: NextRequest,
): Promise<NextResponse<TopicsResponseBodyPost>> {
  const body = await request.json();

  // zod please verify the body matches my schema
  const result = topicCommentSchema.safeParse(body);

  if (!result.success) {
    // zod send you details about the error
    /*     console.log(result.error);
     */ return NextResponse.json(
      {
        error: 'The data is incomplete',
      },
      { status: 400 },
    );
  }
  // query the database to get all the animals
  const threadComment = await createTopic('hello', result.data.topicsComment);
  console.log('Testing', threadComment);
  if (!threadComment) {
    // zod send you details about the error
    // console.log(result.error);
    return NextResponse.json(
      {
        error: 'Error creating the new animal',
      },
      { status: 500 },
    );
  }
  /* rename animal to comment  */
  /* topic.id */

  // query the database to get all the animals
  /*  const comment = await getCommentById(animal.id);

  if (!comment) {
    return NextResponse.json(
      {
        error: 'Animal Not Found',
      },
      { status: 404 },
    );
  } */

  return NextResponse.json({ comment: threadComment });
}

/* export async function DELETE(
  request: NextRequest,
  { params }: { params: Record<string, string | string[]> },
): Promise<NextResponse<TopicsResponseBodyDelete>> {
  const topicId = Number(params.topicId);

  if (!topicId) {
    return NextResponse.json(
      {
        error: 'Animal id is not valid',
      },
      { status: 400 },
    );
  }
  // query the database to get all the animals
  const topic = await deleteTopicById(topicId);

  if (!topic) {
    return NextResponse.json(
      {
        error: 'Not Found',
      },
      { status: 404 },
    );
  }

  return NextResponse.json({ topic: topic });
} */

/* export async function PUT(
  request: NextRequest,
  { params }: { params: Record<string, string | string[]> },
): Promise<NextResponse<TopicsResponseBodyPut>> {
  const topicId = Number(params.commentId);
  const body = await request.json();

  if (!topicId) {
    return NextResponse.json(
      {
        error: 'not valid',
      },
      { status: 400 },
    );
  }
 */
  // zod please verify the body matches my schema
  const result = topicCommentSchema.safeParse(topicComments);

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
  // query the database to update the animal
  const topic = await createTopic( result.data.topicsComment
  );

  if (!topic) {
    return NextResponse.json(
      {
        error: 'Animal Not Found',
      },
      { status: 404 },
    );
  }
  return NextResponse.json({topicComments:
  });
}
