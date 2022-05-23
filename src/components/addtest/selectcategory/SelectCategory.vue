<template>
  <div class="select-category">
    <div class="class_grade">
      <ui-select v-model="test_class_grade" :options="class_grade_options">Sinf</ui-select>
    </div>
    <div class="subject">
      <ui-select v-model="test_subject" :options="subject_options">Fan</ui-select>
    </div>
    <div class="theme">
      <ui-select v-model="test_theme" :options="theme_options">Mavzu</ui-select>
    </div>
    <div class="group">
      <ui-select v-model="test_group" :options="group_options">Guruh</ui-select>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SelectCategory',
  props: {
    class_grade_options: {},
    group_options: {},
    subject_options: {},
    set_test_class_grade: {},
    set_test_group: {},
    set_test_subject: {},
    set_test_theme: {},
    theme_options: {}
  }
}
</script>
<style scoped>

.class_grade, .subject, .theme, .group {
  margin-top: 1rem;
}


</style>