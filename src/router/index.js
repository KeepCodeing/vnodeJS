import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Home = {
  redirect: '/all',
  path: '/home'
};

const Default = {
  redirect: '/all',
  path: '/'
};

const All = {
  component: () => import('../components/content/all/All'),
  path: '/all'
};

const Good = {
  component: () => import('../components/content/good/Good'),
  path: '/good'
};

const Share = {
  component: () => import('../components/content/share/Share'),
  path: '/share'
};

const Ask = {
  component: () => import('../components/content/ask/Ask'),
  path: '/ask'
};

const Job = {
  component: () => import('../components/content/job/Job'),
  path: '/job'
};

const Topic = {
  component: () => import('../components/content/topic/Topic'),
  path: '/topic/:id',
};

const About = {
  component: () => import('../views/About'),
  path: '/about'
};

const routes = [
  Default,
  Home,
  All,
  Good,
  Share,
  Ask,
  Job,
  Topic,
  About,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
