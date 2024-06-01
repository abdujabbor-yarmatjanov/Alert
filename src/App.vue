<script setup lang="ts">
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

import 'swiper/css/grid';
import 'swiper/css/pagination';

import { Grid, Pagination } from 'swiper/modules';
const products = ref([
    {
        id:1,
        img: "/img/Group 74.svg"
    },
    {
        id:2,
        img: "/img/Kenny Ross.svg"
    },
    {
        id:3,
        img: "/img/KOB logo.svg"
    },
    {
        id:4,
        img: "/img/Main logo.svg"
    },
    {
        id:5,
        img: "/img/01 - Logo (Traced).svg"
    },
    {
        id:6,
        img: "/img/Group 28.svg"
    },{
        id:7,
        img: "/img/Group 74.svg"
    },
    {
        id:8,
        img: "/img/Kenny Ross.svg"
    },
    {
        id:9,
        img: "/img/KOB logo.svg"
    },
    {
        id:10,
        img: "/img/Main logo.svg"
    },
    {
        id:11,
        img: "/img/01 - Logo (Traced).svg"
    },
    {
        id:12,
        img: "/img/Group 28.svg"
    },{
        id:13,
        img: "/img/Group 74.svg"
    },
    {
        id:14,
        img: "/img/Kenny Ross.svg"
    },
    {
        id:15,
        img: "/img/KOB logo.svg"
    },
    {
        id:16,
        img: "/img/Main logo.svg"
    },
    {
        id:17,
        img: "/img/01 - Logo (Traced).svg"
    },  {
        id:18,
        img: "/img/Group 28.svg"
    }
]);
// const responsiveOptions = ref([
//     {
//         breakpoint: '1199px',
//         numVisible: 3,
//         numScroll: 3
//     },
//     {
//         breakpoint: '991px',
//         numVisible: 2,
//         numScroll: 2
//     },
//     {
//         breakpoint: '767px',
//         numVisible: 1,
//         numScroll: 1
//     }
// ]);
const modules= [Grid, Pagination];

</script>

<template>
    <div class="bg-black">
        <div class="circle-1"></div>
        <div class="circle-2"></div> 
    <div class=" flex pt-2 justify-content-between">
        <h1 class=" pirt text-white">Uptify</h1>
        <div class="ha">
        <div class="burger  cursor-pointer">
            <div class="burger_items"></div>
            <div class="burger_items_2"></div>
        </div>
        </div>
    </div>
<div class="flex justify-content-center">
        <h1 class=" pi text-white w-6 text-center mt-8 text-2xl sm:text-5xl lg:text-6xl xl:text-8xl">Be the first who
Find Out Phone NUmber Change_</h1>
        </div>
    
  <div class="carousel-container">
    <swiper
    :slidesPerView="3"
    :grid="{
      rows: 2,
      fill:'row'
    }"
    :spaceBetween="20"
    :slidesPerGroup="3"
    :pagination="{
      clickable: true,
    }"
    :breakpoints="{
        '0':{
            slidesPerView: 1,
        },
      '640': {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      '768': {
        slidesPerView: 3,
        slidesPerGroup: 3
      },
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="product in products" :key="product.id">
        <div class="card-glass">
            <img :src="product.img" alt="" class="img">
        </div>
    </swiper-slide>
  </swiper>
  </div>
  <div class="flex justify-content-center">
   
    <h2 class=" h2 text-white w-5 text-center flex justify-content-center text-2xl sm:text-5xl lg:text-6xl xl:text-8xl">Powerful monitor 
of your  dealer 
infestruction</h2>
  </div>
    <div class="animation">
     <div class="circle-3"></div>
        <div class="circle-4"></div> 
    <div class="slide mb-3">
        <div class="slide-wrapper slide-1">
            <div class="slide-row">
                <div class="slide-col">
                    <div class="card flex justify-content-center align-items-center">
                     <img src="../public/img/image 1.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card flex justify-content-center align-items-center">
                     <img src="../public/img/image 11.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 14.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 15.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 20.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 22.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 4.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 14.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 19.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 5.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 16.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 21.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 13.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 7.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 12.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 9.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="slide mb-3">
        <div class="slide-wrapper slide-2">
            <div class="slide-row">
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 1.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 11.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 14.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 15.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 20.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 22.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 4.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 4.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 14.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 19.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 5.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 16.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 21.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 13.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 7.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 12.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 9.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="slide mb-3">
        <div class="slide-wrapper slide-3">
            <div class="slide-row">
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 1.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 11.svg" class="w-7 sm:w-8" alt="">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 14.svg" class="w-7 sm:w-8" alt="">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 15.svg" class="w-7 sm:w-8" alt="">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 20.svg" class="w-7 sm:w-8" alt="">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 22.svg" class="w-7 sm:w-8" alt="">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 4.svg" class="w-7 sm:w-8" alt="">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 4.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 14.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 19.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 5.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 16.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 21.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 13.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 7.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 12.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="card  flex justify-content-center align-items-center">
                     <img src="../public/img/image 9.svg" class="w-7 sm:w-8" alt="Image 201">
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
<div class="flex justify-content-center">
        <h1 class="text-white w-8 text-center mt-8 text-2xl sm:text-5xl lg:text-6xl xl:text-8xl">Start Free 
today</h1>
        </div>
        <div class="container--input mb-8">
            <div class="flex flex-column mb-5">
                <label for="username" class="input-table">
                    Username:</label>
                     <div ><input class="input" type="text" id="username" placeholder="Type your username"></div>
            </div>
            <div class="flex flex-column mb-5">
                <label for="password" class="input-table">
                    password:</label>
                    <div><input class="input" type="password" id="password" placeholder="password"></div>
            </div>
        </div>
        <div class=" wart results-circule results-circule--create cursor-pointer xs:text-2xl">
            Create account 
        </div>
</div>
</template>

<style scoped>
.bg-black{
    background-color: black;
}
.circle-1 {
    width: 600px;
    height: 600px;
    border-radius: 1083px;
    background: #0A72D4;
    filter: blur(180px);
    position: absolute;
    top: -50px;
    left: 10%;
    animation: backAnimation-1 34s infinite;
}
.circle-2 {
    width: 600px;
    height: 600px;
    border-radius: 1083px;
    background: #0A72D4;
    filter: blur(180px);
    position: absolute;
    top: 100%;
    left: 80%;
    animation: backAnimation-2 34s infinite;
}
.pi{
    z-index: 3;
}
.pirt{
    z-index: 3;
    margin-left: 10px;
}
.carousel-container{
    width: 60%;
    margin: auto;}

.ha{
    margin-right: 20px;
}
.burger{
background: linear-gradient(315deg, rgba(51, 123, 190, 0.2) 0%, rgba(0, 0, 0, 0) 100%, rgba(51, 123, 190, 0) 100%),
linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08));
;
  width: 50px;
  height: 50px;
border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
align-items: center;
}
.burger_items{
    background-color: white;
  width: 60%;
  height: 5px;
  border-radius: 10px;
  margin-top: 4px;
}
.burger_items_2{
    background-color: white;
  width: 40%;
  height: 5px;
  border-radius: 10px;
  margin-top: 4px;
  margin-left: 6px;
}

.card-glass{
height: 156px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 16px;
background: linear-gradient(304deg, rgba(51, 123, 190, 0.20) 0%, rgba(51, 123, 190, 0.00) 100%), rgba(255, 255, 255, 0.08);
}
.img{
    width: 50%;
    flex-shrink: 0;
    object-fit: cover;
    object-position: center;
}
.mySwiper{
margin-top: 257px;
}
.slide-1 {
    animation: animSlide-1 59s infinite cubic-bezier(1,.99,0,-.02);
}
.slide-2 {
    animation: animSlide-2 70s infinite cubic-bezier(1,.99,0,-.02);
}
.slide-3 {
    animation: animSlide-3 90s infinite cubic-bezier(1,.99,0,-.02);
}
.slide-wrapper {
    display: flex;
}
.slide-row {
    display: flex;
    margin-left: -20px;
}
.slide-col {
    padding-left: 20px;
}
.slide{
    z-index: 3;
}
.card{
    width: 310px;
    height: 224px;
    border-radius: 20px;
    padding: 20px;
    background: linear-gradient(315deg,rgba(51,123,190,.2) 0%,rgba(51,123,190,0) 100%),rgba(255,255,255,.08);
}
.animation{
    margin-top: 303px;
         overflow: hidden;
}
.container--input{
        width: 30%;
    margin: auto;
    
}
.input-table{
    background-color: none;
   color: #fff;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    margin-bottom: 10px;
}
.input{
outline: none;
    border: none;
    border-radius: 16px;
    background: linear-gradient(315deg,rgba(51,123,190,.2) 0%,rgba(51,123,190,0) 100%),rgba(255,255,255,.08);
    color: #fff;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    padding: 15px 20px;
    transition: .6s;
    width: 100%;
}
.mb-8{
    margin-bottom: 5rem;
}
.results-circule--create {
    border-radius: 50%;
    color: var(--white, #FFF);
    text-align: center;
    font-family: Inter;
    font-size: 23px;
    font-style: normal;
    font-weight: 900;
    line-height: 32px;
    letter-spacing: -.32px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--blue, #0A72D4);
    transition: .6s;
    margin: auto;
}
.results-circule{
    height: 160px;
    width: 160px;
    background-color: var(--blue, #0A72D4);
}
.h2{
    z-index: 3;
    margin-top: 240px;
}
.container--input{
    margin-top: 80px;
}
.circle-3 {
    width: 600px;
    height: 600px;
    border-radius: 1083px;
    background: #0A72D4;
    filter: blur(180px);
    position: absolute;
    top: 2000px;
    left: 10%;
    animation: backAnimation-3 34s infinite;
}
.circle-4 {
    width: 600px;
    height: 600px;
    border-radius: 1083px;
    background: #0A72D4;
    filter: blur(180px);
    position: absolute;
    top: 2800px;
    left: 80%;
    animation: backAnimation-4 34s infinite;
}
.text-white{
    z-index: 3;
}
.input{
    z-index: 3;
}

@keyframes animSlide-1 {
    0%{
        transform: translate(0,0)
    }
    50%{
        transform: translate(-500px,0)

    }
    100%{
        transform: translate(0,0)

    }
}
@keyframes animSlide-2 {
    0%{
        transform: translate(0,0)
    }
    50%{
        transform: translate(-1320px,0)

    }
    100%{
        transform: translate(0,0)

    }
}
@keyframes animSlide-3 {
    0%{
        transform: translate(0,0)
    }
    50%{
        transform: translate(-665px,0)

    }
    100%{
        transform: translate(0,0)

    }
}
@keyframes backAnimation-1 {
    0%{
        transform: translate(0,0)
    }
    50%{
        transform: translate(-500px,0)

    }
    100%{
        transform: translate(0,0)

    }
}
@keyframes backAnimation-2 {
    0%{
        transform: translate(0,0)
    }
    50%{
        transform: translate(-500px,0)

    }
    100%{
        transform: translate(0,0)

    }
}
@keyframes backAnimation-3 {
    0%{
        transform: translate(0,0)
    }
    50%{
        transform: translate(-500px,0)

    }
    100%{
        transform: translate(0,0)

    }
}
@keyframes backAnimation-4 {
    0%{
        transform: translate(0,0)
    }
    50%{
        transform: translate(-500px,0)

    }
    100%{
        transform: translate(0,0)

    }
}
@media screen and (max-width: 1024px) {
    .card{
    width: 200px;
    height: 124px;
    border-radius: 20px;
    padding: 20px;
    background: linear-gradient(315deg,rgba(51,123,190,.2) 0%,rgba(51,123,190,0) 100%),rgba(255,255,255,.08);
} 
}
@media screen and (max-width: 1024px) {
    .results-circule{
    height: 80px;
    width: 80px;
    font-size: 10px;
    font-weight: 900;
    line-height: 12px;
    background-color: var(--blue, #0A72D4);
} 
}
@media screen and (max-width: 550px) {
.pirt{
    font-size: 16px;
}
}
@media screen and (max-width: 750px) {
    .input{
outline: none;
    border: none;
    border-radius: 16px;
    background: linear-gradient(315deg,rgba(51,123,190,.2) 0%,rgba(51,123,190,0) 100%),rgba(255,255,255,.08);
    color: #fff;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    padding: 15px 20px;
    transition: .6s;
    width: 250px;
    display: flex;
    margin-left: -30px;
}
}
@media screen and (max-width: 750px) {
    .input-table{
margin-left: -30px;
}
}
@media screen and (max-width: 320px) {
    .input{
outline: none;
    border: none;
    border-radius: 16px;
    background: linear-gradient(315deg,rgba(51,123,190,.2) 0%,rgba(51,123,190,0) 100%),rgba(255,255,255,.08);
    color: #fff;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    padding: 15px 20px;
    transition: .6s;
    width: 210px;
    display: flex;
    margin-left: -60px;
}
}
@media screen and (max-width: 320px) {
    .input-table{
margin-left: -60px;
}}

</style>
