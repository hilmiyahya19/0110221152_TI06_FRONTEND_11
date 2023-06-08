import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";

function Popular () {
    // Simpan API kEY dan URL ke variable
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

    // Membuat state movies
    const [movies, setMovies] = useState ([]);

    useEffect(() => {
        getPopularMovies();
    }, []);
  
    async function getPopularMovies(){
            // Fetch data dari axios
            const response = await axios(URL);
        
            // Simpan data ke state movie
            setMovies(response.data.results);
       
    }

    console.log(movies);
    return (
        <>
            <Hero/>
            <Movies title="Popular Movie" movies={movies}/>
        </>

    );
}

export default Popular;