const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map(({ Poster }) => (
        <div className="image-container d-flext justify-content-start m-1">
          <img src={Poster} alt="movie" />
        </div>
      ))}
    </>
  );
};
export default MovieList;
