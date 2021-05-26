<template>
  <md-button :href="href" class="md-icon-button md-dense bg-light-accent">
    <basic-icon :icon-name="iconName" :size="size"/>
  </md-button>
</template>

<script>
import BasicIcon from '@/app/components/shared/BasicIcon.vue';

export default {
  name: 'FooterExternalLink',
  components: { BasicIcon },
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
      type: Number,
      required: false,
    },
  },
};
</script>
