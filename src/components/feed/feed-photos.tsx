import { IPhoto } from '@/actions/photos-get';
import Image from 'next/image';
import Link from 'next/link';
import styles from './feed.module.css';

interface IFeedPhotos {
  photos: IPhoto[];
}

export default function FeedPhotos({ photos }: IFeedPhotos) {
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {photos.map((photo: IPhoto, i) => (
        <li className={styles.photo} key={`${photo.id}${i}`}>
          <Link href={`/foto/${photo.id}`} scroll={false}>
            <Image
              src={photo.src}
              width={1500}
              height={1500}
              alt={photo.title}
              sizes="80vw"
            />
            <span className={styles.visualizacao}>{photo.acessos}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
