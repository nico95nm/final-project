'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { createOrUpdateComment } from './[announcements]/actions';
import style from './page.module.scss';

// {id: number, comment: string}[]]

type Props = {
  threadId: number;
};

export default function ThreadCommentForm(props: Props) {
  const [comment, setComment] = useState('');
  // If you need to have a type parameter for the useState (either
  // undefined or a string)
  // const [comment, setComment] = useState<undefined | string>();
  const router = useRouter();

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setComment(event.currentTarget.value);
  }

  return (
    // WARNING: in order to use Server Action you need to update the next.js config with serverActions: true,
    // when using Server Actions we don't need prevent the default of the form

    <form>
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
      {/* Instead of using onClick we use formAction */}
      <br />
      <button
        className={style.button}
        formAction={async () => {
          router.refresh();
          await createOrUpdateComment(props.threadId, comment);
        }}
      >
        Update Comment
      </button>
    </form>
  );
}
