<template>
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label mb-4"
        >Agregar Tarea</label
      >
      <input
        type="text"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model.trim="nuevaTarea"
      />
    </div>

    <button @click.prevent="senData" type="submit" class="btn btn-primary">
      Agregar
    </button>
  </form>
</template>

<script>
import axios from "axios";
import {bus} from "../main.js";

export default {
  data() {
    return {
      nuevaTarea:'',
      tareas: [],
    };
  },
  methods: {
    senData() {
      if (this.nuevaTarea !== "") {
        this.tareas.push({
          texto: this.nuevaTarea,
          terminada: false,
        });
        
         axios.post(
          "https://vuetareas-98bd3-default-rtdb.firebaseio.com/tareas.json",
          {
            texto: this.nuevaTarea,
            terminada: false,
          }
        ); 
      }
        this.nuevaTarea = "";
        bus.$emit('datos',  this.tareas)
    },
  },
};
</script>

<style>
</style>