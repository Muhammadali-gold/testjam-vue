<template>
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
</template>
<script>
export default {
  name: 'RightSection',
  props: {
    html_code: {},
    showClassGrade: {},
    showGroup: {},
    showSubject: {},
    showTheme: {}
  }
}
</script>
<style scoped>

.preview {
  min-height: 2rem;
  padding: 1rem;
}

.category-preview {
  padding: 1rem;
}


</style>