(function() {
  function jsonToQueryString(json) {
    return Object.keys(json)
      .map(function(key) {
        return encodeURIComponent(key) + "=" + encodeURIComponent(json[key]);
      })
      .join("&");
  }
})();

(function() {
  "use strict";

  const api_base_url =
    "https://api.themoviedb.org/3/discover/movie?api_key=e43a6492059a4b298f991f00dfe1bca2&language=zh-TW&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";

  // const year = "2018";
  const images_base_url = "http://image.tmdb.org/t/p/";
  const backdrop_sizes = ["w300", "w780", "w1280", "original"];
  const data = [];

  const row = document.querySelector(".row");

  axios.get(api_base_url).then(function(response) {
    data.push(...response.data.results);
    showCard(data);
  });

  function showCard(data) {
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      const card = document.createElement("div");
      card.classList.add("card", "w-50", "mt-2");
      row.appendChild(card);

      const backdrop_path = document.createElement("img");
      backdrop_path.classList.add("card-img-top");
      backdrop_path.src =
        images_base_url + backdrop_sizes[3] + data[i].backdrop_path;
      card.appendChild(backdrop_path);

      const card_body = document.createElement("div");
      card_body.classList.add("card-body");
      card.appendChild(card_body);

      const card_title = document.createElement("h5");
      card_title.classList.add("card-title");
      card_title.innerText = data[i].original_title;
      card_body.appendChild(card_title);

      const card_overview = document.createElement("p");
      card_overview.classList.add("card-text");
      card_overview.innerText = data[i].overview;
      card_body.appendChild(card_overview);

      const card_vote_average = document.createElement("p");
      card_vote_average.classList.add("card-text");
      card_vote_average.innerText = data[i].vote_average;
      card_body.appendChild(card_vote_average);

      const card_release_date = document.createElement("p");
      card_release_date.classList.add("card-text");
      card_release_date.innerText = data[i].release_date;
      card_body.appendChild(card_release_date);
    }
  }
})();
