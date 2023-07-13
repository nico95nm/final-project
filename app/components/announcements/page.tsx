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
    <main className="text-2xl">
      <div
        className="  flex pl-8 pt-6
 text-blue-500"
      >
        <AvatarPage username={user.username} />
        <div>
          <CreateCommentForm
            topic={0}
            userId={user.id}
            postId={user.id}
            comments={[]}
          />
        </div>
      </div>
      {commentsWithUserInfo.map((comment) => {
        return (
          <div
            className="textName pt-6 p-4 flexbox justify-centerborder-2 border-sky-500 flex  m-4" /* {`${textNAm.className} pt-6 p-4 flexbox justify-centerborder-2 border-sky-500 flex  m-4 `} */
            key={`animal-div-${comment.id}`}
          >
            <AvatarPage username={comment.username} />
            {/* {comment.id} */} <div className="font-bold mx-4">Username:</div>{' '}
            {comment.username}
            <br />
            <div className="font-bold mx-4">Content:</div> {comment.comment}
            <br />
          </div>
        );
      })}
      {/*       {JSON.stringify(comments)}
       */}{' '}
    </main>
  );
}
