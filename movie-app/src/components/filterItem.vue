<template>
  <div
    class="
      selectContainer
      d-flex
      justify-content-center
      align-items-center
      mb-3
    "
  >
    <h4 class="text-center text-light">{{ header }}</h4>
    <select
      v-on:change="$emit('getSelected', [selected, header])"
      class="select text-center fs-4 border border-0"
      v-model="selected"
    >
      <option v-for="option in options" :key="option">
        {{ option }}<span v-if="'number' == typeof option">+</span>
      </option>
    </select>
  </div>
</template>

<style scoped>
.select {
  width: 12rem;
  height: 2.6rem;
  border-radius: 2rem;
  background: #d9d9d9;
  margin-left: 0.68rem;
  -moz-appearance: none;
  -webkit-appearance: none;
}
</style>>

<script>
export default {
  data() {
    return {
      selected: String,
    };
  },
  props: ["header", "options"],
};
</script>