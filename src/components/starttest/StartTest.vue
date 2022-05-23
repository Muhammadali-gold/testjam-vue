<template>
  <div class="add-test">
    <div class="left-section">
      Start-Test Left Section
    </div>
    <div class="right-section">
      Start-Test Right Section
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