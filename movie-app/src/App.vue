<template>
  <div class="app d-flex justify-content-center align-items-center">
    <containerVue />
  </div>
</template> 

<style scoped>
.app {
  background: linear-gradient(270.81deg, #00b9ae -2.2%, #21242d 103.17%);
  width: 100%;
  height: 100vh;
  font-family: "Lato", sans-serif;
}
</style>

<script>
import containerVue from "./components/container.vue";
export default {
  methods: {
    method() {},
  },
  components: {
    containerVue,
  },
};
</script>