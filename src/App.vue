<template>
  <div id="app">
    <transition name="router-anim" enter-active-class="animated pulse"> <!--  leave-active-class="animated pulse" -->
      <router-view />
    </transition>
    <foota />
  </div>
</template>

<script>

export default {
    name: "home",
    components: {

    }
};
</script>

<style scoped>
  @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: cadetblue;
}
</style>
