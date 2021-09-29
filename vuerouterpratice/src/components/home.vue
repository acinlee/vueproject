<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <div v-for="(data, index) in products" :key="index">
      <h3 @click="goTodetail(data.productId)">{{ data.productTitle }}</h3>
    </div>
    <div>
      <button @click="goBack()">goback</button>
    </div>
    <div id="demo">
      <button-counter></button-counter>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      title: 'Home',
      products: [
        {
          productTitle: "A",
          productId:1
        },
        {
          productTitle: "B",
          productId:2
        },
        {
          productTitle: "C",
          productId:3
        },
        {
          productTitle: "D",
          productId:4
        },
        {
          productTitle: "E",
          productId:5
        },
        {
          productTitle: "F",
          productId:6
        }
      ]
    }
  },
  methods: {
    goTodetail(proId) {
      this.$router.push({name:'details', params: {Pid:proId}})
    },
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
