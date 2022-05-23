<template>
  <div class="left-section">
    <div class="header">Test kiritish</div>
    <SelectCategory/>
    <ui-divider class="divider"></ui-divider>
    <QuestionBody/>
    <ui-divider class="divider"></ui-divider>
    <ParaMeters />
    <ui-divider class="divider"></ui-divider>
    <Variants />
    <ui-divider class="divider"></ui-divider>
    <Solution />
    <ui-divider class="divider"></ui-divider>
  </div>
</template>
<script>
import ParaMeters from "@/components/addtest/parameter/ParaMeters"
import QuestionBody from "@/components/addtest/questionbody/QuestionBody"
import SelectCategory from "@/components/addtest/selectcategory/SelectCategory"
import Solution from "@/components/addtest/solution/Solution"
import Variants from "@/components/addtest/variants/Variants"

export default {
  name: 'LeftSection',
  components: {ParaMeters, QuestionBody, SelectCategory,Variants,Solution},
  props: {
  },
  methods : {}
}
</script>

<style scoped>
.left-section {
  width:100%;
}
.divider {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>