import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie/DetailMovie";
import { useEffect, useState } from "react";
import axios from "axios";

function Detail() {
    const {id} = useParams();
    const API_KEY = process.env.REACT_API_KEY;
    const[movies,setMovies] = useState ([]);

    //jalankan useEffect
    useEffect(() => {
        getRecommendationMovies();
    },[]);


   //membuat fungsi
   async function getRecommendationMovies(){
    const URL = `https://api.themoviedb.org/3/movies/${id}/recommendations?api_key=${API_KEY}
    `;

    const response = await axios(URL); 

    //set data movies ke state movies
    setMovies(response.data.results);
   }

    const params = useParams();

    return(
        <div>
            <DetailMovie/>
        </div>
    );
}

export default Detail;