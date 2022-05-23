<template>
  <div class="right-section">
    <p class="category-preview">{{test_subject_label}}</p>
    <p class="category-preview">{{test_class_grade_label}}</p>
    <p class="category-preview">{{test_theme_label}}</p>
    <p class="category-preview">{{test_group_label}}</p>
    <ui-divider></ui-divider>
    <div v-html="html_code" class="preview">
    </div>
    <ui-divider></ui-divider>
  </div>
</template>
<script>
export default {
  name: 'RightSection',
  props: {},
  mounted () {
    console.log("test_class_grade_label",this.test_class_grade_label)
  },
  computed: {
    html_code(){
      return this.$store.state.html_code
    },
    test_class_grade_label(){
      return this.$store.state.test_class_grade_label
    },
    test_group_label(){
      return this.$store.state.test_group_label
    },
    test_subject_label(){
      return this.$store.state.test_subject_label
    },
    test_theme_label(){
      return this.$store.state.test_theme_label
    },
  }
}
</script>
<style scoped>

.right-section {
  width: 50%;
}

.preview {
  min-height: 2rem;
  padding: 1rem;
}

.category-preview {
  padding: 1rem;
}


</style>