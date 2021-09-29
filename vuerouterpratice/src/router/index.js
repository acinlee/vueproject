import Vue from 'vue'
import Router from "vue-router";

const home = () => import("@/components/home")
const blog = () => import("@/components/blog")
const services = () => import("@/components/services")
const contact = () => import("@/components/contact")
const details = () => import("@/components/details")

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/blog',
            name: 'blog',
            component: blog
        },
        {
            path: '/services',
            name: 'services',
            component: services
        },
        {
            path: '/contact',
            name: 'contact',
            component: contact
        },
        {
            path: '/details/:Pid',
            name: 'details',
            component: details,
            props: true
        }
    ]
})
