import { useEffect, useState } from "react";

const Api = () => {
  const [search, setSearch] = useState("");
  const [movie, setmovie] = useState({});
  const [clicked, setclicked] = useState(false);

  const handleSearch = (e: Event) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(search);
    setclicked(false);
  };

  const url =
    "https://movie-database-by-based-api.p.rapidapi.com/v1/movies/?s=" + search;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "e4575375f7mshacb502a1b09389ap18f574jsnea8326dae87f",
      "x-rapidapi-host": "movie-database-by-based-api.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((response) => {
        return response.json();
      })
      .then((data) => setmovie(data));
    console.log(movie);
  }, [search]);

  return (
    <div>
      <div className=" text-7xl text-center text-red-500 font-bold mb-4">
        MOVIE STORE
      </div>
      <div className=" flex justify-center">
        <input
          type="text"
          placeholder="Avengers..."
          className=" rounded-md mr-4"
          onChange={handleSearch}
        />
        <button
          type="submit"
          className=" bg-black text-white p-2 rounded-md font-bold"
        >
          search
        </button>
      </div>
      {movie.message}
    </div>
  );
};

export default Api;
