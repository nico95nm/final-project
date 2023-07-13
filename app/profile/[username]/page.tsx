import { notFound } from 'next/navigation';
import * as React from 'react';
import { getUserByUsername } from '../../../database/users';
import AvatarPage from './Avatar';

type Props = {
  params: { username: string };
};
export default async function ProfileUsernamePage({ params }: Props) {
  const user = await getUserByUsername(params.username);

  if (!user) {
    notFound();
  }
  return (
    <main>
      <div className="mx-56 flex flex-col  text-blue-600 ">
        <div className="font-inter box-border h-10  flex items-center   w-50 p-4 border-1 px-3 py-4 b bg-[#0d202d] text-white">
          <span>PROFILE</span>
        </div>
        <AvatarPage username={user.username} />
        <span className="text-red-500">
          Name <input />
        </span>
        <span>
          Email
          <input />
          <span>
            Bio: <textarea />
          </span>
        </span>
        {/*       <div>id: {user.id}</div> */}
      </div>
    </main>
  );
}
