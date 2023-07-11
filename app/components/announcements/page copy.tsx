import { cookies } from 'next/headers';
import { notFound, redirect } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { getAllComments } from '../../../database/comment';
import { getValidSessionByToken } from '../../../database/sessions';
import { getUserBySessionToken } from '../../../database/users';
import { createOrUpdateComment } from '../announcements/[announcements]/Announcements';
/* import CommentThreadForm from './AnnoucementForm'; */
import CreatePostForm from './AnnoucementForm';

// {id: number, comment: string}[]]
const sessionTokenCookie = cookies().get('sessionToken');
const session =
  sessionTokenCookie &&
  (await getValidSessionByToken(sessionTokenCookie.value));
if (!session) redirect('/announcements');
const user = await getUserBySessionToken(session.token);
console.log(user);
if (!user) {
  notFound();
}
const comments = await getAllComments();
console.log(comments);
export default async function CommentPage() {
  /*
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('sessionToken');
  const user = !sessionToken?.value
    ? undefined
    : await getUserBySessionToken(sessionToken.value);
  const userId = await getUserBySessionToken(session.token);
  console.log(user);

  if (!user) {
    notFound();
  }

  /*   const posts = await getAllComments();
    /* const comments = await getAllComments(); */
  // If you need to have a type parameter for the useState (either
  // undefined or a string)
  // const [comment, setComment] = useState<undefined | string>();

  /*   function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setComment(event.currentTarget.value);
  } */

  return (
    // WARNING: in order to use Server Action you need to update the next.js config with serverActions: true,
    // when using Server Actions we don't need prevent the default of the form

    <main>
      {JSON.stringify(comments)}
      {/*       <div className="mx-56 flex flex-col  text-blue-600 ">
        <div className="font-inter box-border h-10  flex items-center   w-50 p-4 border-1 px-3 py-4 b bg-[#0d202d] text-white">
        Announcements
        </div>
        </div>
        <button>New topic</button>
        <textarea
        placeholder="Announcements"
               className={style.textArea}
               value={comment}
              onChange={handleChange} */}

      {/*      <br />
      <button
      className={style.button}
      formAction={async () => {
        router.refresh();
        await createOrUpdateComment(props.commentId, comment);
      }}
      >
      Update Comment
    </button> */}
      <CreatePostForm topic={'test'} userId={user.id} />
    </main>
  );
}
