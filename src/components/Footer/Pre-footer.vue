<template>
<div data-aos="zoom-out-down"
     data-aos-duration="3000">
    <div class="card ">
  <p>Hello World!<br>Coding is fun:)  </p>
</div> 
</div>
</template>

<style scoped>
 @import url(https://fonts.googleapis.com/css?family=Oswald|Roboto);
 body{
            padding: 0;
            margin:0;
            background-color: rgb(240, 207, 241);
        }
.card{
            margin:120px auto;
            display: flex;
            justify-content: center;
            width: 200px;
            height: 100px;
            position: relative;
            align-items: center;
            background-color: rgb(194, 37, 194);
            box-shadow: 5px 4px 0px rgba(0, 0, 0, 0.3);
        }
 .card:before{
            content: '';
            position: absolute;
            width: 0;
            height: 100px;
            border:340px solid rgb(156, 63, 156);
            border-top: 80px solid transparent;
            border-left: 100px solid transparent;
            border-bottom: 70px solid transparent;
            filter: drop-shadow(5px 4px 0px rgba(0, 0, 0, 0.3));
        }
 .card:after{
            content: '';
            position: absolute;
            width: 0;
            height: 0;
            margin-top:-50px;
            margin-left: 60px;
            border:380px solid rgb(180, 59, 180);
            border-top: 130px solid transparent;
            border-right:60px solid transparent;
            border-bottom: 150px solid transparent;
            filter: drop-shadow(5px 4px 0px rgba(0, 0, 0, 0.3));
            animation: rotate 5s infinite;
        }
 @keyframes rotate{
       10%{
           transform:rotate(1deg);
          }
       80%{transform:rotate(-2deg);
          }
 }
p{
            position: absolute;
            z-index: 1000;
            font-family: 'Roboto', sans-serif;
            color: whitesmoke;
            font-size: 1.5rem;
            margin-left: -149px;
            margin-top: -93px;
            letter-spacing: 2px;
        }
.card p:nth-child(2){
            opacity: 0.6;
            font-size: 1rem;
            margin-left: -128px;
            margin-top: 3px;
        }
.icon{
            position: relative;
            z-index: 1000;
            color: #fff;
            margin-left: 260px;
            margin-top: 120px;
            display:flex;
            font-size: 1.9rem;
        }
 i{
            padding-left: 50px;
            margin: 5px;
            cursor: pointer;
        }
i:hover{
            opacity: 0.7;
        }
@media (max-width:800px) {
    .card{
    display : none;
    }
}
</style>