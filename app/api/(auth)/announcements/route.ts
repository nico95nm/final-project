import { NextRequest, NextResponse } from 'next/server';
import { string, z } from 'zod';
import {
  createComment,
  deleteCommentById,
  getCommentById,
  getComments,
  postCommentById,
  updateCommentById,
} from '../../../../database/comment';

type Error = { error: string };

type CommentsResponseBodyPost = { comment: string } | Error;
type CommentsResponseBodyGet = { comment: Comment } | Error;
type CommentsResponseBodyDelete = { comment: Comment } | Error;
type CommentsResponseBodyPut = { comment: Comment } | Error;

const commentSchema = z.object({
  comment: z.string(),
});

export async function POST(
  request: NextRequest,
): Promise<NextResponse<CommentsResponseBodyPost>> {
  const body = await request.json();

  // zod please verify the body matches my schema
  const result = commentSchema.safeParse(body);

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
  const animal = await createComment('hello', result.data.comment);
  console.log('Testing', animal);
  if (!animal) {
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

  return NextResponse.json({ comment: animal.comment });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Record<string, string | string[]> },
): Promise<NextResponse<CommentsResponseBodyDelete>> {
  const commentId = Number(params.animalId);

  if (!commentId) {
    return NextResponse.json(
      {
        error: 'Animal id is not valid',
      },
      { status: 400 },
    );
  }
  // query the database to get all the animals
  const comment = await deleteCommentById(commentId);

  if (!comment) {
    return NextResponse.json(
      {
        error: 'Animal Not Found',
      },
      { status: 404 },
    );
  }

  return NextResponse.json({ comment: comment });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Record<string, string | string[]> },
): Promise<NextResponse<CommentsResponseBodyPut>> {
  const commentId = Number(params.commentId);
  const body = await request.json();

  if (!commentId) {
    return NextResponse.json(
      {
        error: 'Animal id is not valid',
      },
      { status: 400 },
    );
  }

  // zod please verify the body matches my schema
  const result = commentSchema.safeParse(body);

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
  const comment = await updateCommentById(
    commentId,
    result.data.topic,
    result.data.comment,
  );

  if (!comment) {
    return NextResponse.json(
      {
        error: 'Animal Not Found',
      },
      { status: 404 },
    );
  }

  return NextResponse.json({
    comment: comment,
  });
}
