import Vue from 'vue'

import Test from "@/components/Plugin/Test.vue"
const MyFirstPlugin =  {
    install:(app,options)=>{
        app.component('test100',Test)

        app.directive('font-size',(el,binding,vnode)=>{
            var size = 16
            console.log(el,binding)
            switch(binding.arg){
                case "small":
                    size=options.fontSize.small;
                    break
                case "large":
                    size=options.fontSize.large;
                    break
                default:
                    size=options.fontSize.default;
                    break;
            }
            console.log({size})
            el.style.fontSize = size + 'px'
        })

        // app.mixin({
        //     data(){
        //         return {
        //             featuredLink:"http://nghiahsgs.com"
        //         }
        //     },
        //     created(){
        //         console.log("hello world =))")
        //     }
        // })

        const logout = ()=>{
            console.log("logout is being called")
        }
        // app.provide('logout',logout)

        app.prototype.$test = {
            logout(){
                logout()
                // console.log("logout is being called2")
            }
        }
    }
}

Vue.use(MyFirstPlugin,{
    fontSize:{
        small:12,
        large:32,
        default:16
    }
})