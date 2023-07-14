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
            key={`animal-div-${comment.id}`}
            className="bg-white border rounded-lg shadow-lg p-4 m-10"
          >
            <div className="flex gap-4">
              <AvatarPage username={comment.username} />
              <div className="flex flex-col w-full">
                <div className="flex justify-between">
                  <p className="text-xl truncate overflow-hidden">
                    {' '}
                    {comment.username}
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-gray-500">{comment.comment}</p>
          </div>
        );
      })}
      {/*       {JSON.stringify(comments)}
       */}{' '}
    </main>
  );
}
