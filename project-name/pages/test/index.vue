<template>
<div>
    <h1>day la trang test</h1>
    <!-- <ul>
            <li><nuxt-child to="/test/test1"/>zzz</li>
            <li><nuxt-child to="/test/test2"/>zz</li>
    </ul> -->

    <ul>
        <li>
          <NuxtLink to="/test/test1">Test 1</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/test/test2">Test 2</NuxtLink>
        </li>
      </ul>

     <nuxt-child/>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>