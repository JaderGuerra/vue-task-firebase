<template>
  <div id="app" class="container mt-2">
    <navbar></navbar>
    <div class="row">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    navbar: Navbar,
  },
};
</script>

<style>
</style>
