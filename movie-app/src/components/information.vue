<template>
  <div class="informationContainer">
    <div class="moviePoster">
      <img
        src="https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
      />
    </div>

    <div class="movieInfos">
      <h1 class="movieName">Spiderman-3</h1>
      <h2 class="movieStats">2019 IMDB:6.8/10 58 minutes</h2>
      <h2 class="genre">Stand-up&Talk, Comedy</h2>
      <p class="movieDescription">
        The ventriloquist, Jeff Dunham, taped his second Netflix special in his
        hometown of Dallas, TX in the American Airlines Center...
      </p>
    </div>
  </div>
</template>

<style scoped>
.informationContainer {
  margin-left: 8rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.moviePoster {
  display: flex;
  width: 220px;
  height: 330px;
}
.moviePoster img {
  border-radius: 20px;
}
.movieInfos {
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  max-height: 330px;
  width: 400px;
}
.movieInfos h1,
h2,
p {
  margin: 0 0 3rem 0;
}
.genre {
  font-size: 1.2rem;
}
.movieName {
  overflow-wrap: break-word;
}
.movieStats {
  overflow-wrap: break-word;
}
.movieDescription {
  word-wrap: break-word;
}
.movieInfos h2 {
  word-spacing: 10px;
}
</style>
<script>
export default {};
</script>