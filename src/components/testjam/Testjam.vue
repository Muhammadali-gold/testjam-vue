<template>
  <div class="hello">
    <Navbar />
    <div class="container">
      <LeftMenu :select-menu="selectMenu" :menus="menus"/>
      <section class="content">
        <AddTest v-if="selectedMenu.id === 1" />
        <StartTest v-if="selectedMenu.id === 2" />
        <TestTable v-if="selectedMenu.id === 3" />
        <MathEditor v-if="selectedMenu.id === 4" />
      </section>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/navbar/Navbar";
import LeftMenu from "@/components/menu/LeftMenu";
import AddTest from "@/components/addtest/AddTest";
import StartTest from "@/components/starttest/StartTest";
import TestTable from "@/components/testtable/TestTable";
import MathEditor from "@/components/matheditor/MathEditor";

export default {
  name: 'Test-jam',
  components: {TestTable,StartTest,AddTest, LeftMenu, Navbar,MathEditor},
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
          },{
            id:4,
            name: "Editor",
            selected:false,
          },
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
