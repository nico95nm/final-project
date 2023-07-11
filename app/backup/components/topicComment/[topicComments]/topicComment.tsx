'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { createOrUpdateComment } from './actions';

import

// {id: number, comment: string}[]]

type Props = {
  topicCommentId: number;
};

export default function topicCommentForm(props: Props) {
  /* const [comment, setComment] = useState(''); */
  // If you need to have a type parameter for the useState (either
  // undefined or a string)
  const [topicComment, setTopicComment] = useState<undefined | string>();
  const router = useRouter();

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setTopicComment(event.currentTarget.value);
  }

  /* return ( */
    // WARNING: in order to use Server Action you need to update the next.js config with serverActions: true,
    // when using Server Actions we don't need prevent the default of the form
   /*  <form>
      <textarea
        className={style.textArea}
        value={topicComment}
        onChange={handleChange}
      />
      <br />
      <button
        className={style.button}
        formAction={async () => {
          router.refresh();
          await createOrUpdateComment(props.threadId, topicComment);
        }}
      >
        Update Comment twst
      </button>
    </form>
  ); */
}
