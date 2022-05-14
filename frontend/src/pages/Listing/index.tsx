import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movies";
import {BASE_URL} from "utils/requests";


function Listing(){


  const [pageNumber, setPageNumber] = useState(0);

  const [page, setPage] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true
  });

  //useEffect recebe 2 argumentos: 1 função para ser executada, e uma lista de objetos que ele vai observar para executar o 1° argumento
  useEffect(() =>{
    axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=title`)
    .then(response => {
      const data = response.data as MoviePage;
      setPage(data);
  });
  }, [pageNumber]);


  return(
    <>

      <Pagination/>
      
      <div className="container">
        <div className="row">

          {page.content.map(movie => (
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" key={movie.id}>
              <MovieCard movie={movie}/>
            </div>
            )
          )}   
          
        </div>
      </div>

      
    </>
  );
}

export default Listing;