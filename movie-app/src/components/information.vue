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
    <div class="moviePoster d-flex">
      <img
        src="https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
      />
    </div>

    <div class="movieInfos d-flex flex-column ms-4">
      <h1 class="movieName text-break">Spiderman-3</h1>
      <h2 class="movieStats fs-3 text-break">2019 IMDB:6.8/10 58 minutes</h2>
      <h2 class="genre fs-4 text-break">Stand-up&Talk, Comedy</h2>
      <p class="movieDescription">
        The ventriloquist, Jeff Dunham, taped his second Netflix special in his
        hometown of Dallas, TX in the American Airlines Center...
      </p>
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
export default {};
</script>