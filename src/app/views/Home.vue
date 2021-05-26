<template>
  <div class="home">
    <div class="md-layout md-alignment-center">
      <basic-icon icon-name="magnifier" class="main-icon" :size="36"/>
      <span class="md-headline title">CRYPTO TOWN</span>
    </div>

    <div class="md-layout md-alignment-center info">
      <div class="md-layout-item md-medium-size-45 md-size-40">
        <span class="md-body-1">
        Crypto town is a project with the one necessary point - security.
        Download file and Crypto town check if there is any embedded information inside your image.
      </span>
      </div>
    </div>

    <div class="md-layout md-alignment-center">
      <div class="md-layout-item md-medium-size-45 md-size-40">
        <drag-and-drop-card/>
      </div>
    </div>
  </div>
</template>

<script>

import BasicIcon from '@/app/components/shared/BasicIcon.vue';
import DragAndDropCard from '@/app/components/shared/DragAndDropCard.vue';

export default {
  name: 'Home',
  components: {
    DragAndDropCard,
    BasicIcon,
  },
};
</script>

<style scoped lang="scss">

.home {
  margin-top: 4rem;
  margin-bottom: 1rem;
  min-width: 959px;

  .title {
    font-weight: 500;
    letter-spacing: .1rem;
  }

  .info {
    margin: 1rem 0 3rem;
    text-align: center;
  }
}

.main-icon {
  fill: var(--bs-gray-light);
  margin-right: 1rem;
}

.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}

</style>
