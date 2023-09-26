<template>
    <div>
      <div>
        <div>
          <the-navbar />
        </div>
  
        <div class="container mt-10 flex justify-between gap-5 lg:flex-col">
          <div class="w-1/4 lg:order-2 lg:w-full order-1">
            <regions-list />
          </div>
  
          <div class="w-3/4 lg:order-1 lg:w-full order-2">
            <video-frame :videoLink="cameraLink" :selectedRegion="selectedRegion" />
          </div>
        </div>
  
        <div>
          <the-footer />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>

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