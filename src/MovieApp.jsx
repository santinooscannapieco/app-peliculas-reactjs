import { useState } from "react";

export const MovieApp = () => {
  const [search, setSearch] = useState("");
  const [movieList, setMovieList] = useState(null);

  const urlBase = "https://api.themoviedb.org/3/search/movie";
  const API_KEY = "YOUR_API_KEY";

  const handleInputChange = ({ target }) => {
    setSearch(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchMovie();
  };

  const fetchMovie = async () => {
    try {
      const response = await fetch(
        `${urlBase}?query=${search}&api_key=${API_KEY}&language=es-ES`
      );
      const data = await response.json();
      console.log(data.results);
      setMovieList(data.results);
    } catch (error) {
      console.error("Ha habido un error: ", error);
    }
  };

  return (
    <div className="flex flex-col gap-5 items-center mb-50">
      <h1 className="my-10 text-4xl font-bold">Buscador de Películas</h1>
      <form onSubmit={handleSubmit} className="flex justify-center gap-4">
        <input
          type="text"
          placeholder="Escribí tu película"
          className="w-50 md:w-150 lg:w-200 p-2 border-1 rounded-md"
          value={search}
          onChange={handleInputChange}
        />
        <button className="p-2 rounded-md bg-blue-800 hover:bg-blue-600 cursor-pointer">
          Buscar
        </button>
      </form>
      {movieList && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5 md:max-w-350  justify-items-center">
          {movieList.map((movie) => (
            <div
              key={movie.id}
              className="w-75 flex flex-col bg-stone-50 rounded-xl"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-70 rounded-2 mt-2 self-center rounded-md"
              />
              <div className="text-black m-4">
                <h5 className="h-20 font-bold">{movie.title}</h5>
                <p className="text-sm">{movie.overview}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

{
  /* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */
}

{
  /* <div className="card">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/tLAYqqrkaQzi6JgaSLJvfTwil1J.jpg`}
            alt=""
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">T2: Reprogramming The Terminator</h5>
            <p className="card-text">
              This retrospective documentary focuses on the cast and crew
              reminiscing about the making of the film and its legacy. It
              features new interviews James Cameron, William Wisher, Arnold
              Schwarzenegger, Robert Patrick, Joe Morton, Edward Furlong, Brad
              Fiedel, Mario Kassar, Stephanie Austin, Adam Greenberg and Dennis
              Muren.
            </p>
          </div>
        </div>
      </div> */
}
