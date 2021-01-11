<template>
  <div id="app">
    <Navbar></Navbar>
    <Header style="margin:0"></Header>
    
    <router-view></router-view>
    <PreFooter></PreFooter>
    <br/>
    <br/>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from './components/Header/Navbar.vue'
import Header from './components/Header/Header'
//import PreFooter from './components/Footer/Pre-footer'
import Footer from './components/Footer/Footer'


export default {
  name: 'App',
  components: {
    Navbar,
    Header,
    //PreFooter,
    Footer
  }
}
</script>

<style>
#app {
  margin-top: 60px;
  width: 100%;
}
</style>
