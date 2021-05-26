<template>
  <md-toolbar class="md-primary md-dense toolbar">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <router-link to="/" class="md-layout md-alignment-center-left">
          <icon-in-button>security</icon-in-button>
          <span class="md-title fw-bold">CRYPTO-TOWN</span>
        </router-link>
      </div>
      <div class="md-toolbar-section-end">
        <toolbar-link to="/">Home</toolbar-link>
        <toolbar-link to="/">About</toolbar-link>
        <toolbar-link to="/">Author</toolbar-link>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
import IconInButton from '@/app/components/icon/IconInButton.vue';
import ToolbarLink from '@/app/components/toolbar/ToolbarLink.vue';

export default {
  name: 'Toolbar',
  components: {
    ToolbarLink,
    IconInButton,
  },
};
</script>

<style scoped lang="scss">

.toolbar {
  min-width: 959px;
}

.md-toolbar.md-theme-default.md-primary .md-title {
  color: var(--bs-gray-dark);
}

</style>
