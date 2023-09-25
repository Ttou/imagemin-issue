<template>
  <div id="app">
    <h2>Vite App</h2>
    <img class="logo" src="@/assets/images/logo.svg" alt="" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style>
#app {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

.logo {
  width: 200px;
}
</style>
