'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { Comments } from '../../database/comment';
import { createOrUpdateComment } from './[topics]/actions';
import style from './page.module.scss';
import CommentThreadForm from './TopicForm';

// {id: number, comment: string}[]]

type Props = {
  commentId: number;
};

export default function CommentPage(props: Props) {
  /*   const [comment, setComment] = useState('');
  const [error, setError] = useState('');
  // If you need to have a type parameter for the useState (either
  // undefined or a string)
  // const [comment, setComment] = useState<undefined | string>();
  const router = useRouter();

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setComment(event.currentTarget.value);
  }
  async function register() {
    const response = await fetch('/api/announcements', {
      method: 'POST',
      body: JSON.stringify({ comment }),
    });
    const data: any = await response.json();

    if ('error' in data) {
      setError(data.error);
      return;
    }

    console.log(data.user);
    router.push(`/`);
    // we may have in the future revalidatePath()
    router.refresh();
    console.log(data.user.username);
  } */

  return (
    // WARNING: in order to use Server Action you need to update the next.js config with serverActions: true,
    // when using Server Actions we don't need prevent the default of the form

    <CommentThreadForm commentId={1} />

    /*     <form>
      <div className="mx-56 flex flex-col  text-blue-600 ">
        <div className="font-inter box-border h-10  flex items-center   w-50 p-4 border-1 px-3 py-4 b bg-[#0d202d] text-white">
          Announcements
        </div>
      </div>
      <button>New topic</button>

      <textarea
        className={style.textArea}
        value={comment}
        onChange={handleChange}
      />
      <br />
      <button
        className={style.button}
        formAction={async () => {
          router.refresh();
          await createOrUpdateComment(props.commentId, comment);
        }}
      >
        Update Comment
      </button>

    </form> */
  );
}
