import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { notFound } from 'next/navigation';
import { Editor } from 'react-draft-wysiwyg';
import { getCookie } from '../../../../util/cookies';
import { parseJson } from '../../../../util/json';
import CommentThreadForm from '../page';

type Props = {
  params: { threadId: string };
};

export type CookieThreadtItem = {
  id: number;
  comment: string;
  topic?: string;
};

export default function TopicThreadPage(props: Props) {
  const topicThreadsCookie = getCookie('topicThread');
  const topicThreads = !topicThreadsCookie ? [] : parseJson(topicThreadsCookie);

  const topicThread = topicThreads?.find((commentThread) => {
    return commentThread.id;
  });

  return (
    <>
      {/*       {commentThread?.comment} */}
      {/*       <commentThreads commentId={commentThread.id} />
       */}{' '}
    </>
  );
}
type Thead = {
  id: number;
  topic: string;
  comment: string;
};
