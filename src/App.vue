<template>
  <div id="app" data-aos="fade" data-aos-delay="600">
    <header>
      <router-link to="/">Home</router-link>
      <router-link to="/table">Table</router-link>
      <router-link to="/swiper">Swiper</router-link>
      <router-link to="/filters">Filters</router-link>
    </header>
    <router-view data-aos="fade" data-aos-delay="600" data-aos-duration="400" />
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
  }

  header a {
    margin-right: 1rem;
    text-decoration: none;
  }

</style>
