<template>
  <div class="">
    <header class="flex jutify-center py-4 border-b mb-4">
      <nuxt-link
        v-for="link in links"
        :key="link.route"
        :to="link.route"
        class="text-2xl font-semibold underline px-4 flex-1 text-center"
      >
        {{ link.name }}
      </nuxt-link>
    </header>
    <nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: 'Service',
          route: '/service-example',
        },
        {
          name: 'Service with axios included',
          route: '/service-with-axios',
        },
        {
          name: 'Graphql hello world',
          route: '/graphql-example',
        },
        {
          name: 'Repository',
          route: '/repository-example',
        },
      ],
    }
  },
}
</script>
