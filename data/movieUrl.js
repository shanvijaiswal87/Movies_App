const API_KEY = "588691f9";

export default [
  {
    id: "0",
    name: "Top Rated",
    url: `https://www.omdbapi.com/?apikey=${API_KEY}&y=2020&type=movie`,
  },
  {
    id: "1",
    name: "Action Movies",
    url: `https://www.omdbapi.com/?apikey=${API_KEY}&y=2020&type=series
        `,
  },
  {
    id: "10",
    name: "Hindi Movies",
    url: `https://www.omdbapi.com/?apikey=${API_KEY}&y=2022&type=movie
        `,
  },
  {
    id: "2",
    name: "Comedy Movies",
    url: `https://www.omdbapi.com/?apikey=${API_KEY}&y=2022&type=series
        `,
  },
  {
    id: "3",
    name: "Horror Movies",
    url: `https://www.omdbapi.com/?apikey=${API_KEY}&y=2019&type=movie
        `,
  },
  {
    id: "4",
    name: "Kannada Blockbusters",
    url: `https://www.omdbapi.com/?apikey=${API_KEY}&y=2019&type=series
        `,
  },
  {
    id: "5",
    name: "Romance Movies",
    url: `https://www.omdbapi.com/?apikey=${API_KEY}&y=2018&type=movie
        `,
  },
  {
    id: "6",
    name: "Netflix Originals",
    url: `https://www.omdbapi.com/?apikey=${API_KEY}&y=2018&type=series
        `,
  },
];

