<template>
    <div>
    <br/>
    <br/>
    <br/>
    <div class="shape-container1">
<div class="shape1 originBottomLeft">
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
<div class="shape originBottomLeft">
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
  background: linear-gradient(to top, #283048, #859398);
  height:400px;
  width: 100%;
  transition: all .3s;
}
.shape-container1 {
  height: 400px;
    overflow: hidden;
}
.shape1 {
  background: linear-gradient(to top, #7474BF, #348AC7);
  height:400px;
  width: 100%;
  transition: all .3s;
}

.shape-container:hover .shape {
    transform: skewY(-8deg) translateY(-50px);
}
.shape-container1:hover .shape1 {
    transform: skewY(-8deg) translateY(-50px);
}

.originBottomLeft {
  transform-origin: bottom left;
}



</style>
