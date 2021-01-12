<template>
  <div id="app">
     <Preloader style></Preloader>
    <Navbar></Navbar>
    <Header style="margin:0"></Header>
    
    <router-view></router-view>
    <br/>
    <br/>
    <div class="shape-container">
<div class="shape ">
     <center><p class="pt-2"><span class="pt-5" style="font-size: 60px;font-weight:bold;">Why </span><span class="pt-5" style="font-size: 60px;font-weight:bold;color:white;">Work </span><span class="pt-5" style="font-size: 60px;font-weight:bold;">With </span><span class="pt-5" style="font-size: 60px;font-weight:bold;">Me?</span></p></center>
  </div>
</div>
    <FooterDesc></FooterDesc>
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
import FooterDesc from './components/Footer/FooterDesc'
import Preloader from './components/Content/Preloader'


export default {
  name: 'App',
  components: {
    Navbar,
    Header,
    //PreFooter,
    Footer,
    FooterDesc,
     Preloader
  }
}
</script>

<style>
#app {
  margin-top: 60px;
  width: 100%;
}

.shape-container {
  height: 400px;
    overflow: hidden;
}
.shape {
  background: linear-gradient(to top, #f32b60, #ff8f1f);
  height:300px;
  width: 100%;
}

</style>
