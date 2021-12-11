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

      <p>child 2</p>
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
  asyncData(context) {
    console.log({context})
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        resolve({
          name: "nghiahsgszzz000",
        });
      }, 3000);
    })
  },
  created() {
    console.log('created')
    console.log('this.name',this.name)
    
    console.log('this.$store.getters.decks',this.$store.getters.decks)
    this.$store.dispatch('setDecksAction',this.name)
    console.log('this.$store.getters.decks',this.$store.getters.decks)


    setTimeout(() => {
      this.name2 = "nghiahsgs2";
    }, 3000);
  },
};
</script>