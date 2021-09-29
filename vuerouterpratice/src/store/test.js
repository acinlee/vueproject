import Vue from "vue";

const app = Vue.createApp({})

app.component('button-counter', {
    data() {
        return {
            count: 0
        }
    },
    template: `
    <button v-on:click="count++">
      You clicked me {{ count }} times.
    </button>`
})

app.$mount('#demo')
