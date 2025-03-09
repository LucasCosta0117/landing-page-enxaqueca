<template>
  <TopNavBar></TopNavBar>
  <HomePage></HomePage>
</template>

<script>
import HomePage from './pages/HomePage.vue'
import TopNavBar from './components/TopNavBar.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    TopNavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
}
</style>
