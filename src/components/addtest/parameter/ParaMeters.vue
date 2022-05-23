<template>
  <div class="params">
    <div>
      <!--          <p>{{param.min_value}} &lt; {{param.sign}} &lt; {{param.max_value}} ; {{param.sign}} ∈ {{param.n_set}}</p>-->
      <ui-table
          fullwidth
          :data="test_params"
          :thead="test_params_thead"
          :tbody="test_params_tbody"
      >
        <template #range="{ data }">
          <div>{{data.min_value}} ≲ {{data.n_sign}} ≲ {{data.max_value}}</div>
        </template>
        <template #setof="{ data }">
          <div> {{data.sign}} ∈ {{data.n_set}}</div>
        </template>

        <template #actions="{ data }">
          <ui-icon @click="log(data)" class="param_icon">description</ui-icon>
          <ui-icon @click="log(data)" class="param_icon">edit</ui-icon>
          <ui-icon @click="log(data)" class="param_icon">delete</ui-icon>
          <ui-icon @click="log(data)" class="param_icon">add</ui-icon>
        </template>
      </ui-table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ParaMeters',
  props: {
    log: {},
    test_params: {},
    test_params_tbody: {},
    test_params_thead: {}
  }
}
</script>
<style scoped>

.param_icon {
  cursor: pointer;
}


</style>