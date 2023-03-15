// 1. Create an array of objects representing movies in your watchlist. Each object has the following properties: id, title and director. Write a React component that takes the array of movies as input and returns an unordered list of movies, where each list item displays the movie's title and director.

const watchlist = [
  { id: 1, title: "YJHD", director: "Karan Johar" },
  { id: 2, title: "Pulp Fiction", director: "Quentin Tarantino" },
  { id: 3, title: "3 idiots", director: "Vidhu Vinod Chopra" },
  { id: 4, title: "Avatar", director: "James Cameron" }
];

const MovieList = () => {
  return (
    <div>
      <h2>Watchlist</h2>
      <ul>
        {watchlist.map((movie) => (
          <li className="non-bullet-list" key={movie.id}>
            {movie.title} : {movie.director}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
