import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import {
  createComment,
  deleteCommentById,
  getComments,
  getCommentsById,
  postCommentById,
  updateCommentById,
} from '../../../../database/comment';

type Error = { error: string };

export type CommentsResponseBodyPost = { comment: string } | Error;
type CommentsResponseBodyGet = { comment: Comment } | Error;
/* type CommentsResponseBodyDelete = { comment: Comment } | Error;
type CommentsResponseBodyPut = { comment: Comment } | Error; */

const commentSchema = z.object({
  comment: z.string(),
  topicComment: z.string(),
 );

export async function POST(
  request: NextRequest,
): Promise<NextResponse<CommentsResponseBodyPost>> {
  const body = await request.json();

  // zod please verify the body matches my schema
  const result = commentSchema.safeParse(body);

  if (!result.success) {
    // zod send you details about the error
    return NextResponse.json(
      {
        error: 'The data is incomplete',
      },
      { status: 400 },
    );
  }
  export async function GET(
    request: NextRequest,
    { params }: { params: Record<string, string | string[]> },
  ): Promise<NextResponse<CommentsResponseBodyGet>> {
    const commentId = Number(params.commentId);

    if (!commentId) {
      return NextResponse.json(
        {
          error: 'Animal id is not valid',
        },
        { status: 400 },
      );
    }
    // query the database to get all the animals
    const comment = await createComment('hello1', result.data.comment);
    console.log('123', comment);
    if (!comment) {
      console.log(comment);
      // zod send you details about the error
      console.log(result.error);
      return NextResponse.json(
        {
          error: 'Error creating a new comment',
        },
        { status: 500 },
      );
    }
    /* rename animal to comment  */
    Topic.id;

    // query the database to get all the animals
    const comments = await getCommentsById(comment.id);

    if (!comments) {
      return NextResponse.json(
        {
          error: 'Not Found',
        },
        { status: 404 },
      );
    }

    return NextResponse.json({ comment: comment.comment });
  }

  /* export async function DELETE(
  request: NextRequest,
  { params }: { params: Record<string, string | string[]> },
): Promise<NextResponse<CommentsResponseBodyDelete>> {
  const commentId = Number(params.commentId);

  if (!commentId) {
    return NextResponse.json(
      {
        error: 'Id is not valid',
      },
      { status: 400 },
    );
  }
  // query the database to get all the animals
  const comment = await deleteCommentById(commentId);

  if (!comment) {
    return NextResponse.json(
      {
        error: 'Not Found',
      },
      { status: 404 },
    );
  }

  return NextResponse.json({ comment: comment });
}
 */
  /* export async function PUT(
  request: NextRequest,
  { params }: { params: Record<string, string | string[]> },
): Promise<NextResponse<CommentsResponseBodyPut>> {
  const comments = Number(params.commentId);
  const body = await request.json();

  if (!comments) {
    return NextResponse.json(
      {
        error: 'Id is not valid',
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
    comments,
    result.data.topic,
    result.data.comment,
  );

  if (!comment) {
    return NextResponse.json(
      {
        error: 'Not Found',
      },
      { status: 404 },
    );
  }
 */
  return NextResponse.json({
    comment: Comment,
  });
}
