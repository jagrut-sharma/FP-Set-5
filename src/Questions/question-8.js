// 8. Create an array of objects representing movies in your watchlist. Each object has the following properties: id, title, director, and runtime. Write a React component that takes the array of movies as input and generates an ordered list of movies, where each list item displays the movie's title, director, and runtime.

const watchlist = [
  { id: 1, title: "YJHD", director: "Karan Johar", runtime: "150 min" },
  {
    id: 2,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    runtime: "108 min"
  },
  {
    id: 3,
    title: "3 idiots",
    director: "Vidhu Vinod Chopra",
    runtime: "160 min"
  },
  { id: 4, title: "Avatar", director: "James Cameron", runtime: "145 min" }
];

const MoviesDetails = () => {
  return (
    <div>
      <h2 className="heading">Movies Details</h2>
      <ol>
        {watchlist.map((movie) => (
          <li key={movie.id} className="order-list">
            Title: {movie.title} || Director: {movie.director} || Runtime:{" "}
            {movie.runtime}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MoviesDetails;
