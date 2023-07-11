'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../../util/cookies';
import { parseJson } from '../../../../util/json';

export async function createOrUpdateComment(threadId: number, comment: string) {
  // 1. get the current cookie
  // This get the cookies from the Request Headers
  const threadCommentsCookie = getCookie('threadComments');
  // 2. we parse the cookie
  const threadComments = !threadCommentsCookie
    ? // case A: cookie is undefined
      // undefined
      // we need to create the new array with the fruitCommnet inside
      []
    : parseJson(threadCommentsCookie);

  // 3. we edit the object

  // We get the object for the fruit in cookies or undefined
  const threadToUpdate = threadComments?.find((threadComment) => {
    return threadComment.id === threadId;
  });

  // case B: the cookie is defined but have the fruit in the action
  // if we are in fruit 1
  // [{id:1, comment:"abc"}]
  if (threadToUpdate) {
    // we need to update the fruitComment
    threadToUpdate.comment = comment;
  } else {
    // case C: the cookie is defined but doesn't have the fruit in the action
    // if we are in fruit 1
    // [{id:2, comment:"abc"}]
    //
    // WARNING: Be careful of using the exclamation mark
    // Only use it if you know that you want the error!
    threadComments!.push({
      // we need insert the fruitCommnet
      id: threadId,
      comment,
      topic: ,
    });
  }

  // 4. we override the cookie
  // This set the cookies into the Response Headers
  await cookies().set('threadComments', JSON.stringify(threadComments));
}
