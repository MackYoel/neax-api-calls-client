import GeneralRepository from '@/repositories/index'

export default (ctx, inject) => {
  inject('api', {
    fruits: new GeneralRepository('/food/fruits/', ctx.$axios),
    vegetables: new GeneralRepository('/food/vegetables/', ctx.$axios)
  })
}
