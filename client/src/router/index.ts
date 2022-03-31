//vendor imports (which go in {})
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

//personal imports
import Home from '../pages/Home.vue';
//import Messages from '../pages/Messages.vue';
import Generic from '../pages/Generic.vue';
import Login from '../pages/Login.vue';
import session from "../models/session";

//All of our routes go in the route array
const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/about', component: Generic, props: { title: 'About Page!' } },
  { path: '/contact', component: Generic, props: { title: 'Contact Page!' } },
  { path: '/login', component: Login },
  { path: '/signup', component: Generic, props: { title: 'Signup Page!' } },
  { path: '/wall', component: () => import('../pages/Wall.vue') },
  { path: '/hidden', component: Generic, props: { title: 'You reached the hidden Page!' } },
]

// Set up the router. This example is including a history which affects how/when things are loaded/reloaded
const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
  linkActiveClass: 'is-active',
})

//before a user can view the messages page they must login
router.beforeEach((to, from) => {
  if(session.destinationUrl == null && to.path != '/login') {
    session.destinationUrl = to.path;
}
  console.log({ to });
  const protectedUrls = ['/messages', '/wall', '/feed', '/hidden'];
  console.log({ protectedUrls });

  if (protectedUrls.includes(to.path)) { // list of paths that require login
      console.log('requires login');
        if (!session.user) {
            return '/login';
        }
    }
})

export default router;