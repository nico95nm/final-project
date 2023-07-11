import sjson from 'secure-json-parse';
import { CookieCommentItem } from '../app/components/announcements/[announcements]/page';

export function parseJson(
  stringifiedJson: string,
): undefined | CookieCommentItem[] {
  if (!stringifiedJson) return undefined;

  try {
    return sjson(stringifiedJson);
  } catch {
    return undefined;
  }
}
