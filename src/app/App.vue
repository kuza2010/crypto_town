<template>
  <div id="app">
    <toolbar/>
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>
<script>
import Toolbar from '@/app/components/toolbar/Toolbar.vue';

export default {
  components: { Toolbar },
};
</script>
