<template>
  <div class="card p-1 text-center" @drop="onFileDropped"
       @dragover.prevent @dragenter.prevent
  >
    <div class="md-layout card-body md-alignment-center">
      <input type="file" accept="image/*" ref="fileInput" @change="onFileSelected">
      <div class="md-layout-item md-medium-size-55 md-size-45 m-2 pointer"
           @click="chooseFileClicked"
      >
        <div class="card text-white bg-warning p-3">
          <h4 class="card-title">Select image</h4>
          <p class="card-text">
            from your computer
          </p>
        </div>
      </div>
    </div>
    <p class="card-text md-caption mb-1">Or drop file from your computer...</p>

    <md-snackbar :md-active.sync="showSnackbar" md-position="center"
                 @md-closed="clearErrorMessage">
      <span>{{ errorMessage }}</span>
    </md-snackbar>
  </div>
</template>

<script>
export default {
  name: 'DragAndDropCard',
  data() {
    return {
      selectedFile: null,
      showSnackbar: false,
      errorMessage: '',
    };
  },
  methods: {
    onFileDropped($event) {
      $event.preventDefault();
      const droppedFile = $event.dataTransfer.files[0];

      if (droppedFile.type.startsWith('image/')) {
        console.log(droppedFile);
      } else {
        this.errorMessage = 'Only image available for selection. Please, select an image.';
        this.showSnackbar = true;
      }
    },
    chooseFileClicked($event) {
      console.log($event);
      this.$refs.fileInput.click();
    },
    onFileSelected($event) {
      console.log($event);
      // eslint-disable-next-line prefer-destructuring
      this.selectedFile = $event.target.files[0];
      console.log(`selected file: ${this.selectedFile}`);
    },
    clearErrorMessage() {
      this.errorMessage = '';
    },
  },
};
</script>

<style scoped lang="scss">

:first-child {

  input {
    visibility: collapse;
    height: 0;
    width: 0;
  }

  .card {
    width: 100%;
  }

  .pointer {
    cursor: pointer;

    &:hover > * {
      background-color: var(--bs-yellow-light) !important;
    }
  }
}

</style>
