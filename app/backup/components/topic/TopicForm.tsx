'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { Topics } from '../../../database/topics';
import { getUserBySessionToken } from '../../../database/users';
import { cookies } from '../../../util/cookies';
import { TopicResponseBodyPost } from '../../api/(auth)/topics/route';
import style from './page.module.scss';

// {id: number, comment: string}[]]

type Props = {
  topicId: number;
};

export default function TopicThreadForm(props: Props) {
  const [topic, setTopic] = useState('');
  const [error, setError] = useState('');
  // If you need to have a type parameter for the useState (either
  // undefined or a string)
  // const [comment, setComment] = useState<undefined | string>();
  const router = useRouter();

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setTopic(event.currentTarget.value);
   }
  async function topics() {
    console.log('hello');
    const response = await fetch('/api/announcements', {
      method: 'POST',
      body: JSON.stringify({ topic }),
    });
    const data: TopicResponseBodyPost = await response.json();

    if ('error' in data) {
      setError(data.error);

      return;
    }
    const cookieStore = cookies();
    const sessionToken = cookieStore.get('sessionToken');
    const user = !sessionToken?.value
      ? undefined
      : await getUserBySessionToken(sessionToken.value);
    console.log(data.user);
    /*     router.push(`/`);
     */ // we may have in the future revalidatePath()
    router.refresh();
  }
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('sessionToken');

  const user = !sessionToken?.value
    ? undefined
    : await getUserBySessionToken(sessionToken.value);
return (
   // WARNING: in order to use Server Action you need to update the next.js config with serverActions: true,
  // when using Server Actions we don't need prevent the default of the form

    <form onSubmit={(event) => event.preventDefault()}>
      <div className="mx-56 flex flex-col  text-blue-600 ">
        <div className="font-inter box-border h-10  flex items-center   w-50 p-4 border-1 px-3 py-4 b bg-[#0d202d] text-white">
          Announcements
        </div>
      </div>
{/*       <textarea>{props.topicId}</textarea> */}
{/*       <textarea
      placeholder='Topic'
        className={style.textArea}
        value={topic}
        onChange={handleChange}
      /> */}
  {/*     <button onClick={async () => await topics()}>Podst comment</button>
      <br /> */}
    </form>
  )
