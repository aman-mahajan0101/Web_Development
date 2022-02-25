const mongoose = require("mongoose");

//Connecting to the mongo database

mongoose
  .connect("mongodb://localhost:27017/movie-app")
  .then(() => console.log("DB succesfully connected"))
  .catch((err) => console.error(err));

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    trim: true,
  },
  year: {
    type: Number,
    min: [2000, "Year should not be less than 2000"],
    max: [2025, "Year should not be greater than 2025"],
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
    default: 1,
  },
  isWatched: {
    type: Boolean,
    default: false,
  },
  actor: {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
  },
});

//Adding our own method inside the mongo schema and to add this your own methods always make them before defining the schema
movieSchema.methods.greet = function () {
  console.log("HELLO");
};

const Movie = mongoose.model("Movie", movieSchema);

// //Adding our own method inside the mongo schema
// movieSchema.methods.greet = function () {
//   console.log("HELLO");
// };

const aquamen = new Movie({
  name: "Aquamen",
  year: 2010,
  rating: 7,
  actor: { firstName: "ABC", lastName: "DEF" },
});

aquamen
  .save()
  .then((m) => console.log(m))
  .catch((err) => console.log(err));

aquamen.greet();

const DUMMY_MOVIES = [
  {
    name: "Fast and Furious",
    year: 2012,
    rating: 7,
    isWatched: false,
  },
  {
    name: "Mission Impossible",
    year: 2013,
    rating: 8,
    isWatched: true,
  },
  {
    name: "Intersteller",
    year: 2014,
    rating: 8,
    isWatched: true,
  },
];

Movie.insertMany(DUMMY_MOVIES)
  .then((m) => console.log(m))
  .catch((err) => console.log(err));
