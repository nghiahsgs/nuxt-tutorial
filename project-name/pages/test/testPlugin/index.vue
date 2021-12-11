<template>
<div>
  <!-- <fold></fold> -->
  <test100>
      <template #title>
        <p>day la title nhe</p>
      </template>
      <template #desc>
        <p>day la desc nhe</p>
        <p v-font-size:small>small</p>
        <p v-font-size:large>large</p>
        <p v-font-size>default</p>
      </template>

  </test100>

  <button @click="handle_click">click</button>
  <button v-on:click="handle_click">click2</button>
  
  <!-- <test101>
    <template #title>
      <p>day la title</p>
    </template>
    <template #desc>
      <p>day la desc</p>
    </template>
  </test101> -->
</div>
</template>

<script>
import test101 from "@/components/Plugin/Test.vue"
// import {inject} from "vue"
// const logout = inject('logout')

export default {
  components:{
    test101
  },
  created(){
    console.log(this.$hello("nghiahsgs"))
  },
  methods:{
    handle_click(){
      console.log('handle_click click')
      this.$test.logout()
      // logout()
    }
  }
}
</script>

<style>

</style>