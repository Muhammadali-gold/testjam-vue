<template>
  <div class="add-test">
    <LeftSection/>
<!--    <RightSection/>-->
  </div>
</template>
<script>

// import RightSection from "@/components/addtest/rightsection/RightSection";
import LeftSection from "@/components/addtest/leftsection/LeftSection";

export default {
  name: 'AddTest',
  components: {LeftSection, /*RightSection*/},
  data () {
    return {
      html_code:"",
      css_code:"",
    }
  },
  watch: {},
  mounted () {
    this.$store.state.log = this.log
  },
  methods: {
    log(value){
      console.log(value)
    },
  },
  computed:{}
}
</script>
<style scoped>

.add-test {
  width: 100%;
  display: flex;
}


</style>