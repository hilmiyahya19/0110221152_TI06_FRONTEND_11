/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect,useState } from "react";
import Button from "../Button/ui/Button";
import StyledHero from "./Hero.styled"

function Hero() {
  // Membuat state movie
  const [movie, setMovie]= useState("");

  async function fetchMovie(){
    const response = await fetch(
      "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590"
    );

    const data = await response.json();

    //set movie dengan data movie hasil fetch
    setMovie(data);

  }

  useEffect(fetchMovie,[] );

  console.log(movie);

  return (
    <StyledHero>
      <section>
        <div className="hero__left">
          <h2>{movie.Title}</h2>
          <h3>
            {movie.Genre}
          </h3>
          <p>
          {movie.Plot}
          </p>
          <Button variant="secondary">Watch</Button>
        </div>
        <div className="hero__right">
          <img
            src="https://picsum.photos/536/354"
            alt={movie.Title}
          />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
