<template>
  <md-button @click.native="onClick"
             class="md-icon-button md-dense">
    <md-icon v-if="isSrc" :md-src="icon"/>
    <md-icon v-else>{{icon}}</md-icon>
  </md-button>
</template>

<script>
export default {
  name: 'FooterExternalLink',
  props: {
    icon: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
  },
  methods: {
    onClick() {
      window.open(this.href);
    },
  },
  computed: {
    isSrc() {
      console.log(this.icon);
      return this.icon.includes('/');
    },
  },
};
</script>

<style scoped>

</style>
