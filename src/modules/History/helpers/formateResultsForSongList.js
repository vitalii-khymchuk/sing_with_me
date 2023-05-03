const formateResultsForSongList = (results) =>
  results.map(({ _id, query, thumb, hits }) => ({
    id: _id,
    full_title: query,
    header_image_thumbnail_url: thumb,
    release_date_for_display: hits.length,
  }));

export { formateResultsForSongList };
