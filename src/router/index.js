import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Event from '../views/Event.vue'
import TicketRequest from '../views/TicketRequest.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/event/:event_id',
    name: 'Event',
    // meta: { layout: "payment" },
    component: Event
  },

  {
    path: '/ticket-request',
    name: 'Ticket Request',
    component: TicketRequest
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
