<template>
    <div>
    <br/>
    <br/>
    <br/>
    <div class="shape-container">
      <div class="shape">
      </div>
    </div>
    <div class="container">
    <Bar></Bar>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <div class="shape-container">
      <div class="shape">
      </div>
    </div>
    <div class="container">

    <About></About>
    </div>
    
    <br/>
    <br/>
    <div class="container">
    <Card2></Card2>
    </div>
    <br/>
      
    </div>
</template>

<script>
//import Progressbar from '@/components/Content/Home/Progressbar'
import Bar from '@/components/Content/Home/Bar'
//import Card from '@/components/Content/Home/Card'
import About from '@/components/Content/About'
import Card2 from '@/components/Content/Home/Card2'
export default {
  components : {
  //Progressbar,
   Bar,
  //  Card,
    About,
    Card2
  }
}
</script>

<style scoped>
.shape-container {
  height: 400px;
  overflow: hidden;
}
.shape {
  background: linear-gradient(to top, #f32b60, #ff8f1f);
  height:400px;
  width: 100%;
  transform: skewY(-8deg);
  transform-origin: bottom left;

}
.shape1 {
  background: linear-gradient(to top, #f32b60, #ff8f1f);
  height:400px;
  width: 100%;
  transform: skewY(-8deg);
  transform-origin: bottom right;
  z-index:-1;
}




</style>
