<template>
  <div v-if="type" class="card p-1 text-center"
       @drop="onFileDropped" @dragover.prevent @dragenter.prevent
  >
    <md-progress-bar md-mode="query" class="pb"
                     :style="{visibility: busy ? 'visible': 'collapse'}"
    />

    <div class="md-layout card-body md-alignment-center">
      <input type="file" accept="image/x-portable-graymap" ref="fileInput" @change="onFileDropped">
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
    <md-dialog-alert :md-active.sync="hasError" md-title="😿 Oops. Can not proceed your request"
                     :md-content="generalErrorMessage"
    />
  </div>

  <div v-else class="card p-1 text-center"
       @drop="onFileDropped" @dragover.prevent @dragenter.prevent
  >
    <h3 class="pt-2">Result:</h3>
    <div class="md-layout card-body">
      <md-list>
        <md-list-item>
          <md-icon>attach_file</md-icon>
          <span class="fw-bold">File name:</span>
          <span class="md-list-item-text px-1">{{ result['fileName'] }}</span>
        </md-list-item>
        <md-list-item>
          <md-tooltip md-direction="left">
            Stego probability: {{ stegoProbe }} Cover probability: {{ coverProbe }}
          </md-tooltip>
          <md-icon>help_outline</md-icon>
          <span class="fw-bold">Result:</span>
          <span class="md-list-item-text px-1">{{ result['fileStatus'] }}</span>
        </md-list-item>
      </md-list>
    </div>
    <icon-in-button class="back" @onClick="reset">chevron_left</icon-in-button>
  </div>

</template>

<script>

import checkFile from '@/app/service/fileCheckService';
import IconInButton from '@/app/components/icon/IconInButton.vue';

export default {
  name: 'DragAndDropCard',
  components: { IconInButton },
  data() {
    return {
      busy: false,
      hasError: false,
      snakeBarErrorMessage: '',
      selectedFile: null,
      showSnackbar: false,
      uploadFieldName: 'image',
      generalErrorMessage: 'Sorry, but something went wrong.<strong>We have already equip a group of dwarfs to fix that!</strong>',
      type: 1,
      result: {},
    };
  },
  computed: {
    stegoProbe() {
      if (this.result.extras) {
        return this.result.extras.stego;
      }
      return '...';
    },
    coverProbe() {
      if (this.result.extras) {
        return this.result.extras.cover;
      }
      return '...';
    },
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

      if (droppedFile.name.endsWith('.pgm')) {
        this.sendFile(droppedFile);
      } else {
        this.snakeBarErrorMessage = 'Only PGM grayscale file format available for selection. Please, select an .pgm image.';
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
      checkFile(this.uploadFieldName, file, file.name)
        .then((x) => {
          this.busy = false;
          this.result = x;
          // eslint-disable-next-line no-return-assign
          setTimeout(() => this.type = 0, 0);
        })
        .catch((err) => {
          console.error(err);
          this.busy = false;
          this.hasError = true;
        });
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
      this.type = 1;
      this.result = {};
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
