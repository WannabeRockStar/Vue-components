<template>
  <div id="app" data-aos="fade" data-aos-delay="600">
    <header>
      <router-link to="/">Home</router-link>
      <router-link to="/table">Table</router-link>
      <router-link to="/swiper">Swiper</router-link>
      <router-link to="/filters">Filters</router-link>
      <router-link to="/multi">Multi</router-link>
      <router-link to="/Images">Gallery</router-link>
    </header>
    <transition name="fade" mode="out-in">
        <router-view />
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  
}
</script>

<style scoped>

  header {
    height: 64px;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #222;
  }

  header a {
    margin-right: 1rem;
    text-decoration: none;
    color: #33b972;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.5s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }

</style>
