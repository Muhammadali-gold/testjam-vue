<template>
  <div class="add-test">
    <div class="left-section">
      <div class="header">Test kiritish</div>
      <SelectCategory :class_grade_options="class_grade_options" :group_options="group_options"
                    :subject_options="subject_options" :set_test_class_grade="set_test_class_grade" :set_test_group="set_test_group"
                    :set_test_subject="set_test_subject" :set_test_theme="set_test_theme" :theme_options="theme_options"/>
      <ui-divider></ui-divider>
      <QuestionBody :set-css="setCss" :set-html="setHtml" :css_extensions="css_extensions"
                    :html_code="html_code" :html_extensions="html_extensions" :log="log"/>
      <ui-divider></ui-divider>
      <ParaMeters :log="log" :test_params="test_params" :test_params_tbody="test_params_tbody"
                    :test_params_thead="test_params_thead"/>
    </div>
    <div class="right-section">
      <p class="category-preview">{{showClassGrade}}</p>
      <p>{{showSubject}}</p>
      <p>{{showTheme}}</p>
      <p>{{showGroup}}</p>
      <ui-divider></ui-divider>
      <div v-html="html_code" class="preview">
      </div>
      <ui-divider></ui-divider>
    </div>
  </div>
</template>
<script>
import {html} from '@codemirror/lang-html'
import {css} from '@codemirror/lang-css'
import ParaMeters from "@/components/ParaMeters";
import QuestionBody from "@/components/QuestionBody";
import SelectCategory from "@/components/SelectCategory";
// import { oneDark } from '@codemirror/theme-one-dark'
// import { oneLight } from '@codemirror/theme-one-light'
const html_extensions = [html()]
const css_extensions = [css()]


export default {
  name: 'AddTest',
  components: {SelectCategory, QuestionBody, ParaMeters},
  data () {
    return {
      test_class_grade:0,
      test_subject:0,
      test_theme:0,
      test_group:0,
      test_params:[{id:1,n_sign:'a',min_value:0,max_value:10,n_set:"Z"}],
      test_params_thead:["ID","Range","Set of","Actions"],
      test_params_tbody:[{field:"id"},{slot:"range"},{slot:"setof"},{slot:"actions"}],
      class_grade_options:[{value:1,label:"5-sinf"},{value:2,label:"6-sinf"}],
      subject_options:[{value:1,label:"Matematika"},{value:2,label:"Fizika"}],
      theme_options:[{value:1,label:"Natural sonlar"},{value:2,label:"Tortishish qonuni"}],
      group_options:[{value:1,label:"1-guruh"},{value:2,label:"2-guruh"}],
      html_code:"",
      css_code:"",
      html_extensions,
      css_extensions,
      previewWindow:""
    }
  },
  watch: {
    test_class_grade(value){
      console.log('class_grade',value)
    },
    active_tab(value){
      console.log('active_tab',value)
    },
    html_code(){
      this.previewWindow = ` <!doctype html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport"
                content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Document</title>
          <style>
            ${this.css_code}
          </style>
        </head>
        <body>
          ${this.html_code}
        </body>
        </html>`
    }
  },
  mounted () {
    // this.code = `console.log('Hello, world!')`
  },
  methods: {
    log(value){
      console.log(value)
    },
    setHtml(html){
      this.html_code = html
    },
    setCss(css){
      this.css_code = css
    },
    set_test_class_grade(value){
      this.test_class_grade=value
    },
    set_test_group(value){
      this.test_group=value
    },
    set_test_subject(value){
      this.test_subject=value
    },
    set_test_theme(value){
      this.test_theme=value
    },
  },
  computed:{
    showClassGrade(){
      let searched = this.class_grade_options.find(opt => opt.value === this.test_class_grade)
      if (searched){
        return searched.label
      }
      return "-"
    },
    showSubject(){
      let searched = this.subject_options.find(opt => opt.value === this.test_subject)
      if (searched){
        return searched.label
      }
      return "-"
    },
    showTheme(){
      let searched = this.theme_options.find(opt => opt.value === this.test_theme)
      if (searched){
        return searched.label
      }
      return "-"
    },
    showGroup(){
      let searched = this.group_options.find(opt => opt.value === this.test_group)
      if (searched){
        return searched.label
      }
      return "-"
    }
  }
}
</script>
<style scoped>

.left-section, .right-section {
  width: 50%
}

.add-test {
  width: 100%;
  display: flex;
}

.preview {
  min-height:2rem;
  padding:1rem;
}

.category-preview {
  padding:1rem;
}


</style>