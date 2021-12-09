<template>
    <div>
        <p>hello id : {{id}}</p>
        <p>hello user_id : {{user_id}}</p>

    </div>
</template>

<script>
export default {
    validate(context){
        // console.log({context})
        const id = context.params.id
        const user_id = context.query.user_id
        // console.log('zzz')
        // console.log({user_id});
        return !isNaN(id)
    },
    data(){
        return {
            'id':''
        }
    },
    created(){
        this.id = this.$route.params.id
        // this.user_id = this.$route.query.user_id
    },
    asyncData(context, callback){
        console.log({context});
        setTimeout(() => {
            callback(null,{
                user_id:context.query.user_id
            })
        }, 3000);

    }
}
</script>

<style>

</style>