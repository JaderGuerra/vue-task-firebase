<template>
  <div class="row">
    <div class="col-6">
      <addtask></addtask>
    </div>
    <div class="col-6">
      <task></task>
    </div>
  </div>
</template>

<script>
import AddTask from "../components/AddTask.vue";
import Task from "../components/Task.vue";

export default {
  components: {
    addtask: AddTask,
    task: Task,
  },
};
</script>

<style>
</style>