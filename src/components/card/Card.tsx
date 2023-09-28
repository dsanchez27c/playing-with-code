import useAxios from '../../hooks/useAxios/useAxios';
import { insAnimeList } from '../../services/api-service/AnimeApi';

interface AnimeInterface {
  title: String;
}

export const Card = ({ anime }: { anime: AnimeInterface }) => {
  const { title } = anime;
  return <div className={`card-container`}>{title}</div>;
};
