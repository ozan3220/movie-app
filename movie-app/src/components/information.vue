<template>
  <div
    class="
      col-xxl-8
      d-flex
      flex-column flex-md-row
      align-items-md-start align-items-center
      justify-content-center
      mt-5 mt-xxl-0
    "
  >
    <div class="moviePoster d-flex" v-if="result.length != 0">
      <img :src="imgSource" />
    </div>

    <div class="movieInfos d-flex flex-column ms-4" v-if="result.length != 0">
      <h1 class="movieName text-break">{{ result[0].title }}</h1>
      <h2 class="movieStats fs-3 text-break">
        {{ result[0].release_date }} TMDB:{{ result[0].vote_average }}/10
      </h2>
      <div class="d-flex">
        <h2
          class="genre fs-4 text-break mx-5"
          v-for="genre in result[1]"
          :key="genre"
        >
          {{ genre }}
        </h2>
      </div>
      <p class="movieOwerview">{{ result[0].overview }}</p>
    </div>
  </div>
</template>

<style scoped>
.moviePoster {
  width: 220px;
  height: 330px;
}
.moviePoster img {
  border-radius: 20px;
  width: 100%;
}
.movieInfos {
  max-height: 330px;
  width: 400px;
}
.movieInfos h1,
h2,
p {
  margin: 0 0 2rem 0;
}
.movieInfos h2 {
  word-spacing: 10px;
}
</style>
<script>
export default {
  data() {
    return {
      imgSource: "",
    };
  },
  methods: {},
  props: ["result"],

  updated() {
    this.imgSource =
      "https://image.tmdb.org/t/p/original" + this.result[0].poster_path;
  },
};
</script>