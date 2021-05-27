<template>
  <div class="card p-1 text-center" @drop="onFileDropped"
       @dragover.prevent @dragenter.prevent
  >
    <md-progress-bar md-mode="query" class="pb"
                     :style="{visibility: busy ? 'visible': 'collapse'}"
    />

    <div class="md-layout card-body md-alignment-center">
      <input type="file" accept="image/*" ref="fileInput" @change="onFileDropped">
      <div class="md-layout-item md-medium-size-55 md-size-45 m-2 pointer"
           @click="chooseFileClicked"
      >
        <div class="card text-white bg-success p-3">
          <h4 class="card-title">Select image</h4>
          <p class="card-text">from your computer</p>
        </div>
      </div>
    </div>
    <p class="card-text md-caption mb-1">Or drop file from your computer...</p>

    <md-snackbar :md-active.sync="showSnackbar" md-position="center"
                 @md-closed="clearErrorMessage">
      <span>{{ snakeBarErrorMessage }}</span>
    </md-snackbar>
    <md-dialog-alert :md-active.sync="hasError" md-title="Oops. Can not proceed your request"
                     :md-content="generalErrorMessage"
    />
  </div>
</template>

<script>

export default {
  name: 'DragAndDropCard',
  data() {
    return {
      busy: false,
      hasError: false,
      snakeBarErrorMessage: '',
      selectedFile: null,
      showSnackbar: false,
      uploadFieldName: 'image',
      generalErrorMessage: 'Sorry, but something went wrong.<strong>We have already equip a group of dwarfs to fix that!</strong>',
    };
  },
  methods: {
    onFileDropped($event) {
      $event.preventDefault();
      if (this.busy) {
        return;
      }

      const droppedFile = $event instanceof DragEvent
        ? $event.dataTransfer.files[0]
        : $event.target.files[0];

      if (droppedFile.type.startsWith('image/')) {
        this.sendFile(droppedFile);
      } else {
        this.snakeBarErrorMessage = 'Only image available for selection. Please, select an image.';
        this.showSnackbar = true;
      }
      this.resetInput();
    },
    chooseFileClicked($event) {
      $event.preventDefault();
      if (this.busy) {
        return;
      }

      this.$refs.fileInput.click();
    },
    clearErrorMessage() {
      this.snakeBarErrorMessage = '';
    },
    sendFile(file) {
      if (file.size <= 0) {
        this.snakeBarErrorMessage = 'You can not upload empty image. Please, select correct image.';
        this.showSnackbar = true;
        return;
      }
      this.busy = true;
      const formData = new FormData();
      formData.append(this.uploadFieldName, file, file.name);

      new Promise((resolve, reject) => setTimeout(reject, 5000))
        .then(() => console.log('UPLOADED'))
        // eslint-disable-next-line no-return-assign
        .catch(() => this.hasError = true)
        // eslint-disable-next-line no-return-assign
        .finally(() => this.busy = false);
    },
    resetInput() {
      this.$refs.fileInput.value = '';
    },
    reset() {
      this.busy = false;
      this.hasError = false;
      this.snakeBarErrorMessage = '';
      this.selectedFile = null;
      this.showSnackbar = false;
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
      background-color: var(--bs-teal) !important;
    }
  }
}

</style>
