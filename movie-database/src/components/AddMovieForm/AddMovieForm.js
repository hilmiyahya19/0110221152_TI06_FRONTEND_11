import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovieForm.module.css";
import Button from "../Button/ui/Button";

// Menangkap props
function AddMovieForm(props) {
  /**
   * Ini hanya snippet(potongan) code.
   * Kode yang lainnya tetap sama.
   */

  // Destructing props: state movies
  const { movies, setMovies } = props;
  
  //membuat state object
  const [formData, setFormData]=useState({
    title:"",
    date:"",
    poster:"",
    type:"",
  });

  //Membuat fungsi handleChange untuk handle semua input form 
  function handleChange(e){
    const{name, value} = e.target;

    setFormData({
      ...formData,
      [name]:value,
    });
  }

  // Membuat state: isTitleError, isDateError
  const [formError, setFormError] = useState({
    isTitleError: false,
    isDateError: false,
    isPosterError: false,
    isTypeError: false,
  })

  function setError(isError, boolean){
    setFormError({
      ...formError,
      [isError] : boolean,
    });
  }

  
  const {title, date, poster, type} = formData;
  const {isTitleError, isDateError, isPosterError, isTypeError} = formError
  
  
  function validate() {
    if (title === "") {
      setError("isTitleError", "true");
      return false;
    }
    // Jika title kosong, set isTitleError true
    else if (date === "") {
      setError("isDateError", "true");
      setError("isTitleError", "false");
      return false;
    }
    
    // Jika title kosong, set isTitleError true
    else if (poster === "") {
      setError("isPosterError", "true");
      setError("isDateError", "false");
      return false;
    }
    // Jika title kosong, set isTitleError true
    else if (type === "") {
      setError("isTypeError", "true");
      setError("isPosterError", "false");
      return false;
    }
    else {
      return true;
    }
  }

  function addMovie() {
    const movie = {
      id: nanoid(),
      title: title,
      year: date,
      type: type,
      poster: poster,
    };

    // SOLVED: HOW TO ADD MOVIE TO MOVIES :)
    setMovies([...movies, movie]);


  }

  function handleSubmit(e) {
    /**
     * Mencegah perilaku default form.
     * Mencegah form direfresh ketika disubmit.
     */
    e.preventDefault();

    validate() && addMovie ()
  }

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src="https://picsum.photos/536/354"
            alt=""
          />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Add Movie Form</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.form__group}>
              <label htmlFor="title" className={styles.form__label}>
                Title
              </label>
              <input
                id="title"
                className={styles.form__input}
                type="text"
                name="title"
                // Memberikan value input: title
                value={title}
                // Memberikan event onChange
                onChange={handleChange}
              />
              {/*
               * Menambahkan infline if: operator &&
               * Jika isTitleError true maka render error
               */}
              {isTitleError && <Alert>Title Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="date" className={styles.form__label}>
                Date
              </label>
              <input
                id="date"
                className={styles.form__input}
                type="text"
                name="date"
                // Memberikan value input: date
                value={date}
                // Memberikan event onChange
                onChange={handleChange}
              />
              {/*
               * Menambahkan infline if: operator &&
               * Jika isDateError true maka render error
               */}
              {isDateError && <Alert>Date Wajib Diisi</Alert>}
            </div>

            <div className={styles.form__group}>
              <label htmlFor="poster" className={styles.form__label}>
                Gambar
              </label>
              <input
                id="poster"
                className={styles.form__input}
                type="text"
                name="poster"
                // Memberikan value input: poster
                value={poster}
                // Memberikan event onChange
                onChange={handleChange}
              />
              {/*
               * Menambahkan infline if: operator &&
               * Jika isPosterError true maka render error
               */}
              {isPosterError && <Alert>Link Gambar Wajib Diisi</Alert>}
            </div>

            <div className={styles.form__group}>
              <label htmlFor="type" className={styles.form__label}>
                Genre
              </label>
              <select name="type" id="type" className={styles.form__input} value={type} onChange={handleChange}>
                <option value="drama">Drama</option>
                <option value="horror">Horror</option>
                <option value="action">Action</option>
                <option value="romance">Romance</option>
                <option value="comedy">Comedy</option>
                <option value="thriller">Thriller</option>
              </select>
              {/*
               * Menambahkan infline if: operator &&
               * Jika isTypeError true maka render error
               */}
              {isTypeError && <Alert>Genre Wajib Diisi</Alert>}
            </div>

            <div>
              <Button size="" full={true}>Add Movie</Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
