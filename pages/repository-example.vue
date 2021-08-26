<template>
  <div class="max-w-md mx-auto">
    <DataTable title="Frutas" :dataList="fruits" />
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    const fruits = await app.$api.fruits.list()
    return {
      fruits,
    }
  },
}
</script>
