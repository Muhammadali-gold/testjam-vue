<template>
  <div class="select-category">
    <div class="subject">
      <ui-select v-model="test_subject" :options="subject_options">Fan</ui-select>
      <div class="add-button">
        <ui-fab class="add-category-btn" icon="control_point" mini></ui-fab>
      </div>
    </div>
    <div class="class_grade">
      <ui-select v-model="test_class_grade" :options="class_grade_options">Sinf</ui-select>
      <div class="add-button">
        <ui-fab class="add-category-btn" icon="control_point" mini></ui-fab>
      </div>
    </div>
    <div class="theme">
      <ui-select v-model="test_theme" :options="theme_options">Mavzu</ui-select>
      <div class="add-button">
        <ui-fab class="add-category-btn" icon="control_point" mini></ui-fab>
      </div>
    </div>
    <div class="group">
      <ui-select v-model="test_group" :options="group_options">Ball</ui-select>
      <ui-fab class="add-category-btn" icon="control_point" mini></ui-fab>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SelectCategory',
  props: {
  },
  data () {
    return {
      test_class_grade:0,
      test_subject:0,
      test_theme:0,
      test_group:0,
      class_grade_options:[{value:1,label:"5-sinf"},{value:2,label:"6-sinf"}],
      subject_options:[{value:1,label:"Matematika"},{value:2,label:"Fizika"}],
      theme_options:[{value:1,label:"Natural sonlar"},{value:2,label:"Tortishish qonuni"}],
      group_options:[{value:1,label:"1 ball"},{value:2,label:"2 ball"}],
    }
  },
  watch: {
    test_class_grade(){
      this.$store.state.test_class_grade = this.test_class_grade;
      let searched = this.class_grade_options.find(v => v.value === this.test_class_grade)
      if (searched){
        this.$store.state.test_class_grade_label = searched.label;
      }
      console.log("41 qator selected category " + this.test_class_grade)
      console.log("42 qator selected category " + this.$store.state.test_class_grade_label)
    },
    test_subject(){
      this.$store.state.test_subject = this.test_subject;
      let searched = this.subject_options.find(v => v.value === this.test_subject)
      if (searched) {
        this.$store.state.test_subject_label = searched.label;
      }
    },
    test_theme(){
      this.$store.state.test_theme = this.test_theme;
      let searched = this.theme_options.find(v => v.value === this.test_theme)
      if (searched) {
        this.$store.state.test_theme_label = searched.label;
      }
    },
    test_group(){
      this.$store.state.test_group = this.test_group;
      let searched = this.group_options.find(v => v.value === this.test_group)
      if (searched) {
        this.$store.state.test_group_label = searched.label;
      }
    },
  },
  methods: {}
}
</script>
<style scoped>

.select-category {
  display: flex;
}

.class_grade, .subject, .theme, .group {
  margin-top: 1rem;
  margin-right: 1rem;
  display: flex;
}

.add-category-btn {
  margin-left: 1rem;
}

.add-button {
  text-align: center;
  padding-top: 7px;
}

</style>