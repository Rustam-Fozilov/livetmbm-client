<template>
  <div>
      <div class=" flex justify-center font-tt-hoves-medium text-[32px] mt-5">
          Admin panel
      </div>

      <div>
        <div class="container mt-10 flex justify-between gap-5 lg:flex-col">
          <div class="w-1/4 lg:order-2 lg:w-full order-1">
            <regions-list />
          </div>
  
          <div class="w-3/4 lg:order-1 lg:w-full order-2">
            <admin-video-frame :videoLink="cameraLink" :selectedRegion="selectedRegion" />
          </div>
        </div>
  
        <div>
          <the-footer />
        </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import data from '~/data/data.json'


const router = useRouter()
const isLoggeedIn = useIsLoggedIn()


if (isLoggeedIn.value === false) {
  router.push('/admin/login')
}


const cameraLink = useCameraLink()
const selectedRegion = useSelectedRegion()

const head = {
title: "Тиббиёт ва фармацевтика ходимларининг малакасини баҳолаш маркази",
meta: [
  {
    httpEquiv: 'Content-Security-Policy',
    content: 'upgrade-insecure-requests'
  }
]
}


</script>

<style>

/* The switch - the box around the slider */
.switch {
position: relative;
display: inline-block;
width: 60px;
height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
opacity: 0;
width: 0;
height: 0;
}

/* The slider */
.slider {
position: absolute;
cursor: pointer;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: #ccc;
-webkit-transition: .4s;
transition: .4s;
}

.slider:before {
position: absolute;
content: "";
height: 26px;
width: 26px;
left: 4px;
bottom: 4px;
background-color: white;
-webkit-transition: .4s;
transition: .4s;
}

input:checked + .slider {
background-color: #2196F3;
}

input:focus + .slider {
box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
-webkit-transform: translateX(26px);
-ms-transform: translateX(26px);
transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
border-radius: 34px;
}

.slider.round:before {
border-radius: 50%;
}

</style>