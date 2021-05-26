<template>
  <div class="card bg-light mb-3 drag-drop">
    <div class="card-body text-center">
      <h4 class="card-title">Light card title</h4>
      <p class="card-text md-caption">
        Or drop file from your computer...
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DragAndDropCard',
};
</script>

<style scoped lang="scss">

.drag-drop {

  .card {
    width: 100%;
  }

}

</style>
