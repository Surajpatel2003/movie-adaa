import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Home.scss'
import { BiPlay } from "react-icons/bi"
import { AiOutlinePlus } from "react-icons/ai"

const apikey = "2aed4ae1db06bbe2a9e39f7c4425243e";
const url = "https://api.themoviedb.org/3/movie";
const upcoming = "upcoming";
const nowplaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";
const imgUrl = "https://image.tmdb.org/t/p/original";

const Card = ({ img }) => (

  <img className='card' src={img} alt="" />

)


const Row = ({ title, arr = [] }) => (
  <div className='row'>
    <h2>{title}</h2>
    <div>
      {
        arr.map((item, index) => (
          <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
        ))
      }
    </div>
  </div>

)


export default function Home() {

  const [upComingMovies, setUpComingMovies] = useState([])
  const [nowPlayingMovies, setUpnowPlayingMovies] = useState([])
  const [popularMovies, setUpPopularMovies] = useState([])
  const [topRatedMovies, setUpTopRatedMovies] = useState([])

  useEffect(() => {

    const fetchUpcoming = async () => {
      const { data: { results } } = await axios.get(`${url}/${upcoming}?api_key=${apikey}`);
      setUpComingMovies(results);

    }


    const fetchNowPlaying = async () => {
      const { data: { results } } = await axios.get(`${url}/${nowplaying}?api_key=${apikey}`);
      setUpnowPlayingMovies(results);

    }


    const fetchPopularMovies = async () => {
      const { data: { results } } = await axios.get(`${url}/${popular}?api_key=${apikey}`);
      setUpPopularMovies(results);

    }


    const fetchTopRatedMovies = async () => {
      const { data: { results } } = await axios.get(`${url}/${topRated}?api_key=${apikey}`);
      setUpTopRatedMovies(results);

    }



    fetchUpcoming();
    fetchNowPlaying();
    fetchPopularMovies();
    fetchTopRatedMovies();


  }, [])



  return (
    <section className='home'>
      <div className="banner" style={{
        backgroundImage: popularMovies[0] ? `url(${imgUrl}/${popularMovies[0].poster_path})` : "none"
      }}>

        {popularMovies[0] && <h1>{popularMovies[0].original_title}</h1>}
        {popularMovies[0] && <p>{popularMovies[0].overview}</p>}

        <div>
          <button><BiPlay /> Play  </button>
          <button>My List <AiOutlinePlus /> </button>
        </div>





      </div>
      <Row title={"Upcoming Movies"} arr={upComingMovies} />
      <Row title={"Now Playing"} arr={nowPlayingMovies} />
      <Row title={"Popular Movies"} arr={popularMovies} />
      <Row title={"Top Rated Movies"} arr={topRatedMovies} />

    </section>
  )
}
