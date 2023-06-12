// Import Navbar, Hero, Movies, Footer Component
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import { useState } from "react";
import data from "../utils/constants/data";
//import Counter from "../components/Counter";


function Main() {
 
 
  const [movies, setMovies] = useState(data);
  
  return (
    <main>
      <Hero />
      {/* Mengirim props: state movies */}
      <Movies title="Latest Movie" movies={movies} setMovies={setMovies} />
      <AddMovieForm movies={movies} setMovies={setMovies} />
    </main>
  );

  //return <Counter />;
}


function Home() {
  return (
    <>

      <Main />
      
    </>
  );
}

export default Home;
