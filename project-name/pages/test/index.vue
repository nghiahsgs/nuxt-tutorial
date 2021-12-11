<template>
<div>
    <h1>day la trang test</h1>
    <ul>
      <li>
        <NuxtLink to="/test">Test</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/test/test1">Test 1</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/test/test2">Test 2</NuxtLink>
      </li>

      <!-- child .. -->
      <button @click="handle_click(1)">go to test1</button>
      <button @click="handle_click(2)">go to test2</button>
    </ul>
     <nuxt-child/>
</div>
</template>

<script>
export default {
  methods:{
    handle_click(test_name){
      if(test_name==1){
        this.$router.push('/test/test1')
      }else{
        this.$router.push('/test/test2')
      }
      
    }
  },
  middleware:[
    'router-log'
  ]
}
</script>

<style>

</style>