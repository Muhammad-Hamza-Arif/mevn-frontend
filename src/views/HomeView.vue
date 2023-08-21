<template>
  <div class="home">
    <CreateTask/>
  </div>
</template>

<script>
// @ is an alias to /src
import CreateTask from '@/components/CreateTask.vue';
export default {
  name: 'HomeView',
  components: {
    CreateTask
  }
}
</script>
