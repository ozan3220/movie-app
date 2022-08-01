<template>
  <div class="container">
    <div
      class="
        row
        d-flex
        flex-column flex-xxl-row
        align-items-center
        justify-content-center
        ps-5
        px-5
      "
    >
      <FilterVue @movie-detail="setMovieInfos" />
      <InformationVue :result="movieInfos" />
    </div>
  </div>
</template>

<style scoped>
.container {
  border-radius: 40px;
  background: linear-gradient(
    118.93deg,
    rgba(255, 255, 255, 0.1) 24.69%,
    rgba(255, 255, 255, 0.4) 79.97%
  );
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(40px);
  padding: 5rem;
}
</style>
<script>
import FilterVue from "./filter.vue";
import InformationVue from "./information.vue";
export default {
  data() {
    return {
      movieInfos: [],
    };
  },
  components: {
    FilterVue,
    InformationVue,
  },
  methods: {
    setMovieInfos(e) {
      this.movieInfos = e;
      console.log(this.movieInfos);
    },
  },
};
</script>