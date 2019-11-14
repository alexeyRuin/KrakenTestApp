<template>
  <div class="pair-rem">
    <b-button
    class="button-rem"
    v-for="(value, key) in pairs"
    :key="key"
    size="sm"
    @click="rem(value)">
    {{value}}
    </b-button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PairRem',
  computed: {
    ...mapState([
      'pairs',
    ]),
  },
  data() {
    return {
      pair: '',
      error: null,
    }
  },
  methods: {
    rem(val) {
      console.log(val)
      this.$store.commit('rem', val)
      this.$store.dispatch('fetch')
    }
  },
}
</script>

<style scoped>
.pair-rem {
  display:inline-block;
    padding-bottom: 10px;
}
.button-rem {
  margin-right: 5px;
}
</style>
