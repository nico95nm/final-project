/* import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { notFound } from 'next/navigation';
import { Editor } from 'react-draft-wysiwyg';
import { getCookie } from '../../../../util/cookies';
import { parseJson } from '../../../../util/json';
import CommentThreadForm from '../page';

type Props = {
  params: { threadId: string };
};

export type CookieCommentItem = {
  id: number;
  topic: string;
  comment?: string;
}; */
/*
export default function CommentThreadPage(props: Props) {
  const commentThreadsCookie = getCookie('commentThread');
  const commentThreads = !commentThreadsCookie
    ? []
    : parseJson(commentThreadsCookie);

  const commentThread = commentThreads?.find((commentThread) => {
    return commentThread.id;
  });
 */
/*   return (
    <>
           {commentThread?.comment}
       <commentThreads commentId={commentThread.id} />

    </>
  );
} */
