<template>
  <div class="left-section">
    <div class="header">Test kiritish</div>
    <SelectCategory :class_grade_options="class_grade_options" :group_options="group_options"
                    :subject_options="subject_options" :set_test_class_grade="set_test_class_grade"
                    :set_test_group="set_test_group"
                    :set_test_subject="set_test_subject" :set_test_theme="set_test_theme"
                    :theme_options="theme_options"/>
    <ui-divider></ui-divider>
    <QuestionBody :set-css="setCss" :set-html="setHtml" :css_extensions="css_extensions"
                  :html_code="html_code" :html_extensions="html_extensions" :log="log"/>
    <ui-divider></ui-divider>
    <ParaMeters :log="log" :test_params="test_params" :test_params_tbody="test_params_tbody"
                :test_params_thead="test_params_thead"/>
  </div>
</template>
<script>
import ParaMeters from "@/components/addtest/parameter/ParaMeters"
import QuestionBody from "@/components/addtest/questionbody/QuestionBody"
import SelectCategory from "@/components/addtest/selectcategory/SelectCategory"

export default {
  name: 'LeftSection',
  components: {ParaMeters, QuestionBody, SelectCategory},
  props: {
    class_grade_options: {},
    css_extensions: {},
    group_options: {},
    html_code: {},
    html_extensions: {},
    log: {},
    setCss: {},
    setHtml: {},
    set_test_class_grade: {},
    set_test_group: {},
    set_test_subject: {},
    set_test_theme: {},
    subject_options: {},
    test_params: {},
    test_params_tbody: {},
    test_params_thead: {},
    theme_options: {}
  }
}
</script>
