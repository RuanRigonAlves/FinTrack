// Imports
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import DashboardPage from '@/features/dashboard/pages/DashboardPage.vue'
import CreateTransactionPage from '@/features/transactions/pages/CreateTransactionPage.vue'
import TransactionsPage from '@/features/transactions/pages/TransactionsPage.vue'

// Routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardPage,
  },
  {
    path: '/createTransaction',
    name: 'createTransaction',
    component: CreateTransactionPage,
  },
  {
    path: '/transactions',
    name: 'transactions',
    component: TransactionsPage,
  },
]

// Router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
