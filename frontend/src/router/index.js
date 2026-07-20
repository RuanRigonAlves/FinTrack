// Imports
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import DashboardPage from '@/features/dashboard/pages/DashboardPage.vue'
import CreateTransactionPage from '@/features/transactions/pages/CreateTransactionPage.vue'
import TransactionsPage from '@/features/transactions/pages/TransactionsPage.vue'
import ViewTransactionPage from '@/features/transactions/pages/ViewTransactionPage.vue'

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
    path: '/transactions/new',
    name: 'createTransaction',
    component: CreateTransactionPage,
  },
  {
    path: '/transactions',
    name: 'transactions',
    component: TransactionsPage,
  },
  {
    path: '/transactions/:id',
    name: 'viewTransaction',
    component: ViewTransactionPage,
  },
]

// Router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
