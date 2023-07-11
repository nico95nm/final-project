{'use client';

import { ChangeEvent, useState } from 'react';
import { Topic } from '../../../migrations/1686916411-createTopicComments';

/* import { useRouter } from 'next/navigation';
import { NextResponse } from 'next/server';
import { CommentsResponseBodyPost } from '../../api/(auth)/announcements/route'; */

// {id: number, comment: string}[]]

type Props = {
  comments: Comment[];
};

export default function AnnouncementsForm(props: Props) {
  const [topicComment, setTopicComment] = useState();
  const [topicCommentInput, stTopicCommentInput] = useState('');
  /*   const [error, setError] = useState('');
   */

  async function createTopic() {
    const response = await fetch('/api/announcements/', {
      method: 'POST',
      body: JSON.stringify({
        topicComment: topicCommentInput,
      }),
    });
    const data = await response.json();
    const [comment, setComment] = useState<undefined | string>();
    // If you need to have a type parameter for the useState (either
    // undefined or a string)
     const router = useRouter();
  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setTopicComment(event.currentTarget.value);
  }
  async function topics() {
    const response = await fetch('/api/announcements', {
      method: 'POST',
      body: JSON.stringify({ topicComment }),
    });

    const data: CommentsResponseBodyPost = response.json();
    console.log(data);

    if ('error' in data) {
      setError(data.error);

      return;
    }
    /*
    console.log(data.user);
    router.push(`/`);
    // we may have in the future revalidatePath()
    router.refresh(); */
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div className="mx-56 flex flex-col  text-blue-600 ">
        <div className="font-inter box-border h-10  flex items-center   w-50 p-4 border-1 px-3 py-4 b bg-[#0d202d] text-white">
          Announcements
        </div>
      </div>

      <textarea
        /*         className={style.textarea}
         */ value={topicComment}
             onChange={handleChange}

      />
      <button onClick={async () => await createTopic()}>Post comment</button>
      <br />
    </form>
  );
}
// WARNING: in order to use Server Action you need to update the next.js config with serverActions: true,
// when using Server Actions we don't need prevent the default of the form
}
