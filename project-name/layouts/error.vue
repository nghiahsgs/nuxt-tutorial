<template>
<div>
    <!-- <Header/> -->
    <h1>ERROR page zz</h1>
    <h2>statusCode: {{error['statusCode']}}</h2>
    <h2>message: {{error['message']}}</h2>
    
    
</div>
</template>

<script>
// import Header from './header.vue'
export default {
    components:{
        // Header
    },
    props: ['error'],
    layout: 'blog' // you can set a custom layout for the error page
}
</script>