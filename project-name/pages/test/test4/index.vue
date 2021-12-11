<template>
  <div>
    <form action="" @submit.prevent="handleSubmit">
      <pre>
      {{L_data}}
      </pre>

      <br>
      <button type="submit">submit</button>
    </form>    
  </div>
</template>

<script>
import {ServiceAxios} from "@/services/http-axios"
export default {
  data() {
    return {
      dataForm:{
        name:"",
        age:16,
        lop:10.
      },
      L_data:{}
    };
  },
  async created(){
      console.log('created')
      await this.get_L_data()
  },
  methods:{
    async get_L_data(){
      const url = 'https://test-app-chat.firebaseio.com/decks2.json'
      const res = await ServiceAxios.get_data_json(url,{})
      // debugger
      this.L_data = res
    },
    async handleSubmit(){
      const url = 'https://test-app-chat.firebaseio.com/decks2.json'
      const data = {
          "age":"30",
          "name":"nghiahsgs"
      }
      const res = await ServiceAxios.post_data_json(url,{},data)
      await this.get_L_data()

    }
  }
};
</script>