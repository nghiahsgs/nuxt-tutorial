// import Vue from 'vue'
// Vue.use(VueSpinners)

import Test from "@/components/Plugin/Test.vue"
export default {
    install:(app,options)=>{
        app.component('test100',Test)
    }
}

// import {createApp} from "vue"
// import MyFirstPlugin from "./MyFirstPlugin"
// app.use(MyFirstPlugin)