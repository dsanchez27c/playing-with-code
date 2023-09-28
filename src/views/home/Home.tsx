import './../../App.css';
import { HomeStyle } from '../../styles/views/home/HomeStyles';
import { useState } from 'react';
import { Card } from '../../components/card/Card';
import useAxios from '../../hooks/useAxios/useAxios';
import { insAnimeList } from '../../services/api-service/AnimeApi';

export const Home = () => {
  const isLogin: Boolean = false;
  const [tab, setTab] = useState<Number | undefined>(isLogin ? 1 : 2);

  const [animes = [], error, loading] = useAxios({
    axiosInstance: insAnimeList,
    method: 'get',
    url: '',
    requestconfig: {
      headers: {
        'Content-Language': 'en-US'
      }
    }
  });

  const data: any = animes;

  console.log('animes: ', Boolean(animes), animes);
  console.log('animes: ', Boolean(animes), data?.data);
  console.log('loading: ', loading);
  console.log('error: ', error);

  data?.data?.map((el: any, idx: number) => {
    return console.log(el);
  })

  if (data?.data) {
    console.log(data.data);
  }

  return (
    <div className={HomeStyle}>
      <div className="home-container">
        <div className="home-highlight-anime">
          <h3>Destacados</h3>
          <div className="home-highlight-anime-list"></div>
        </div>
        <div className="home-list-anime">
          <div className="home-btn-list-anime">
            <button
              onClick={() => {
                setTab(1);
              }}
            >
              Has Visto
            </button>
            <button
              onClick={() => {
                setTab(2);
              }}
            >
              Actuales
            </button>
            <button
              onClick={() => {
                setTab(3);
              }}
            >
              Proximamente
            </button>
          </div>
          <div className="home-card-anime-container">
            {tab === 1 && (
              <div className="anime-viewing">
                {isLogin ? (
                  <h3>Lista de animes que has visto.</h3>
                ) : (
                  <h3>
                    Estos son los animes que has visto. (activo solamente cuando
                    inicias sesión)
                  </h3>
                )}
              </div>
            )}
            {tab === 2 && (
              <div className="anime-actual">
                <h3>Estos son los animes en emisión actualmente.</h3>
                {loading && <p>Loading...</p>}
                {!loading && data && data?.data?.map((el: any, idx: number) => {
                  return (
                    <Card key={idx} anime={el} />
                  )
                })}
              </div>
            )}
            {tab === 3 && (
              <div className="anime-incoming">
                <h3>Estos son los animes que vendrán proximamente.</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
