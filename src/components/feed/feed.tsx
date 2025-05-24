import { IPhoto } from '@/actions/photos-get';
import FeedPhotos from './feed-photos';

interface IFeed {
  photos: IPhoto[];
}

export default function Feed({ photos }: IFeed) {
  return (
    <div>
      <FeedPhotos photos={photos} />
    </div>
  );
}
