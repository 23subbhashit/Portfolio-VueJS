<template>
<nav class="mb-1 navbar navbar-expand-lg navbar-dark info-color fixed-top">
<a class="navbar-brand" href="#">
  <svg xmlns="http://www.w3.org/2000/svg" width="617" height="73" viewBox="0 0 617 73">
  <text id="SUBBHASHIT" transform="translate(1 50)" fill="#707070" font-size="40" font-family="GreatVibes-Regular, Great Vibes"><tspan x="0" y="0">SUBBHASHIT</tspan></text>
</svg>

</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
    aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent-4">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="https://github.com/23subbhashit">
          <i class="fab fa-github"></i>  Github
        </a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="https://www.instagram.com/subbhashit_2001/">
          <i class="fab fa-twitter"></i>  Instagram
        </a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="https://twitter.com/SMukhkherjee">
          <i class="fab fa-instagram"></i>  Twitter
        </a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="https://www.linkedin.com/in/subbhashit-mukherjee-71849a148/">
          <i class="fab fa-linkedin-in"></i>  Linkedln</a>
      </li>
    </ul>
  </div>
</nav>
</template>

<style scoped>
@import url(https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap);
ul li{
  padding: 20px ;
}
nav svg text{
  stroke: yellow;
  stroke-width: 1;
  animation: textAnimate 8s infinite;
}

@keyframes textAnimate {
  0%{
    stroke-dasharray: 0 50%;
  }
  100%{
    stroke-dasharray: 50% 0;
  }
  
}
@media(max-width: 500px){
  nav svg text{
    font-size: 30px;
}
}
</style>