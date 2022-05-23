<template>
  <div class="hello">
    <Navbar />
    <div class="container">
      <LeftMenu :select-menu="selectMenu" :menus="menus"/>
      <section class="content">
        <AddTest v-if="selectedMenu.id === 1" />
        <StartTest v-if="selectedMenu.id === 2" />
        <TestTable v-if="selectedMenu.id === 3" />
      </section>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import LeftMenu from "@/components/LeftMenu";
import AddTest from "@/components/AddTest";
import StartTest from "@/components/StartTest";
import TestTable from "@/components/TestTable";

export default {
  name: 'Test-jam',
  components: {TestTable,StartTest,AddTest, LeftMenu, Navbar},
  props: {
    msg: String
  },
  data () {
    return {
      selectedMenu: {},
      menus: [
          {
            id:1,
            name: "Add test",
            selected:false,
          },
          {
            id:2,
            name: "Start test",
            selected:false,
          },
          {
            id:3,
            name: "Test table",
            selected:false,
          }
        ]
    }
  },
  methods: {
    selectMenu(menu){
      this.selectedMenu = menu
      this.menus = this.menus.map(item => {
        item.selected = item.id === menu.id
        return item
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    display: flex;
    margin: 3%;
  }

  .content {
    display: flex;
    margin-left: 5%;
    width: 100%;
  }
</style>
