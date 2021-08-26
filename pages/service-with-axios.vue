<template>
  <div class="max-w-md mx-auto">
    <div class="text-center mt-10">
      <button
        class="mt-2 border-2 border-gray-500 rounded-xl p-4"
        @click="fetch"
      >
        fetch
      </button>
    </div>

    <DataTable
      :dataList="fruits"
      title="Frutas"
      @add-item="addItem"
      @delete="deleteItem"
    />
  </div>
</template>

<script>
import FruitService2 from '@/services/fruits2'

export default {
  data() {
    return {
      fruits: [],
    }
  },

  methods: {
    async fetch() {
      this.fruits = await FruitService2.list()
    },

    async deleteItem(id) {
      await FruitService2.delete(id)
      this.fruits = await FruitService2.list()
    },

    async addItem(data) {
      await FruitService2.create(data)
      this.fruits = await FruitService2.list()
    },
  },
}
</script>
