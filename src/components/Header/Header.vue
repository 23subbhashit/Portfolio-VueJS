<template>



<div data-aos="fade-up"
     data-aos-duration="3000" style="width:100%;">



    <div class="div div-header" >
      <section class="sec sec-header" style="">
        <h1>Hi, I'm Subbhashit ;) <span id="cursor">|</span></h1>
        <hr class="col-xs-12 d-none d-sm-block" style="background-color: white; width: 90%; height: 2px; border-radius: 3px">
        <div class="presentation">
          <section class="half-header avatar d-none d-md-block">
            <img src="./Images/index.jpeg">
          </section>
          <section class="half-header-r d-none d-sm-none d-md-block">
            <p class="line1">&#91;&nbsp;&ldquo;I'm a DS Enthusiast&rdquo;,<span class="cursor1">_</span></p>
            <p class="line2">&nbsp;&nbsp;&ldquo;Are you looking for one?&rdquo;,<span class="cursor2">_</span></p>
            <p class="line3">&nbsp;&nbsp;&ldquo;Let's work together!&rdquo;&nbsp;&#93;<span class="cursor3">_</span></p>
            <p class="line4">><span class="cursor4">_</span></p>
          </section>
        </div>
      </section>
    </div>
</div>

</template>

<style scoped>
.div{
  height: calc(100vh);
  scroll-snap-align: start;
  color: #DDD;
  position: relative;
  background-image: url(https://image.freepik.com/free-photo/aerial-view-of-computer-laptop-on-wooden-table-photography-hobby-concept_53876-20659.jpg);
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
}

.sec-header{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

body{
  font-family: 'Montserrat';
  margin: 0;
}

.presentation{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-content: flex-end;
  font-weight: 520;
}

.sec-header{
  display: flex;
  flex-direction: column;
  justify-content: center;
      top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,.8);
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
}

.sec-header>h1{
  font-size: 6rem;
  text-align: center;
}

#cursor {
  animation: blink 1s infinite;
}

img{
  height: 16em;
  opacity: 0.5;
  clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
  transition: opacity 0.5s, transform 1s;
  transform: translate(-4em);
}

img:hover{
  opacity: .9;
  transform: translate(-2em);
}

.half-header{
  flex-basis: 40%;
}

.half-header-r{
  flex-basis: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

h2{font-size: 2.5em;
  color:  #888;
}

.avatar{
  text-align: right;
}


p {
  text-align: left;
  font-size: 2.5em;
  font-family: monospace;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
}

span {
  color: #fff;
  font-weight: bold;
}

.line1 {
  color: #9cd9f0;
  animation: type 0.5s 1s steps(20, end) forwards;
}

.cursor1 {
  animation: blink 1s 2s 2 forwards;
}

.line2 {
  color: #9cd9f0;
  animation: type 0.5s 4.25s steps(20, end) forwards;
}

.cursor2 {
  animation: blink 1s 5.25s 2 forwards;
}

.line3 {
  color: #9cd9f0;
  animation: type 0.5s 7.5s steps(20, end) forwards;
}

.cursor3 {
  animation: blink 1s 8.5s 2 forwards;
}

.line4 {
  color: #9cd9f0;
  animation: type 0.5s 10.75s steps(20, end) forwards;
}

.cursor4 {
  animation: blink 1s 8.5s infinite;
}

@keyframes type {
  to {
    width: 17em;
  }
}

@keyframes blink {
  0%{
    opacity: 0;
  }
  49%{
    opacity: 0;
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 1;
  }
}

@media (max-width:500px) {
    .presentation{
    display : none;
    }
    .sec h1{
      font-size: 50px;
    }
}



</style>