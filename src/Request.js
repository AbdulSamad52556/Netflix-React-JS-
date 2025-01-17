const key = '298a0ebc06d55eb7375443de7eea4cb0'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&append_to_response=videos`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
    videosRequest:`http://api.themoviedb.org/3/movie/897087/videos?api_key=${key}`
  };
  export default requests