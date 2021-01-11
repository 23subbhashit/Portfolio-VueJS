<template>


    <div class="card ">
<div class="card border-primary" style="margin-top:-300px">
<div class="container">
<br/>
    <br/><br/>
    <br/>

    <center><h1 class="display-2 font-weight-bold text-uppercase text-center" style="font-size:50px">SKills</h1></center>
    <br/>
    <br/>
    
    <div class="row justify-content-center">
    <div class="col-xl-4 col-md-6">
            <h3 class="progress-title">HTML5</h3>
            <div class="progress pink">
                <div class="progress-bar" style="width:85%; background:#ff4b7d;">
                    <div class="progress-value">85%</div>
                </div>
            </div>
 
            <h3 class="progress-title">CSS3</h3>
            <div class="progress green">
                <div class="progress-bar" style="width:85%; background:green;">
                    <div class="progress-value">85%</div>
                </div>
            </div>
            <h3 class="progress-title">Python</h3>
            <div class="progress pink">
                <div class="progress-bar" style="width:95%; background:#ff4b7d;">
                    <div class="progress-value">95%</div>
                </div>
            </div>
            <h3 class="progress-title">Machine Learning</h3>
            <div class="progress green">
                <div class="progress-bar" style="width:95%; background:green;">
                    <div class="progress-value">95%</div>
                </div>
            </div>
            <h3 class="progress-title">Deep Learning</h3>
            <div class="progress pink">
                <div class="progress-bar" style="width:90%; background:#ff4b7d;">
                    <div class="progress-value">90%</div>
                </div>
            </div>
            
        </div>
        <div class="col-xl-4 col-md-6">
            
            <h3 class="progress-title">Data Science</h3>
            <div class="progress pink">
                <div class="progress-bar" style="width:95%; background:#ff4b7d;">
                    <div class="progress-value">95%</div>
                </div>
            </div>
            <h3 class="progress-title">Mysql</h3>
            <div class="progress green">
                <div class="progress-bar" style="width:80%; background:green;">
                    <div class="progress-value">80%</div>
                </div>
            </div>
            <h3 class="progress-title">VueJS</h3>
            <div class="progress pink">
                <div class="progress-bar" style="width:90%; background:#ff4b7d;">
                    <div class="progress-value">90%</div>
                </div>
            </div>
            <h3 class="progress-title">Kotlin</h3>
            <div class="progress green">
                <div class="progress-bar" style="width:70%; background:green;">
                    <div class="progress-value">70%</div>
                </div>
            </div>
            <h3 class="progress-title">NodeJS</h3>
            <div class="progress pink">
                <div class="progress-bar" style="width:75%; background:#ff4b7d;">
                    <div class="progress-value">75%</div>
                </div>
            </div>
        </div>
    </div>
    
    <br/>
    <br/>
</div>
</div>
</div>

</template>

<style scoped>
.progress-title{
    font-size: 16px;
    font-weight: 700;
    color: #011627;
    margin: 0 0 20px;
}
.progress{
    height: 10px;
    background: #cbcbcb;
    border-radius: 0;
    box-shadow: none;
    margin-bottom: 30px;
    overflow: visible;
}
.progress .progress-bar{
    box-shadow: none;
    position: relative;
    -webkit-animation: animate-positive 2s;
    animation: animate-positive 2s;
}
.progress .progress-bar:after{
    content: "";
    display: block;
    border: 15px solid transparent;
    border-bottom: 21px solid transparent;
    position: absolute;
    top: -26px;
    right: -12px;
}
.progress .progress-value{
    font-size: 15px;
    font-weight: bold;
    color: #000;
    position: absolute;
    top: -40px;
    right: 0;
}
.progress.pink .progress-bar:after{
    border-bottom-color: #ff4b7d;
}
.progress.green .progress-bar:after{
    border-bottom-color: #5fad56;
}
.progress.yellow .progress-bar:after{
    border-bottom-color: #e8d324;
}
.progress.blue .progress-bar:after{
    border-bottom-color: #3485ef;
}
@-webkit-keyframes animate-positive{
    0% { width: 0; }
}
@keyframes animate-positive{
    0% { width: 0; }
}


</style>