'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Props = {
  comments: Comment[];
  postId: number;
  topic: number;
  userId: number;
};

export default function CreateCommentForm({
  comments,
  postId,
  topic,
  userId,
}: Props) {
  const [commentContent, setCommentContent] = useState('');
  const router = useRouter();

  async function createComment() {
    const response = await fetch(`/api/comment`, {
      method: 'POST',
      body: JSON.stringify({
        userId,
        postId,
        topic,
        comment: commentContent,
      }),
    });
    router.refresh();

    const data = await response.json();
    console.log(data);
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div className=" mb-5 flex justify-center  items-center px-3 py-2 rounded-lg bg-gray-500 dark:bg-gray-700">
        <textarea
          className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
          onChange={(event) => setCommentContent(event.currentTarget.value)}
          placeholder="Write here:"
        />
      </div>
      <div className=" text-center mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <button
          type="button"
          onClick={async () => await createComment()}
          className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 18"
          >
            <path
              fill="currentColor"
              d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
            />

            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
            />
          </svg>
          Reply
        </button>
      </div>
    </form>
  );
}
