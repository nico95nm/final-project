import { cookies } from 'next/headers';
import { notFound, redirect } from 'next/navigation';
import {
  getAllComments,
  getAllCommentsWithUserInfo,
} from '../../../database/comment';
import { getValidSessionByToken } from '../../../database/sessions';
import { getUserBySessionToken } from '../../../database/users';
import AvatarPage from '../../profile/[username]/Avatar';
import CreateCommentForm from '../comment/CommentForm';

// import CommentForm from './comments/CommentForm';

export default async function ActivityPage() {
  // 1. Check if the sessionToken cookie exit
  const sessionTokenCookie = cookies().get('sessionToken');

  // 2. check if the sessionToken has a valid session

  const session =
    sessionTokenCookie &&
    (await getValidSessionByToken(sessionTokenCookie.value));

  // 3. Either redirect or render the login form
  if (!session) redirect('/');

  const user = await getUserBySessionToken(session.token);
  console.log(user);

  if (!user) {
    notFound();
  }

  const comments = await getAllComments();
  const commentsWithUserInfo = await getAllCommentsWithUserInfo();
  console.log(commentsWithUserInfo);
  console.log(comments);
  return (
    <main>
      <div className="flex gap-4">
        <AvatarPage username={user.username} />
        <CreateCommentForm
          topic={0}
          userId={user.id}
          postId={user.id}
          comments={[]}
        />
      </div>
      {commentsWithUserInfo.map((comment) => {
        return (
          <div key={`animal-div-${comment.id}`}>
            <div className="flex">
              <AvatarPage username={comment.username} />
              {/* {comment.id} */} Username: {comment.username}
              <br />
              Content: {comment.comment}
            </div>
            <br />
          </div>
        );
      })}
      {/*       {JSON.stringify(comments)}
       */}{' '}
    </main>
  );
}
