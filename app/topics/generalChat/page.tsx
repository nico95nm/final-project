/* 'use client';

import { Avatar } from '@mui/material';
import { getUserByUsername } from '../../../database/users';
import CreateCommentForm from './components/comment/CommentForm';
import AvatarPage from './profile/[username]/Avatar';

type Props = {
  username: string;
  user: string;
};
export default function generalChat(props: Props) {
  return (
    <main>
      <CreateCommentForm
        topic={0}
        userId={props.user.id}
        postId={props.user.id}
        comments={[]}
      />
      <AvatarPage username={props.user.username} />
    </main>
  );
}
 */

import { cookies } from 'next/headers';
import { notFound, redirect } from 'next/navigation';
import * as React from 'react';
import {
  getAllComments,
  getAllCommentsWithUserInfo,
} from '../../../database/comment';
import { getValidSessionByToken } from '../../../database/sessions';
import { getUserBySessionToken } from '../../../database/users';
import CreateCommentForm from '../../components/comment/CommentForm';
import AvatarPage from '../../profile/[username]/Avatar';

/* import { getUserByUsername } from '../../../../database/users';
 */ /* import AvatarPage from '../app/Avatar';
 */
type Props = {
  params: { username: string };
};

export default async function ProfileUsernamePage({ params }: Props) {
  const sessionTokenCookie = cookies().get('sessionToken');

  // 2. check if the sessionToken has a valid session

  const session =
    sessionTokenCookie &&
    (await getValidSessionByToken(sessionTokenCookie.value));

  // 3. Either redirect or render the login form
  if (!session) {
    redirect('/');
  }

  const user = await getUserBySessionToken(session.token);
  console.log(user);

  if (!user) {
    notFound();
  }
  if (!user) {
    notFound();
  }
  const comments = await getAllComments();
  const commentsWithUserInfo = await getAllCommentsWithUserInfo();
  return (
    <main>
      <div className="flex gap-4 text-blue-500">
        <AvatarPage username={user.username} />
        <CreateCommentForm
          topic={1}
          userId={user.id}
          postId={user.id}
          comments={[]}
        />
      </div>
      {commentsWithUserInfo.map((comment) => {
        return (
          <div className="flex text-green-600" key={`animal-div-${comment.id}`}>
            <div className="px-8">
              <AvatarPage username={comment.username} />
            </div>
            {/* {comment.id} */} Username: {comment.username}
            <br />
            Content: {comment.comment}
            <hr />
          </div>
        );
      })}
    </main>
  );
}
