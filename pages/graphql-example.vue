<template>
  <div class="max-w-md mx-auto">
    <DataTable title="Frutas" :dataList="fruits" />
  </div>
</template>

<script>
import gql from 'graphql-tag'

const FRUITS = gql`
  query {
    fruits {
      id
      name
    }
  }
`

export default {
  apollo: {
    fruits: {
      query: FRUITS,
    },
  },
}
</script>
