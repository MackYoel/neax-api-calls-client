export default class GeneralRepository {
  constructor(baseUrl, $axios) {
    this.baseUrl = baseUrl
    this.$axios = $axios
  }

  list() {
    return this.$axios.$get(this.baseUrl)
  }
}
