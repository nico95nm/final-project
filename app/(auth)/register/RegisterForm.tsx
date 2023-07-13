'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { RegisterResponseBodyPost } from '../../api/(auth)/register/route';

/* import styles from './RegisterForm.module.scss';
 */
export default function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  async function register() {
    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });

    const data: RegisterResponseBodyPost = await response.json();

    if ('error' in data) {
      setError(data.error);
      return;
    }

    console.log(data.user);
    router.push(`/`);
    // we may have in the future revalidatePath()
    router.refresh();
    console.log(data.user.username);
  }

  return (
    <div className="container">
      <form
        onSubmit={(event) => event.preventDefault()}
        className="bg-blue text-center w-1/3 px-3 py-4 text-white mx-auto rounded"
      >
        <label>
          Username:
          <input
            className="text-black block w-full mx-auto text-sm py-2 px-3 rounded"
            value={username}
            onChange={(event) => setUsername(event.currentTarget.value)}
          />
        </label>
        <label>
          Password:
          <input
            className="text-black block w-full mx-auto text-sm py-2 px-3 rounded my-3"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
        </label>
        <button
          className="bg-blue text-white font-bold py-2 px-4 rounded border block mx-auto w-full"
          onClick={async () => await register()}
        >
          Sign up
        </button>
        {error !== '' && <div>{error}</div>}
      </form>
    </div>
  );
}
