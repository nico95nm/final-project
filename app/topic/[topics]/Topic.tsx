'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { createOrUpdateComment } from './actions';

// {id: number, comment: string}[]]

type Props = {
  threadId: number;
};

export default function threadCommentForm(props: Props) {
  /* const [comment, setComment] = useState(''); */
  // If you need to have a type parameter for the useState (either
  // undefined or a string)
  const [comment, setComment] = useState<undefined | string>();
  const router = useRouter();

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setComment(event.currentTarget.value);
  }
}
