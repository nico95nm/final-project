'use client';

import { Route } from 'next';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { getSafeReturnToPath } from '../../../util/validation';
import { LoginResponseBodyPost } from '../../api/(auth)/login/route';
import styles from './LoginForm.module.scss';

type Props = { returnTo?: string | string[] };

export default function LoginForm(props: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  async function login() {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
    console.log('test responce loginform tsx', response);
    const data: LoginResponseBodyPost = await response.json();
    console.log('test data loginform tsx', data);

    if ('error' in data) {
      setError(data.error);
      console.log(data.error);
      return;
    }

    router.push(
      getSafeReturnToPath(props.returnTo) ||
        (`/profile/${data.user.username}` as Route),
    );
    // we may have in the future revalidatePath()
    router.refresh();
  }

  return (
    <div className="container">
      <h1 className="text-white text-center">LOG IN</h1>
      <form
        className="text-white bg-blue text-center w-1/3 px-3 py-4  mx-auto rounded"
        onSubmit={(event) => event.preventDefault()}
        placeholder="Username"
      >
        <label>
          Username:
          <input
            value={username}
            onChange={(event) => setUsername(event.currentTarget.value)}
            className=" text-black block w-full mx-auto text-sm py-2 px-3 rounded"
          />
        </label>
        <label>
          Password:
          <input
            className="text-black block w-full mx-auto text-sm py-2 px-3 rounded my-3"
            value={password}
            type="password"
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
        </label>
        <button
          className="bg-blue text-white font-bold py-2 px-4 rounded border block mx-auto w-full"
          /* {styles.button} */ onClick={async () => await login()}
        >
          log in
        </button>
        {error !== '' && <div className="text-red-400">{error}</div>}
      </form>
    </div>
  );
}
