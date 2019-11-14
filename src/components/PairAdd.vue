<template>
  <div class="pair-add">
    <b-input 
      id="pair"
      :class="error"
      v-model="pair" 
      size="sm"
      placeholder="Введите пару"
      required></b-input>
      
    <b-button 
    size="sm" 
    variant="primary"
    :disabled="!pair"
    @click="add()">Добавить</b-button>
    <div 
    v-if="error"
    class="helper">
      <label for="pair">Такой пары не найдено</label>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
export default {
  name: 'PairAdd',
  data() {
    return {
      pair: '',
      error: null,
    }
  },
  methods: {
    add() {
      this.error = null
      axios.get('https://api.kraken.com/0/public/Ticker', {
            params: {
            pair: this.pair
            }})
        .then(response => {
          if (response.data.error.length == 0) {
            this.$store.commit('add', this.pair)
            this.$store.dispatch('fetch')
            this.pair = ''
          }
          else {
            this.error = 'danger bounce'
          }
        })
        .catch(function (error) {
            console.log(error);
        });
    }
  },
}
</script>

<style scoped>
input[type='text'] {
  display: inline-block;
  width:10%;
}
button {
  margin-left: 5px;
}
.pair-add {
  display: block;
  width:100%;
  padding-bottom: 5px;
}
.danger {
  border: 1px solid red;
  transition: 0.2sec; 
}
.helper {
  padding-top:5px;
  color: rgba(0, 0, 0, 0.35);
  font-size: 0.8em;
}
</style>
