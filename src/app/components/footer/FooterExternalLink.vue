<template>
  <md-button :href="href" class="md-icon-button md-dense bg-light-accent">
    <svg :style="iconStyle" viewBox="0 0 24 24">
      <path :d="icon"/>
    </svg>
  </md-button>
</template>

<script>
import customIcons from '../../assets/custom-icons.json';

export default {
  name: 'FooterExternalLink',
  props: {
    href: {
      type: String,
      required: true,
    },
    iconName: {
      type: String,
      required: false,
    },
    size: {
      type: String,
      required: false,
      default: '24px',
    },
  },
  data() {
    return {
      iconStyle: {
        height: this.size,
        width: this.size,
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
