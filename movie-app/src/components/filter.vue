<template>
  <div class="filterContainer">
    <div class="selectContainer">
      <h4>Genres</h4>
      <select name="Genres" id="genre">
        <option value="All genres" selected>All genres</option>
        <option value="Komedi">Komedi</option>
        <option value="Korku">Korku</option>
        <option value="Aksiyon">Aksiyon</option>
        <option value="Animasyon">Animasyon</option>
      </select>
    </div>

    <div class="selectContainer">
      <h4>IMDB</h4>
      <select name="IMDB" id="imdb">
        <option value="1">1+</option>
        <option value="2">2+</option>
        <option value="3">3+</option>
        <option value="4">4+</option>
        <option value="5">5+</option>
        <option value="6">6+</option>
        <option value="8">7+</option>
        <option value="7">8+</option>
        <option value="9">9+</option>
      </select>
    </div>
    <button class="rollButton">Roll</button>
  </div>
</template>

<style scoped>
.filterContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.selectContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
}
#genre {
  border: 0;
  width: 12rem;
  height: 2.6rem;
  border-radius: 2rem;
  background: #d9d9d9;
  font-size: 18px;
  text-align: center;
}
#imdb {
  border: 0;
  width: 12rem;
  height: 2.6rem;
  border-radius: 2rem;
  background: #d9d9d9;
  font-size: 18px;
  text-align: center;
  margin-left: 0.68rem;
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
  font-style: normal;
  font-weight: 400;
  text-align: center;
  color: #f9f9f9;
  letter-spacing: 1px;
  margin-right: 1rem;
}
</style>

<script>
export default {
  data() {
    return {};
  },
};
</script>