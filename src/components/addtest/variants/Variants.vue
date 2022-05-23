<template>
  <div class="left-section">
    <p>Variantlar</p>
    <div class="vars">
      <div class="var">
        <div class="editor">
          <ui-editor v-model="variant_v1" class="editor-teacher"></ui-editor>
        </div>
      </div>
      <div class="var">
        <div class="editor">
          <ui-editor v-model="variant_v2" class="editor-teacher"></ui-editor>
        </div>
      </div>
      <div class="var">
        <div class="editor">
          <ui-editor v-model="variant_v3" class="editor-teacher"></ui-editor>
        </div>
      </div>
      <div class="var">
        <div class="editor">
          <ui-editor v-model="variant_v4" class="editor-teacher"></ui-editor>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Var-iants',
  components: {},
  props: {
  },
  methods : {},
  data () {
    return {
      variant_v1:"",
      variant_v2:"",
      variant_v3:"",
      variant_v4:"",
    }
  }

}
</script>

<style scoped>
.var {
  margin-top: 1rem;
}
</style>