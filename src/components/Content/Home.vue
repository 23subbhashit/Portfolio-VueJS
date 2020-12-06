<template>
    <div class="container">
    <br/>
    <Bar></Bar>
    <br/>
    <br/>
    <About></About>
    <br/>
    <br/>
    <Card2></Card2>
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
