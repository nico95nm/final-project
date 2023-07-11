import { NextRequest, NextResponse } from 'next/server';
import { string, z } from 'zod';
import { updateCommentById } from '../../../../database/comment';
import {
  createTopic,
  deleteTopicById,
  updateTopicById,
} from '../../../../database/topics';

type Error = { error: string };
export type TopicResponseBodyPost = { comment: string } | Error;
type TopicsResponseBodyGet = { comment: Comment } | Error;
type TopicsResponseBodyDelete = { comment: Comment } | Error;
type TopicsResponseBodyPut = { comment: Comment } | Error;

const topicSchema = z.object({
  topic: z.string(),
});

export async function POST(
  request: NextRequest,
): Promise<NextResponse<TopicsResponseBodyPost>> {
  const body = await request.json();

  // zod please verify the body matches my schema
  const result = topicSchema.safeParse(body);

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
  const thread = await createTopic('world', result.data.topic);
  console.log('Testing', thread);
  if (!thread) {
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

  return NextResponse.json({ topic: thread.topic });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Record<string, string | string[]> },
): Promise<NextResponse<TopicsResponseBodyDelete>> {
  const topicId = Number(params.topicId);

  if (!topicId) {
    return NextResponse.json(
      {
        error: 'user id is not valid',
      },
      { status: 400 },
    );
  }
  // query the database to get all the animals
  const topic = await deleteTopicById(topicId);

  if (!topic) {
    return NextResponse.json(
      {
        error: 'Animal Not Found',
      },
      { status: 404 },
    );
  }

  return NextResponse.json({ topic: topic });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Record<string, string | string[]> },
): Promise<NextResponse<TopicsResponseBodyPut>> {
  const topicId = Number(params.topicId);
  const body = await request.json();

  if (!topicId) {
    return NextResponse.json(
      {
        error: 'Animal id is not valid',
      },
      { status: 400 },
    );
  }

  // zod please verify the body matches my schema
  const result = topicSchema.safeParse(body);

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
  const topic = await updateCommentById(topicId, result.data.topic);

  if (!topic) {
    return NextResponse.json(
      {
        error: 'Animal Not Found',
      },
      { status: 404 },
    );
  }

  return NextResponse.json({
    topic: topic,
  });
}
