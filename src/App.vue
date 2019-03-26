<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1> 
    <form>
      <idex-input label="Name" type="text"></idex-input>
      <idex-input label="e-Mail" type="email" :width="400"></idex-input>    
      <idex-input label="Nachricht" type="message" :height="200" :width="300"></idex-input>
      <idex-input label="Tooltip" type="text" :invalidClass="true">Tooltip text</idex-input>
      <idex-input type="button">Send</idex-input>
    </form>    
  </div>
</template>

<script>
import Input from './components/Input.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Custom Input'
    }
  },
  components:{
    idexInput: Input
  }
}
</script>

<style>
#app {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-weight: 900;
}
</style>
