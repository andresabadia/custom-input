<template>
    <div>
        <div 
            class="container-parent" 
            :style="{
                height:height + 40 + 'px'
                }">
            <div 
                class="container" 
                :style="{
                    height: height + 20 + 'px',
                    width: width + 20 + 'px'
                    }">
                <div 
                    class="idx-input-div" :style="{
                        height:height + 'px',
                        width:width+'px'
                        }">                
                    <app-border-1 
                        :animate="animate" 
                        :height="height" 
                        :width="width"></app-border-1>
                    <app-border-2 
                        :animate="!animate" 
                        :height="height" 
                        :width="width"></app-border-2>
                    <input 
                        v-if="!message && !button" 
                        :type="type" 
                        class="idx-input" 
                        @focus="focus" 
                        @blur="blur" 
                        v-model="input" 
                        :value="value"
                        :class="invClass">
                    <textarea 
                        v-if="message" 
                        :type="type" 
                        class="idx-textarea" 
                        @focus="focus" 
                        @blur="blur" 
                        v-model="input"  
                        :value="value"
                        :class="invClass" ></textarea>
                    <button 
                        v-if="button" 
                        class="idx-button" 
                        @mouseenter="mouseenter" 
                        @mouseleave="mouseleave"><slot></slot></button>
                    <div class="idx-input-placeholder" :class="inputLabel" @click="inputFocus">{{label}}</div>
                </div>
            </div>
        </div>
        <transition name="fade">
            <div v-if="show" class="tooltip" :style="{width:width+'px'}"><slot></slot></div>
        </transition>
    </div>
    
</template>

<script>
import InputBorder1 from './borders/InputBorder1.vue';
import InputBorder2 from './borders/InputBorder2.vue';
export default {
    data(){
        return{
            inputLabel: '',
            input:'',
            animate:false,
            iClass:true,
            first:true
        }
    },
    props: {
        label: String,
        type: {
            default: 'text'
        },
        height: {
            default: 40
        },
        width:{
            default: 200
        },
        value: {},
        invalidClass: Boolean
    },
    computed:{
        message(){
            if (this.type == 'message'){
                return true
            } else {
                return false
            }
        },
        button(){
            if (this.type == 'button'){
                return true
            } else {
                return false
            }
        },
        invClass(){
            if (this.iClass){
                return ''
            }
            if(this.invalidClass){
                return 'invalid'
            }
        },
        show(){
            if((this.first && this.invalidClass) || (!this.first && !this.invalidClass)){
                return false
            }
            if(!this.first && this.invalidClass){
                return true
            }
        }
    },
    
    methods:{
        inputFocus(e){  
            e.target.previousElementSibling.focus()         
        },
        focus(){
            this.inputLabel='idx-input-label';
            this.animate = true;
            this.iClass = true;
        },
        blur(e){
            this.input == '' ? this.inputLabel='':'';
            this.animate = this.input == '' ? false : true;
            this.iClass = false;
            this.$emit('input', e.target.value)
            this.first = false;
        },
        mouseenter(){
            this.animate = true
        },
        mouseleave(){
            this.animate = false
        }
    },
    components:{
        appBorder1: InputBorder1,       
        appBorder2: InputBorder2
    }

}
</script>


<style scoped>
    *{  
    box-sizing: border-box;
    }
    .container-parent{
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        height: 80px;
        transition: transform 1s
    }
    .container{
        display: flex;
        height: 60px;
        width: 220px;
        justify-content: center;
        align-items: center;
    
    }
    .idx-input-div{
        position: relative;
        height: 40px;
        width: 200px;      
    }
    .idx-input, .idx-textarea, .idx-button{
        position:absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        padding: 0 10px;
        border:none;
        font: inherit;
        font-weight: 400;
        color: rgb(87, 87, 87);
    }
    .idx-input{
        padding-top: 5px;
    }
    .idx-textarea{     
        padding: 10px;
        padding-top: 15px;   
        resize: none;
    }
    .idx-input:focus, .idx-textarea:focus, .idx-button:focus{
        outline: none;
    }
    .idx-button{
        font: inherit;
        color: orange;
        background-color: rgb(242, 246, 255);
        transition: .3s
    }
    .idx-button:hover{
        font-size: x-large;
        background-color: rgb(203, 218, 255);
    }
    .idx-input-placeholder{
        position: absolute;
        top: 0;
        left: 0;
        line-height: 40px;
        color:rgba(118, 161, 255, 0.562);  
        padding: 0 10px;
        z-index: 1;
        transition: .3s;
    }
    .idx-input-label{
        transform: scale(.75) translateY(-20px);
        background: white;
        color:rgb(118, 161, 255);
        height: 30px;
    }
    .invalid{
        color: inherit
    }
    .tooltip{
        background: rgb(249, 224, 224);
        color: #fd6161;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        position: relative;
        margin: -10px auto 10px;
    }
    .tooltip::after {
        content: " ";
        position: absolute;
        bottom: 100%;  /* At the top of the tooltip */
        left: 50%;
        margin-left: -5px;
        border-width: 10px;
        border-style: solid;
        border-color: transparent transparent rgb(249, 224, 224) transparent;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s, transform .3s;

    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
        transform: translateY(20px)
    }
</style>
