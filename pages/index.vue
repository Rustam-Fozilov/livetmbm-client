<template>
  <div>
    <div>
      <div>
        <the-navbar />
      </div>

      <div class="container mt-10 flex justify-between gap-5 lg:flex-col">
        <div class="w-1/4 lg:order-2 lg:w-full order-1">
          <regions-list :regions="regions"/>
        </div>

        <div class="w-3/4 lg:order-1 lg:w-full order-2">
          <video-frame :videoLink="cameraLink" />
        </div>
      </div>

      <div>
        <the-footer />
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';


const config = useRuntimeConfig()
const cameraLink = useCameraLink()
const selectedCamera = useSelectedCamera()


if (cameraLink.value === null) {
  await axios
  .get(`${config.public.serverUrl}/api/cameras`)
  .then((res) => {
    cameraLink.value = res.data[0].link
    selectedCamera.value = res.data[0]
  })
  .catch((err) => {
    console.log(err)
  })
}



useHead({
  title: "Тиббиёт ва фармацевтика ходимларининг малакасини баҳолаш маркази",
  meta: [
    {
      httpEquiv: 'Content-Security-Policy',
      content: 'upgrade-insecure-requests'
    }
  ]
})

</script>