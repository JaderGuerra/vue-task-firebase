<template>
  <div>
    <li v-for="(tarea, index) in tareas" :key="index">{{ tarea.texto }}</li>
  </div>
</template>

<script>
import axios from "axios";
//import { bus } from "../main";
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
        .then((resp) => {
          for (let id in resp.data) {
            this.tareas.push(resp.data[id]);
          }         
        });
    },
  },
  created() {
    this.getAllData();
    
  },
};
</script>

<style>
</style>