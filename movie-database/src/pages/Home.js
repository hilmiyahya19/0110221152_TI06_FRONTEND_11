// Import Navbar, Hero, Movies, Footer Component
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import { useState } from "react";
import data from "../utils/constants/data";
//import Counter from "../components/Counter";

/**
 * Membuat Component Main.
 * Menampung Hero dan Movies
 */
function Main() {
  /**
   * Ini hanya snippet(potongan) code.
   * Kode yang lainnya tetap sama.
   */

  /**
   * Mengangkat stave movies: lifting state.
   * Dari Component Movies ke Component Home.
   * Agar bisa digunakan oleh Component yang lain.
   */
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

/**
 * Membuat Component Home.
 * Menampilkan Halaman Home.
 * Menampung Navbar, Main, dan Footer Component
 */
function Home() {
  return (
    <>

      <Main />
      
    </>
  );
}

export default Home;
