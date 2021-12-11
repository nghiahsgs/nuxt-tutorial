<template>
  <div>
    <form action="" @submit.prevent="handleSubmit">
      <pre>
      {{L_data}}
      </pre>

      <br>

      <!-- name2: {{name2}} -->
      <button type="submit">submit</button>
    </form>    
  </div>
</template>

<script>
import axios from "axios"
import {ServiceAxios} from "@/services/http-axios"
export default {
  data() {
    return {
      dataForm:{
        name:"",
        age:16,
        lop:10.
      },
      // L_data:{},
      
    };
  },
  asyncData(context) {
    console.log({context})
    return new Promise((resolve, reject)=>{
        axios.get('https://test-app-chat.firebaseio.com/decks2.json').then(
          (data)=>{
            resolve({
              L_data:data['data']
            })
          }
        )
    })
  },
  methods:{
    async get_L_data(){
      const url = 'https://test-app-chat.firebaseio.com/decks2.json'
      const res = await ServiceAxios.get_data_json(url,{})
      this.L_data = res
    },
    async handleSubmit(){
      const url = 'https://test-app-chat.firebaseio.com/decks2.json'
      const data = {
          "age":"30",
          "name":"emlamwap"
      }
      const res = await ServiceAxios.post_data_json(url,{},data)
      await this.get_L_data()
    }
  }
};
</script>