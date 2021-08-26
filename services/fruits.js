import axiosRetry from 'axios-retry'

export default class FruitService {
  static list($axios) {
    return $axios.$get('/food/fruits/', {
      'axios-retry': { retries: 3, retryDelay: axiosRetry.exponentialDelay }
    })
  }

  static create($axios, data) {
    return $axios.$post('/food/fruits/', data)
  }

  static delete($axios, id) {
    return $axios.$delete(`/food/fruits/${id}/`)
  }
}
