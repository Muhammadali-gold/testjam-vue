<template>
  <div class="write-body">
    <p>Savol Matni</p>
    <p>
<!--      <ui-switch-->
<!--          v-model="editor_mode_bool"-->
<!--          input-id="basic-switch"-->
<!--        >-->
<!--      </ui-switch>-->
<!--      <span class="editor-label">{{editor_mode}}</span>-->
    </p>
    <div class="editor-developer-mode" v-if="editor_mode === 'DEVELOPER'">
      <ui-tab-bar v-model="active_tab">
        <ui-tab content-indicator>
          HTML
        </ui-tab>
        <ui-tab content-indicator disabled>
          CSS
        </ui-tab>
      </ui-tab-bar>
      <div class="html-editor" v-if="active_tab === 0">
        <codemirror
            v-model="html_code"
            placeholder="Code gose here..."
            :style="{ height: '400px' }"
            :indent-with-tab="true"
            :tabSize="2"
            :extensions="html_extensions"
        />
      </div>
      <div class="css-editor" v-if="active_tab === 1">
        <codemirror
            v-model="css_code"
            placeholder="Code gose here..."
            :style="{ height: '400px' }"
            :indent-with-tab="true"
            :tabSize="2"
            :extensions="css_extensions"
        />
      </div>
    </div>
    <div class="editor-teacher-mode" v-else>
      <ui-editor v-model="editor_content" class="editor-teacher"></ui-editor>
    </div>

  </div>
</template>
<script>
import { Codemirror } from 'vue-codemirror'

import {html} from '@codemirror/lang-html'
import {css} from '@codemirror/lang-css'

const html_extensions = [html()]
const css_extensions = [css()]

export default {
  name: 'QuestionBody',
  components: {Codemirror},
  props: {},
  data () {
     return {
       active_tab:0,
       css_code: "",
       html_code: "",
       editor_mode:"TEACHER",
       editor_content:"",
       editor_mode_bool:true,
       html_extensions,
       css_extensions
     }
  },
  methods: {
    log(value){
      console.log(value)
    }
  },
  watch: {
    editor_mode_bool(value){
      if (value){
        this.editor_mode = 'TEACHER'
        this.html_code = ''
      } else {
        this.editor_mode = 'DEVELOPER'
      }
    },
    html_code(value){
      this.$store.state.html_code = value
    },
    css_code(value){
      this.$store.state.css_code = value
    },
  },
}
</script>

<style scoped>
.editor-label {
  margin-left: 10px;
}

.editor-teacher {
}
</style>