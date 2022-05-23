<template>
  <div class="left-section">
    <p>Yechim</p>
    <div class="editor">
      <ui-editor
          :toolbar="toolbar"
          :toolbar-handlers="toolbarHandlers"
          v-model="decodeContent"
          class="editor-teacher"
      ></ui-editor>
      <!-- Custom editor content preview -->
      <ui-dialog v-model="preview.show" class="preview-dialog" fullscreen>
        <ui-dialog-title>
          Preview
<!--          <ui-icon-button-->
<!--              class="close"-->
<!--              icon="close"-->
<!--              @click="preview.show = false"-->
<!--          ></ui-icon-button>-->
        </ui-dialog-title>
        <ui-dialog-content>
          <h1>Content</h1>
          <div class="toolbar">
            <div class="formula-1">
            </div>
          </div>
          <codemirror
              v-model="html_code"
              placeholder="Code gose here..."
              :style="{ height: '200px' }"
              :indent-with-tab="true"
              :tabSize="2"
              :extensions="html_extensions"
          />
<!--          <textarea v-model="html_code">-->

<!--          </textarea>-->
<!--          <latex class="result" :content="html_code"></latex>-->
          <div class="preview" v-html="html_code"></div>
          <ui-button @click="add_mathml">Saqlash</ui-button>
        </ui-dialog-content>
      </ui-dialog>
    </div>
  </div>
</template>
<script>

const toolbar = [
  ['bold', 'italic', 'underline', { color: [] }, { background: [] }],
  [
    { list: 'ordered' },
    { list: 'bullet' },
    'blockquote',
  ],
  ['link', 'image',/* 'video'*/],
  ['clean'/*, 'undo', 'redo'*/],
  ['preview'] // custom
];
import { Codemirror } from 'vue-codemirror'
import {html} from '@codemirror/lang-html'
// import { VueMathjax } from 'vue-mathjax'
// import VueLaTeX2JS from 'latex2vue';
const html_extensions = [html()]

export default {
  name: 'So-lution',
  components: {Codemirror},
  props: {
  },
  data () {
    return {
      toolbar,
      html_extensions,
      tex:"",
      html_code:"",
      decodeContent:"",
      toolbarHandlers: {
        preview: (quill, value) => {
          console.log(quill, value)
          quill.insert('html', "<math>\n" +
              "  <mfrac>\n" +
              "    <mrow>\n" +
              "      <mi>a</mi>\n" +
              "      <mo>+</mo>\n" +
              "      <mn>1</mn>\n" +
              "    </mrow>\n" +
              "    <mi>b</mi>\n" +
              "  </mfrac>\n" +
              "</math>")
          this.preview.show = true;
          // this.preview.content = this.decodeContent;
        }
      },
      preview: {
        show: false,
        type: 0,
        content: ''
      }
    }
  },
  methods : {
    add_mathml(){
      this.decodeContent+=this.html_code
      this.html_code=""
    }
  }

}
</script>

<style scoped>
.preview-dialog{

}
.editor {
  width: 100%;
}

textarea {
  width: 100%;
  min-height: 10vh;
}
</style>