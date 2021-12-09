<template>
  <div>
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

    <h3>{{ name }}</h3>
    <h4>{{ name2 }}</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // name:""
      name2: "",
    };
  },
  // xu ly tren server truoc khi tra ve
  asyncData(context, callback) {
    console.log({ context });
    setTimeout(() => {
      callback(null, {
        name: "nghiahsgs",
      });
    }, 5000);
  },
  created() {
    setTimeout(() => {
      this.name2 = "nghiahsgs2";
    }, 5000);
  },
};
</script>