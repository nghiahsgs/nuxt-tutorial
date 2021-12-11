<template>
<div>
  <!-- <fold></fold> -->
  <!-- <test100/> -->
  <test101>
    <template #title>
      <p>day la title</p>
    </template>
    <template #desc>
      <p>day la desc</p>
    </template>
  </test101>
</div>
</template>

<script>
import test101 from "@/components/Plugin/Test.vue"
export default {
  components:{
    test101
  },
  created(){
    console.log(this.$hello("nghiahsgs"))
  }
}
</script>

<style>

</style>