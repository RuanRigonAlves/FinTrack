import api from './api'

export const transactionService = {
  async getAll() {
    const { data } = await api.get('/transactions')

    return data
  },

  async getById(id) {
    const { data } = await api.get(`/transactions/${id}`)
    return data
  },

  async create(transaction) {
    const { data } = await api.post('/transactions', transaction)
    return data
  },

  async update(id, transaction) {
    const { data } = await api.put(`/transactions/${id}`, transaction)
    return data
  },

  async delete(id) {
    await api.delete(`/transactions/${id}`)
  },
}
