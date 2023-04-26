const Result = ({ result }) => {
  const { album, artists, title, release_date } = result?.music[0];
  return (
    <div className="resultBlock">
      <h1>{title}</h1>
      <h2>{artists[0].name}</h2>
      <p>Album: {album.name}</p>
      <p>Release date: {release_date}</p>
    </div>
  );
};

export default Result;
