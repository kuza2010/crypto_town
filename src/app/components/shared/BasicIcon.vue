<template>
  <svg class="default-icon" viewBox="0 0 24 24" :style="iconStyle">
    <path :d="icon"/>
  </svg>
</template>

<script>
import customIcons from '@/app/assets/custom-icons.json';

export default {
  name: 'BasicIcon',
  props: {
    iconName: {
      type: String,
      required: false,
    },
    size: {
      type: Number,
      required: false,
      default: 24,
    },
  },
  data() {
    return {
      iconStyle: {
        height: `${this.size}px`,
        width: `${this.size}px`,
      },
    };
  },
  computed: {
    icon() {
      return customIcons[this.iconName];
    },
  },
};
</script>

<style scoped>
.default-icon {
  fill: var(--bs-gray-dark);
}
</style>
