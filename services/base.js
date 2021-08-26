let axios

export default class BaseService {
  static setAxios(axiosInstance) {
    axios = axiosInstance
  }

  get $axios() {
    return axios
  }
}
