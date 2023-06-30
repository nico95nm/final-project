'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

type Props = {
  topicCommentstId: number;
};

export default function TopicCommentsThreadForm(props: Props) {
  const [topicComment, setTopicComment] = useState('');
  const [error, setError] = useState('');
  // If you need to have a type parameter for the useState (either
  // undefined or a string)
  // const [comment, setComment] = useState<undefined | string>();
  const router = useRouter();

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setTopicComment(event.currentTarget.value);
    console.log(event.currentTarget.value);
  }
  async function topicComments() {
    console.log('hello');
    const response = await fetch('/api/announcements', {
      method: 'POST',
      body: JSON.stringify({ topicComment }),
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
  }
  // WARNING: in order to use Server Action you need to update the next.js config with serverActions: true,
  // when using Server Actions we don't need prevent the default of the form

/*   return (

    <form onSubmit={(event) => event.preventDefault()}>
      <div className="mx-56 flex flex-col  text-blue-600 ">
        <div className="font-inter box-border h-10  flex items-center   w-50 p-4 border-1 px-3 py-4 b bg-[#0d202d] text-white">
          Announcements
        </div>
      </div>

      <textarea
        className={style.textArea}
        value={topicComment}
        onChange={handleChange}
      />
      <button onClick={async () => await topicComments()}>Post comment</button>
      {/* Instead of using onClick we use formAction */}
      <br />
    </form>
  ); */
}
