const MovieList = ({ movies, handleFavouritesClick, favouriteComponent }) => {
  const FvouriteComponent = favouriteComponent;
  return (
    <>
      {movies.map((movie) => (
        <div className="image-container d-flex justify-content-start m-1">
          <img src={movie.Poster} alt="movie" />
          <div
            onClick={() => handleFavouritesClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <FvouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};
export default MovieList;
