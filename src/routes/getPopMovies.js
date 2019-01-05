const requester = require("request");
require("env2")("config.env");

exports.get = (request, response) => {
  apiKey = process.env.api_key;
  var mostPop_url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US/&page=1`;
  requester.get(mostPop_url, (error, res, body) => {
    if (error) {
      throw new Error("Sorry, couldn't fetch library!");
    } else {
      var parsedBody = JSON.parse(res.body);
      var arrayOfMovies = parsedBody.results;
      var sortedMovies = arrayOfMovies.map(ele => {
        return {
          title: ele.title,
          rating: ele.vote_average,
          img_url: "https://image.tmdb.org/t/p/w500" + ele.poster_path,
          summary: ele.overview
        };
      });
      response.render("home", { movies: sortedMovies });
    }
  });
};
