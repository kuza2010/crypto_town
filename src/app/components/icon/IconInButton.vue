<template>
  <md-button class="md-icon-button" @click="onClick">
    <md-icon :style="{color: color}">
      <slot/>
    </md-icon>
  </md-button>
</template>

<script>
import '@/styles/minty.css';

export default {
  name: 'IconInButton',
  props: {
    color: {
      type: String,
      required: false,
    },
    isClickable: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  methods: {
    onClick() {
      this.$emit('onClick');
    },
  },
};
</script>

<style scoped lang="scss">
.md-toolbar.md-theme-default.md-primary .md-icon {
  color: var(--bs-gray-dark);

  &:hover {
    transition: all 0.1s ease-in;
    transform: scale(1.2);
  }

}
</style>
