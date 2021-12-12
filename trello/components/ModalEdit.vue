<template>
  <div class="d-block text-center">
    <!-- <h3>Hello From My Modal!</h3> -->
    <!-- <h3>{{ initValue }}</h3> -->
    {{ card }}
    <textarea id="" v-model="card.data" name="" cols="30" rows="10" />
    <br>
    <button>SAVE</button>
  </div>
</template>

<script>
export default {
  props: {
    initValue: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      card: this.initValue
    }
  },
  watch: {
    initValue () {
      this.card = this.initValue
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
