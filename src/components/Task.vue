<template>
  <div>
    <div class="divLoading" v-if="loading">
      <loading></loading>
    </div>
    <ul class="list-group" v-if="!loading">
      <li class="list-group-item" v-for="(tarea, index) in tareas" :key="index">
        {{ tarea.texto }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import Loading from "../components/Loading"
import { bus } from "../main";

export default {
  components:{
    loading:Loading
  },
  data() {
    return {
      tareas: [],
      loading:true
    };
  },
  methods: {
    getAllData() {
      
      axios
        .get("https://vuetareas-98bd3-default-rtdb.firebaseio.com/tareas.json")
        .then((resp) => {
          for (let id in resp.data) {
            this.tareas.push(resp.data[id]);
            console.log(resp.data[id]);
          }
        });
        
    },
  },
  created() {
    this.getAllData();
    },
  mounted() {
    bus.$on("datos", (datos) => {
      this.tareas = datos;
    });
  },
};
</script>

<style scoped>
.divLoading{
  display: flex;
  justify-content: center;
}
</style>