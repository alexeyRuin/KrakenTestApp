<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <td
          v-for="(value, key) in head"
          :key="key">{{ value }}</td>
        </tr>
      </thead>
      <tbody v-if="result">
        <TableRow
        class="table-row"
        v-for="(value, key) in result"
        :key="key"
        :value="value">
        {{ key }}</TableRow>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="3" class="centered">
            Нет данных
          </td>
          </tr>
      </tbody>
    </table>
    <br>
  </div>
</template>

<script>

import { mapState } from 'vuex';
import TableRow from './TableRow.vue'


export default {
  name: 'Table',
  components: {
    TableRow
  },
  computed: {
    ...mapState([
      'result',
      'pairs',
    ]),
  },
  data() {
    return {
      head: ['Pair','Bid','Ask'],
    }
  }
}
</script>

<style>
thead {
  color: #fff;
  background:#343a40;
}
.table-row:hover {
  background-color: rgba(0, 0, 0, 0.02);
}
.centered {
  text-align:center;
  width: 100%;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
