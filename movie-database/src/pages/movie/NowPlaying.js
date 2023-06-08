import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";

function NowPlaying () {
    // Simpan API kEY dan URL ke variable
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

    // Membuat state movies
    const [movies, setMovies] = useState ([]);

    useEffect(() => {
        getNowPlaying();
    }, []);
  
    async function getNowPlaying(){
            // Fetch data dari axios
            const response = await axios(URL);
        
            // Simpan data ke state movie
            setMovies(response.data.results);
       
    }
    return (
        <>
            <Hero/>
            <Movies title="Now Playing" movies={movies}/>
        </>

    );
}


export default NowPlaying;