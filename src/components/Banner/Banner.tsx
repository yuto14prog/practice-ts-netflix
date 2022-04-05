import { useState, useEffect } from 'react';
import instance from '../../api/axios';
import { requests } from '../../api/request';
import './Banner.scss'

type movieProps = {
  title?: string
  name?: string
  original_name?: string
  backdrop_path?: string
  overview?: string
}

export const Banner = () => {
  const [movie, setMovie] = useState<movieProps>({})

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchNetflixOriginals)
      setMovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
      return request
    }
    fetchData()
  }, [])

  function truncate(str: any, n: number) {
    if (str !== undefined) {
      return str.length > n ? str?.substr(0, n - 1) + "..." : str
    }
  }

  return (
    <header
      className='Banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className='Banner-contents'>
        <h1 className='Banner-title'>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className='Banner-buttons'>
          <button className='Banner-button'>Play</button>
          <button className='Banner-button'>My List</button>
        </div>
        <h1 className='Banner-description'>{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className='Banner-fadeBottom'></div>
    </header>
  )
}