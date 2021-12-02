<template>
  <li></li>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tareas: [],
    };
  },
  methods: {
    getAllData() {
      axios
        .get("https://vuetareas-98bd3-default-rtdb.firebaseio.com/tareas.json")
        // .then((data) => data.json())
        .then((resp) => {
          for (let id in resp) {
            this.tareas.push(resp[id]);
          }
        });
      console.log(this.tareas.texto);
    },
  },
  created() {
    this.getAllData();
  },
};
</script>

<style>
</style>