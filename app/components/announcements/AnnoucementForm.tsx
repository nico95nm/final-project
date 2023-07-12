/* 'use client';

import { cookies } from 'next/headers';
import { useRouter } from 'next/navigation';
import router from 'next/router';
import { useState } from 'react';
import { getAllComments } from '../../../database/comment';
import { getUserBySessionToken } from '../../../database/users';
import { Comment } from '../../../migrations/1686916408-createTableComments';

type Props = {
  usersId: number;
  topic: string;
  comment: string;
};

export default function CreatePostForm({ usersId, topic, comment }: Props) {
  /*   const [topicList, setTopicList] = useState(topics);
   */
/*
  const [topicInput, setTopicInput] = useState('');
  const [comments, setComments] = useState(comment);  */
/*  const [userid, setUserid] = useState(post.id);
 */
/*   const router = useRouter()
 */
/*   async function createPost() {
    const response = await fetch('/api/announcements', {
      method: 'POST',
      body: JSON.stringify({
        usersId,
        topic: topicInput,
        comment: comments,
      }),
    });
    router.refresh();

    const data = await response.json();
    console.log(data);
    // setPostList([...postList, data.post]);

    setComments('');
  }
 */
/*   return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div>
        <br /> */
{
  /*         <textarea
          value={comments}
          onChange={(event) => setComments(event.currentTarget.value)}
          placeholder="Say something..."
          required
        />
        <button onClick={async () => await createPost()}>Post</button> */
}
{
  /*       </div>
    </form>
  );
}
 */
}
