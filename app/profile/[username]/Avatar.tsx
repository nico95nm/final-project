'use client';

import Avatar from '@mui/material/Avatar';
import * as React from 'react';

type Props = {
  username: string;
};

export default function AvatarPage(props: Props) {
  return (
    <main>
      {/*     This is how you pass props  */} <Avatar>{props.username}</Avatar>
    </main>
  );
}
