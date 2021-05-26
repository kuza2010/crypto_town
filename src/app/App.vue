<template>
  <div id="app">
    <toolbar/>
    <div class="content">
      <router-view/>
    </div>
    <bottom-bar class="footer"/>
  </div>
</template>

<style lang="scss">

</style>
<script>
import Toolbar from '@/app/components/toolbar/Toolbar.vue';
import BottomBar from '@/app/components/footer/BottomBar.vue';

export default {
  components: {
    Toolbar,
    BottomBar,
  },
};
</script>
