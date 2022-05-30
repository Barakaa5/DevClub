import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Searchbox from "./components/searchBox";
import Movie from "./components/movie";
import MovieList from "./components/movieList.js";
// import fetch from "node-fetch";

function App() { ////////////////change
  const [searchValue, setSearchValue] = useState("");

  // async function handleSearch() {
  //   try {
  //     const response = await fetch(
  //       `http://www.omdbapi.com/?i=tt3896198&apikey=52a9975b&s=${searchValue}`
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //     // data.Search.forEach((movie) => {
  //     //   console.log(movie.Poster);
  //     // });
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }

  return (
    <div className="text-center mt-5" style={{ margin: "auto" }}>
      <div className="App">
        <Header></Header>
        <Searchbox
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        ></Searchbox>
        
        <MovieList searchValue={searchValue} />
      </div>
    </div>
  );
}

export default App;
