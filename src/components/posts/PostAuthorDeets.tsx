import Image from 'next/image';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import NoUserAvatar from '@@/images/no-user-avatar.jpg';

dayjs.extend(relativeTime);

export const PostAuthorDeets = ({ post }: any) => {
  const postDateExtra =
    dayjs(post.createdAt).year() === dayjs().year()
      ? `(${dayjs(post.createdAt).fromNow()})`
      : `${dayjs(post.createdAt).format("'YY")}`;

  return (
    <div className="flex items-center gap-2">
      <Image
        width={30}
        height={30}
        alt="avatar"
        src={NoUserAvatar}
        className="rounded-full"
      />
      <div className='leading-4'>
        <p>{post.author.nickname}</p>
        <time dateTime={post.createdAt} className='text-xs text-gray-500'>
          {dayjs(post.createdAt).format('MMM D')} {postDateExtra}
        </time>
      </div>
    </div>
  );
};
