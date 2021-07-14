import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Event from '../views/Event.vue'
import Payment from '../views/Payment.vue'
import TicketRequest from '../views/TicketRequest.vue'
import TicketRequestSuccess from '../views/TicketRequestSuccess.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/event',
    name: 'Event',
    // meta: { layout: "payment" },
    component: Event
  },
  {
    path: '/payment',
    name: 'Payment',
    meta: { layout: "payment" },
    component: Payment
  },
  {
    path: '/ticket-request',
    name: 'Ticket Request',
    component: TicketRequest
  },
  {
    path: '/ticket-request-success',
    name: 'Ticket Request Success',
    component: TicketRequestSuccess
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
