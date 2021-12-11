<template>
  <div>
    <div class="d-flex justify-content-center" v-if="loading">
      <loading></loading>
    </div>
    <ul class="list-group">
      <li
        class="d-flex justify-content-between list-group-item"
        v-for="(tarea, index) in tareas"
        :key="index"
      >
        {{ tarea.texto }}
        <span class="p2"
          ><i class="btn btn-sm btn-danger far fa-check-circle me-2"></i>
          <i class="btn btn-sm btn-success fa fa-times-circle"></i
        ></span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import Loading from "../components/Loading";
import { bus } from "../main";

export default {
  components: {
    loading: Loading,
  },
  data() {
    return {
      tareas: [],
      loading: true,
    };
  },
  methods: {
    async getAllData() {
      await axios
        .get("https://vuetareas-98bd3-default-rtdb.firebaseio.com/tareas.json")
        .then((resp) => {
          for (let id in resp.data) {
            this.tareas.push(resp.data[id]);
          }
          this.loading = false;
        });
    },
  },
  created() {
    this.getAllData();
  },
  mounted() {
    bus.$on("datos", (datos) => {
      this.tareas.push({
        texto: datos,
        terminada: false,
      });
    });
  },
};
</script>

<style scoped>
</style>