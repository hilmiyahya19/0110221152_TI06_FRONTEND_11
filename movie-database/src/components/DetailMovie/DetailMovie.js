import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Button from "../Button/ui/Button";
import StyledDetailMovie from "./DetailMovie.styled";

function DetailMovie() {
    const {id} = useParams();
    const [movie, setMovie] = useState("");
    const API_KEY = process.env.REACT_APP_API_KEY;
    const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
    const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

    useEffect(()=>{
        getDetailMovieById();
    }, [])

    async function getDetailMovieById() {
        const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
        const response = await axios(URL);
    
        setMovie(response.data)
    }
    console.log(movie);
    

    return(
        <StyledDetailMovie>
           <h2 size="lg" mb="4" center>Detail movie</h2>
          <section>
            <div className="hero__left">
                <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.Title}/>   
            </div>
            <div className="hero__right">
                <h2 size="md" color="webku">{movie.title}</h2>
                <h2 color="info"  mb="2">Genre: {genres}</h2>
                <p color="webku" mb="3">{movie.overview}</p>
                <Button as="a" href={trailer} target="_blank" variant="success" size="lg">Watch</Button>
            </div>
        </section>
        </StyledDetailMovie>
    );
}

export default DetailMovie;