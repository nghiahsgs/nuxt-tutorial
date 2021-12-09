<template>
    <div>
        <ul>
        <li>
          <NuxtLink to="/test/test1">Test 1</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/test/test2">Test 2</NuxtLink>
        </li>
        <!-- child ..
        <button @click="handle_click(1)">go to test1</button>
        <button @click="handle_click(2)">go to test2</button> -->
      </ul>
        <h3>Child 2 (test2)</h3>
    </div>
</template>
<script>
export default {
  created(){
    // console.log('nghiahsgs000')
    console.log(this.$hello('nghiahsgszzz'))
  }
}
</script>