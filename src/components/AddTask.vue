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
        v-model.trim="tareas.texto"
      />
    </div>

    <button @click.prevent="senData" type="submit" class="btn btn-primary">
      Agregar
    </button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tareas: [{ texto: "", terminada: false }],
    };
  },
  methods: {
    senData() {
      if (this.tareas.texto != "") {
        this.tareas.push({
          texto: this.tareas.texto,
          terminada: false,
        });

        axios.post(
          "https://vuetareas-98bd3-default-rtdb.firebaseio.com/tareas.json",
          {
            texto: this.tareas.texto,
            terminada: false,
          }
        );
        this.tareas.texto = "";
      }
    },
  },
};
</script>

<style>
</style>