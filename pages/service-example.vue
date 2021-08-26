<template>
  <div class="max-w-md mx-auto">
    <DataTable
      title="Frutas"
      :dataList="fruits"
      @add-item="addItem"
      @delete="deleteItem"
    />
  </div>
</template>

<script>
import FruitService from '@/services/fruits'

export default {
  async asyncData({ $axios }) {
    return {
      fruits: await FruitService.list($axios),
    }
  },

  methods: {
    async addItem(data) {
      await FruitService.create(this.$axios, data)
      this.fruits = await FruitService.list(this.$axios)
    },

    async deleteItem(id) {
      await FruitService.delete(this.$axios, id)
      this.fruits = await FruitService.list(this.$axios)
    },
  },
}
</script>
