<template>
  <div class="params">
    <div>
      <p>Parametrlar</p>
      <ui-table
          fullwidth
          :data="test_params"
          :thead="test_params_thead"
          :tbody="test_params_tbody"
      >
        <template #range="{ data }">
          <div class="param-row"><input  v-model="data.min_value"> ≲ <input type="text" v-model="data.n_sign"> ≲ <input v-model="data.max_value"></div>
        </template>
        <template #setof="{ data }">
          <div> {{data.n_sign}} ∈ {{data.n_set}}</div>
        </template>

        <template #actions="{ data }">
          <ui-icon @click="deleteParamRow(data)" class="param_icon">delete</ui-icon>
          <ui-icon @click="addParamRow()" class="param_icon">add</ui-icon>
        </template>
      </ui-table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ParaMeters',
  props: {
  },
  data() {
    return {
      test_params:[{id:1,n_sign:'a',min_value:0,max_value:10,n_set:"Z"}],
      test_params_thead:["ID","Range","Set of","Actions"],
      test_params_tbody:[{field:"id"},{slot:"range"},{slot:"setof"},{slot:"actions"}],
    }
  },
  methods: {
    deleteParamRow(row){
      this.test_params = this.test_params.filter(item => item.id !== row.id)

    },
    addParamRow(){
      this.test_params.push({id:(this.test_params.length+1), n_set: 'Z'})
    },
    log(value){
      console.log(value)
    }
  }
}
</script>
<style scoped>

.param_icon {
  cursor: pointer;
}

.param-row input {
  width: 10%;
}
</style>