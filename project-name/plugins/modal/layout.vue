<template>
    <div modal="true">
        <div>
            <div :data-modal="name" v-if="visible" class="modal">
                <div
                    aria-modal="true"
                    data-reach-dialog-content="true"
                    tabindex="-1"
                    class="modal_mask"
                >
                    <div class="modal_body">
                        <slot :payload="payload"><slot>
                    </div>
                </div>

            </div>
        </div>

    </div>
    
</template>

<script>
import VModal from "./handle"
export default {
    props:{
        name:{
            type:String,
            required:true
        }
    },
    data(){
        return {
            payload:null
        }
    },
    methods:{
        open(params){
            this.visible = true
        },
        close(params){
            this.visible = false
        }
    },
    beforeMount(){
        // open event
        VModal.EventBus.$on('open',params=>{
            if(this.name==params.name){
                this.open(params)
            }
        })

        // close event
        VModal.EventBus.$on('close',params=>{
            if(this.name==params.name){
                this.close(params)
            }
        })
    }
}
</script>