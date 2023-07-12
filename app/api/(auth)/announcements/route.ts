import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createComment } from '../../../../database/comment';
import { getUserBySessionToken } from '../../../../database/users';
import { Comment } from '../../../../migrations/1686916408-createTableComments';

export type Error = {
  error: string;
};

type CommentsResponseBodyPost = { announcements: Comment[] } | Error;
/* type CommentsResponseBodyGet = { announcements: Comment[] } | Error;
/* type CommentsResponseBodyDelete = { comment: Comment } | Error;
type CommentsResponseBodyPut = { comment: Comment } | Error; */

const commentSchema = z.object({
  userId: z.number(),
  topic: z.number(),
  comment: z.string(),
});

/* export async function GET(
  request: NextRequest,
): Promise<NextResponse<CommentsResponseBodyGet>> {
  return NextResponse.json(
    {
      error: 'Session token is not valid',
    },
    { status: 401 },
  );
}
 */
export async function POST(
  request: NextRequest,
): Promise<NextResponse<CommentsResponseBodyPost>> {
  /*   const { searchParams } = new URL(request.url);
   */ const sessionTokenCookie = cookies().get('sessionToken');
  const userSession =
    sessionTokenCookie &&
    (await getUserBySessionToken(sessionTokenCookie.value));
  /*   console.log('This comes from API', userSession);
   */ if (!userSession) {
    return NextResponse.json(
      {
        error: 'Session token is not valid',
      },
      { status: 401 },
    );
  }
  const body = await request.json();
  console.log('body1', body);
  const result = commentSchema.safeParse(body);
  if (!result.success) {
    console.log(result.error);
    return NextResponse.json(
      {
        error: 'The data is incomplete',
      },
      { status: 400 },
    );
  }
  const newComment = await createComment(
    result.data.userId,
    result.data.topic,
    result.data.comment,
  );
  if (!newComment) {
    return NextResponse.json(
      {
        error: 'Error creating the new post',
      },
      { status: 500 },
    );
  }
  return NextResponse.json({ announcements: [newComment] });
}
/*
function getAllComment() {
  throw new Error('Function not implemented.');
} */
/*   const commentId = Number(params.commentId);

  if (!commentId) {
    return NextResponse.json(
      {
        error: 'Animal id is not valid',
      },
      { status: 400 },
    );
  } */
// query the database to get all the animals
/*   const comment = await createComment('hello1', result.data.comment);
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
  } */
/*  rename animal to comment */
/*  comment.id; */

/*
export async function POST(
  request: NextRequest,
): Promise<NextResponse<CommentsResponseBodyPost>> {
  const body = await request.json();
 */
// zod please verify the body matches my schema
/*  const result = commentSchema.safeParse(body);

  if (!result.success) { */
// zod send you details about the error
/*  return NextResponse.json(
      {
        error: 'The data is incomplete',
      },
      { status: 400 },
    );
  } */

// query the database to get all the animals
/*     const comments = await getCommentsById(comment.id);

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
 */
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
/*   return NextResponse.json({
    comment: Comment,
  });
} */
