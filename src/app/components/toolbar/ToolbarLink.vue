<template>
  <router-link :to="to">
    <md-button class="md-primary">
      <slot/>
    </md-button>
  </router-link>
</template>

<script>
export default {
  name: 'ToolbarLink',
  props: {
    to: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">

</style>
