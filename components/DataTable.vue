<template>
  <div class="mt-10">
    <div class="flex items-center">
      <h2 class="text-2xl font-bold m-4">{{ title }}</h2>
      <form class="ml-auto" @submit.prevent="add">
        <input
          type="text"
          v-model.trim="name"
          class="px-4 py-2 border rounded-lg"
          placeholder="Nuevo item"
        />
        <button type="submit" class="button">agregar</button>
      </form>
    </div>
    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="th">Nombre</th>
            <th class="th">Acciones</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="item in dataList" :key="item.id">
            <td class="px-6 py-4 text-sm font-medium text-gray-900">
              {{ item.name }}
            </td>
            <td class="px-6 py-4">
              <button type="button" class="button">✏️</button>
              <button
                type="button"
                class="button"
                @click="$emit('delete', item.id)"
              >
                🗑️
              </button>
            </td>
          </tr>
          <tr v-if="!dataList.length">
            <td colspan="100%" class="px-6 py-4">
              La lista se encuentra vacía
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataList: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      name: '',
    }
  },
  methods: {
    add() {
      if (this.name) {
        this.$emit('add-item', { name: this.name })
        this.name = ''
      }
    },
  },
}
</script>

<style scoped>
.th {
  @apply px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider;
}
.button {
  @apply border bg-gray-100 rounded-lg p-2;
}
.button:active {
  @apply bg-gray-200;
}
</style>