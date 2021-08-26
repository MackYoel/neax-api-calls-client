import BaseService from '~/services/base'

export default ({ $axios }) => {
  BaseService.setAxios($axios)
}
