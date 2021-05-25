<template>
  <div id="app">
    <toolbar/>
    <div class="main-container">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<style lang="scss">

</style>
<script>
import Toolbar from '@/app/components/toolbar/Toolbar.vue';
import Footer from '@/app/components/footer/Footer.vue';

export default {
  components: {
    Toolbar,
    Footer,
  },
};
</script>

<style>

</style>
