<template>
  <div class="details">
    <div class="container">
      <div class="row">
        <div v-for="(product,index) in products" class="col-md-12" :key="index">
          <div v-if="proId == product.productId">
            <h1>{{ product.productTitle }}</h1>
          </div>
        </div>
      </div>
    </div>
    <p>{{Pid}}</p>
  </div>
</template>
<script>
export default {
  name: 'Details',
  props: ['Pid'],
  data () {
    return {
      proId: this.$route.params.Pid,
      title: 'details',
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
  }
}
</script>
