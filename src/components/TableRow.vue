<template>
  <tr>
    <td>
      <slot>Pair Name</slot>
    </td>
    <td>
      {{ value.b[0] }}
    </td>
    <td>
      {{ value.a[0] }}
    </td>
  </tr>
</template>

<script>


export default {
  name: 'TableRow',
  props: {
    value: {},
  },
}
</script>

<style scoped>

</style>
