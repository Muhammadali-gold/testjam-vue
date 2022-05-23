<template>
  <div class="left-menu">
    <div class="label">Menu</div>
    <ui-divider></ui-divider>
    <div class="menus" v-for="menu in menus" v-bind:key="menu.id">
      <MenuItem :menu="menu" :select-menu="selectMenu"/>
    </div>
  </div>
</template>
<script>
import MenuItem from "@/components/menu/menuitem/MenuItem";

export default {
  name: 'LeftMenu',
  components: {MenuItem},
  props: {
    menus: {},
    selectMenu: {}
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style scoped>
  .left-menu {
    margin-left: 7%;
    width: 20%;
  }
  .label {
    padding: 5px;
  }
</style>