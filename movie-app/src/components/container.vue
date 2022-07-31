<template>
  <div class="container">
    <FilterVue />
    <InformationVue />
  </div>
</template>

<style scoped>
.container {
  border-radius: 40px;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  box-sizing: border-box;
  background: linear-gradient(
    118.93deg,
    rgba(255, 255, 255, 0.1) 24.69%,
    rgba(255, 255, 255, 0.4) 79.97%
  );
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(40px);
  width: 70%;
  padding: 5rem;
}
</style>
<script>
import FilterVue from "./filter.vue";
import InformationVue from "./information.vue";
export default {
  components: {
    FilterVue,
    InformationVue,
  },
};
</script>