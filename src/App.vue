<template>
  <div id="app">
    
    <PairAdd />
    <PairRem />
    <Table />
  </div>
</template>

<script>
import Table from './components/Table.vue'
import PairAdd from './components/PairAdd.vue'
import PairRem from './components/PairRem.vue'

export default {
  name: 'App',
  components: {
    Table,
    PairAdd,
    PairRem,
  },
  created() {
    this.$store.dispatch('fetch')
    setInterval(() => {
      this.$store.dispatch('fetch')
      }, 15000)
  },

}
</script>

<style>
@import '~animate.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
