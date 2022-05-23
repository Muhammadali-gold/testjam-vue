<template>
  <div class="write-body">
    <p>Savol Matni</p>
    <ui-tab-bar v-model="local_active_tab">
      <ui-tab content-indicator>
        HTML
      </ui-tab>
      <ui-tab content-indicator disabled>
        CSS
      </ui-tab>
    </ui-tab-bar>
    <div class="html-editor" v-if="local_active_tab === 0">
      <codemirror
          v-model="local_html_code"
          placeholder="Code gose here..."
          :style="{ height: '400px' }"
          :autofocus="true"
          :indent-with-tab="true"
          :tabSize="2"
          :extensions="html_extensions"
          @ready="log"
          @change="setHtml(local_html_code)"
          @focus="log"
          @blur="log"
      />
    </div>
    <div class="css-editor" v-if="local_active_tab === 1">
      <codemirror
          v-model="local_css_code"
          placeholder="Code gose here..."
          :style="{ height: '400px' }"
          :autofocus="true"
          :indent-with-tab="true"
          :tabSize="2"
          :extensions="css_extensions"
          @ready="log('ready', $event)"
          @change="setCss(local_css_code)"
          @focus="log('focus', $event)"
          @blur="log('blur', $event)"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'QuestionBody',
  props: {
    set_active_tab: {},
    css_code: {},
    css_extensions: {},
    html_code: {},
    html_extensions: {},
    log: {},
    setHtml:{},
    setCss:{}
  },
  data () {
     return {
       local_active_tab:0,
       local_css_code: "",
       local_html_code: "",
     }
  },
  watch: {
    local_active_tab(){
      this.set_active_tab(this.local_active_tab)
    }
  },
}
</script>
