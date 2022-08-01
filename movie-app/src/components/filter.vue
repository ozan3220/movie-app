<template>
  <div class="col-4 d-flex align-items-center flex-column">
    <filter-item-vue
      @get-selected="setOptions"
      header="Genre"
      :options="options.genres"
    />
    <filter-item-vue
      @get-selected="setOptions"
      header="IMDB"
      :options="options.imdb"
    />
    <button v-on:click="getRandomMovieAndPostToParent()" class="rollButton">
      Roll
    </button>
  </div>
</template>

  <script>
import filterItemVue from "./filterItem.vue";
import { getMovie } from "../mixins/getMovie";
export default {
  data() {
    return {
      selectedGenres: [],
      options: {
        imdb: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        genres: [
          { id: 28, name: "Action" },
          { id: 12, name: "Adventure" },
          { id: 16, name: "Animation" },
          { id: 35, name: "Comedy" },
          { id: 80, name: "Crime" },
          { id: 99, name: "Documentary" },
          { id: 18, name: "Drama" },
          { id: 10751, name: "Family" },
          { id: 14, name: "Fantasy" },
          { id: 36, name: "History" },
          { id: 27, name: "Horror" },
          { id: 10402, name: "Music" },
          { id: 9648, name: "Mystery" },
          { id: 10749, name: "Romance" },
          { id: 878, name: "Science Fiction" },
          { id: 10770, name: "TV Movie" },
          { id: 53, name: "Thriller" },
          { id: 10752, name: "War" },
          { id: 37, name: "Western" },
        ],
      },
      selected: {
        imdb: String,
        genre: Number,
      },
    };
  },
  components: {
    filterItemVue,
  },
  mixins: [getMovie],
  methods: {
    setOptions(e) {
      if (e[1] == "Genre") this.selected.genre = e[0];
      else this.selected.imdb = e[0];
    },
    async getRandomMovieAndPostToParent() {
      await this.roll(this.selected.imdb, this.selected.genre);
      this.genrePull();
      this.$emit("movieDetail", [this.result, this.selectedGenres]);
    },
    genrePull() {
      this.selectedGenres = [];
      for (let c = 0; c < this.result.genre_ids.length; c++) {
        for (let k = 0; k < this.options.genres.length; k++) {
          if (this.result.genre_ids[c] == this.options.genres[k].id) {
            this.selectedGenres.push(this.options.genres[k].name);
            console.log(this.selectedGenres);
          }
        }
      }
    },
  },
};
</script>
  
<style scoped>
.selectContainer {
  width: 300px;
}
.genre {
  width: 12rem;
  height: 2.6rem;
  border-radius: 2rem;
  background: #d9d9d9;
}
.rollButton {
  width: 15rem;
  height: 40px;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  background: grey;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
  border: none;
  color: white;
  margin: 5px;
  align-self: center;
}
.rollButton:after {
  border-radius: 5px;
  position: absolute;
  content: "";
  width: 0;
  height: 100%;
  top: 0;
  left: 0;
  direction: rtl;
  z-index: -1;
  box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
  transition: all 0.3s ease;
}
.rollButton:hover {
  color: #000;
}
.rollButton:hover:after {
  left: auto;
  right: 0;
  width: 100%;
}
.rollButton:active {
  top: 2px;
}
.selectContainer h4 {
  color: #f9f9f9;
  letter-spacing: 1px;
  margin-right: 1rem;
}
</style>
