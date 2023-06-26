import { notFound } from 'next/navigation';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';
import ThreadCommentForm from '../page';

type Props = {
  params: { threadId: string };
};

export type CookieCommentItem = {
  id: number;
  comment?: string;
};

export default function threadPage(props: Props) {
  const threadCommentsCookie = getCookie('threadComments');
  const threadComments = !threadCommentsCookie
    ? []
    : parseJson(threadCommentsCookie);

  const threadToUpdate = threadComments?.find((threadComment) => {
    return threadComment.id;
  });

  return (
    <>
      {threadToUpdate?.comment}
      <ThreadCommentForm threadId={thread.id} />
    </>
  );
}
