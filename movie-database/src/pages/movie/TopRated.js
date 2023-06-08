/* eslint-disable no-unreachable */
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";

function TopRated () {
    // Simpan API kEY dan URL ke variable
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

    // Membuat state movies
    const [movies, setMovies] = useState ([]);

    useEffect(() => {
        getTopRated();
    }, []);
  
    async function getTopRated(){
            // Fetch data dari axios
            const response = await axios(URL);
        
            // Simpan data ke state movie
            setMovies(response.data.results);
       
    }
    return (
        <>
            <Hero/>
            <Movies title="Top Rated" movies={movies}/>
        </>

    );

    return (
        <>
       
            <h2>TopRated</h2>
        </>

    );
}

export default TopRated;