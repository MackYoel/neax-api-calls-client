import axiosRetry from 'axios-retry'
import BaseService from './base'

class FruitService2 extends BaseService {
  list() {
    return this.$axios.$get('/food/fruits/', {
      'axios-retry': { retries: 3, retryDelay: axiosRetry.exponentialDelay }
    })
  }

  create(data) {
    return this.$axios.$post('/food/fruits/', data)
  }

  delete(id) {
    return this.$axios.$delete(`/food/fruits/${id}/`)
  }
}

export default new FruitService2()
