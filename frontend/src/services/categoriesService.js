import api from './api'

export const categoriesService = {
  async getAll() {
    const { data } = await api.get('/categories')

    return data
  },
}
