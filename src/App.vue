<template>
  <div id="app">
    <v-navbar></v-navbar>
    <div class="container px-auto">asdas</div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("loadUser", this);
    this.$store.dispatch("loadData", this);
  }
};
</script>