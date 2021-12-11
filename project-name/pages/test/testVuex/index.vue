<template>
  <div>
      
  </div>
</template>

<script>
export default {
  async created(){
      console.log('created')
      console.log('this.$store.user.name',this.$store)
      // this.$store.data.loadedPosts
  }
};
</script>