<template>
  <div class="add-test">
    <div class="left-section">
      Test Table Left Section
    </div>
    <div class="right-section">
      Test Table Right Section
    </div>
  </div>
</template>
<script>
export default {
  name: 'AddTest'
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
</style>