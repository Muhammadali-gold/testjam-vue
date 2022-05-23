<template>
  <ui-menuitem :class="'menu ' + (menu.selected ? 'selected' : '')" @click="selectMenu(menu)">{{ menu.name }}</ui-menuitem>
</template>
<script>
export default {
  name: 'MenuItem',
  props: {
    menu: {},
    selectMenu: {}
  },
  mounted () {
    console.log(this.menu)
  },
  methods: {
    // selectMenu(){
    //   for (let m of this.menus){
    //     m.selected = false;
    //   }
    //   this.menu.selected = true;
    // }
  }
}
</script>

<style scoped>
  .menu {
    padding: 5px;
    cursor: pointer;
    opacity: 0.3;
  }
  .menu:hover {
    opacity: 1;
  }

  .selected {
    opacity: 1;
  }
</style>