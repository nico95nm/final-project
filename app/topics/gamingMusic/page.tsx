import { cookies } from 'next/headers';
import { notFound, redirect } from 'next/navigation';
import { getAllComments } from '../../../database/comment';
import { getValidSessionByToken } from '../../../database/sessions';
import { getUserBySessionToken } from '../../../database/users';
import CreateCommentForm from '../../components/comment/CommentForm';
import AvatarPage from '../../profile/[username]/Avatar';

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
      {comments.map((comment) => {
        return (
          <div key={`animal-div-${comment.id}`}>
            <div>
              {comment.id} {comment.usersId} {comment.topic}
              <br />
              {comment.comment}
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
