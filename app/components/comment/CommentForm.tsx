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
      <div>
        <textarea
          onChange={(event) => setCommentContent(event.currentTarget.value)}
          placeholder="Write here:"
        />
        <button onClick={async () => await createComment()}>Reply</button>
      </div>
    </form>
  );
}
