<template>


<div data-aos="fade-up"
     data-aos-duration="3000">



    <div class="card border-success">
    <br/>
    <div class="mt-3"></div>
        <h1>Work Experience <span>Timeline</span></h1>

<div class="container">
   <br/>
   <div class="timeline-block timeline-block-right">
      <div class="marker"></div>
      <div class="timeline-content">
         <h3>Azure Skynet Solutions</h3>
         <span>Data Analyst</span><br/>
         <span>JAN-FEB 2020</span>
         <p>Collected data from various resources,performed eda and feature engineering on data,applied various ml models.</p>
      </div>
   </div>

   <div class="timeline-block timeline-block-left">
      <div class="marker"></div>
      <div class="timeline-content">
         <h3>Nettv4u</h3>
         <span>Machine Learning Engineer</span><br/>
         <span>JUN-JULY 2020</span>
         <p>Worked on collecting data from different websites,performed Data Analysis and submitted reports</p>
      </div>
   </div>

   <div class="timeline-block timeline-block-right">
      <div class="marker"></div>
      <div class="timeline-content">
         <h3>Naaniz</h3>
         <span>Machine Learning Engineer</span><br/>
         <span>JUL-AUG 2020</span>
         <p>Performed Web Scraping, used different DL approaches for time series forecasting, got hands-on yolo at the end as well.</p>
      </div>
   </div>

   <div class="timeline-block timeline-block-left">
      <div class="marker"></div>
      <div class="timeline-content">
         <h3>MissionED</h3>
         <span>Web Developer</span><br/>
         <span>SEP-OCT 2020</span>
         <p>Made and designed dashboards and mainstream pages using HTML,CSS,React and Bootstrap.</p>
      </div>
   </div>

   
</div>
    </div>
</div>
</template>

<style scoped>
* {
   -webkit-box-sizing: border-box;
   -moz-box-sizing: border-box;
   box-sizing: border-box;
   outline: none;
}

body {
   margin: 0;
   padding: 30px 0;
   font-family: 'Roboto', sans-serif;
   background: #F1F2F6;
}

h1 {
   text-align: center;
   font-weight: 300;
   color: #777
}

h1 span {
   font-weight: 600;
}

.container {
   width: 80%;
   padding: 50px 0;
   margin: 50px auto;
   position: relative;
   overflow: hidden;
}

.container:before {
   content: '';
   position: absolute;
   top: 0;
   left: 50%;
   margin-left: -1px;
   width: 2px;
   height: 100%;
   background: #CCD1D9;
   z-index: 1
}

.timeline-block {
   width: -webkit-calc(50% + 8px);
   width: -moz-calc(50% + 8px);
   width: calc(50% + 8px);
   display: -webkit-box;
   display: -webkit-flex;
   display: -moz-box;
   display: flex;
   -webkit-box-pack: justify;
   -webkit-justify-content: space-between;
   -moz-box-pack: justify;
   justify-content: space-between;
   clear: both;
}

.timeline-block-right {
   float: right;
}

.timeline-block-left {
   float: left;
   direction: rtl
}

.marker {
   width: 16px;
   height: 16px;
   border-radius: 50%;
   border: 2px solid #F5F7FA;
   background: #4FC1E9;
   margin-top: 10px;
   z-index: 9999
}

.timeline-content {
   width: 95%;
   padding: 0 15px;
   color: #666
}

.timeline-content h3 {
   margin-top: 5px;
   margin-bottom: 5px;
   font-size: 25px;
   font-weight: 500
}

.timeline-content span {
   font-size: 15px;
   color: #a4a4a4;
}

.timeline-content p {
   font-size: 14px;
   line-height: 1.5em;
   word-spacing: 1px;
   color: #888;
}


@media screen and (max-width: 768px) {
   .container:before {
      left: 8px;
      width: 2px;
   }
   .timeline-block {
      width: 100%;
      margin-bottom: 30px;
   }
   .timeline-block-right {
      float: none;
   }

   .timeline-block-left {
      float: none;
      direction: ltr;
   }
}

</style>