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
    // context.error()
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        // resolve({
        //   name: "nghiahsgszzz000",
        // });
        const name = "nghiahsgszzz002"
        context.store.dispatch('setDecksAction',name)    
        resolve({})
        // reject({})
        
      }, 3000);
    })
  },
  created() {
    console.log('this.name',this.name)
  },
  computed:{
    name(){
      return this.$store.getters.decks
    }
  }
};
</script>