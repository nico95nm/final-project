'use client';

import { useRouter } from 'next/navigation';
import { logout } from './(auth)/logout/actions';

export function LogoutButton() {
  const router = useRouter();
  return (
    <form>
      <button
        /*         className={styles.button}
         */ formAction={async () => {
          await logout();
          router.refresh();
        }}
      >
        logout
      </button>
    </form>
  );
}
