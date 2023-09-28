<template>
    <div>
        <div class="font-tt-hoves-medium text-base">
            {{ locale === 'ruz' ? selectedCamera.name.ruz : locale === 'uz' ? selectedCamera.name.uz : selectedCamera.name.ru }}
        </div>
        <div id="frame-area" class="h-[650px] w-full lg-frame-height">
            <iframe
                scrolling="no"
                width="100%"
                height="100%"
                :src="selectedCamera.is_active ? videoLink : ''"
                frameborder="0"
                allowfullscreen
                allow="autoplay"
                autoplay=1
                id="embedded-iframe"
                >
            </iframe>
        </div>

        <div id="video-links" class="my-2">
            <div class="flex gap-5 justify-center">

                <div class="w-24 h-auto" v-for="camera in regionCameras" :key="camera.id">
                    <div @click="changeCameraLink(camera.id)" class=" w-24 h-14 cursor-pointer" :class="camera.id === selectedCamera.id ? 'opacity-50' : ''">
                        <img class="w-full h-full object-cover border-2" src="../assets/images/cover.png" alt="video poster">
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script setup>
import axios from 'axios'


const regionCameras = useRegionCameras()
const config = useRuntimeConfig()
const allCameras = ref(null)
const selectedCamera = useSelectedCamera()
const selectedRegion = useSelectedRegion()
const locale = useLocale()
const cameraLink = useCameraLink()


const props = defineProps({
    videoLink: {
        type: String,
        required: true,
    }
})


onUpdated(() => {
  selectedCamera.value = selectedCamera.value
  selectedRegion.value = selectedRegion.value
  cameraLink.value = cameraLink.value
  regionCameras.value = regionCameras.value
})


await axios
  .get(`${config.public.serverUrl}/api/regions`)
  .then((res) => {
    selectedRegion.value = res.data[0]
  })
  .catch((err) => {
    console.log(err)
  })


await axios
  .get(`${config.public.serverUrl}/api/cameras`)
  .then((res) => {
    allCameras.value = res.data
  })
  .catch((err) => {
    console.log(err)
  })


regionCameras.value = allCameras.value.filter((item) => item.region.id === selectedRegion.value.id)


const changeCameraLink = (id) => {
    cameraLink.value = regionCameras.value.find((item) => item.id === id).link
    selectedCamera.value = regionCameras.value.find((item) => item.id === id)
    

    const element = document.getElementById('frame-area')

    if(element.classList.contains('frame-animation')) {
        element.classList.remove('frame-animation')
        void element.offsetWidth
        element.classList.add('frame-animation')
    } else {
        element.classList.add('frame-animation')
    }
}

</script>


<style>

/* @keyframes slideInBotoom {
  0% {
    transform: scale(0.9)
  }
  100% {
    transform: scale(1)
  }
} */

@keyframes slideInBotoom {
  0% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}

.frame-animation {
    animation: slideInBotoom 0.35s ease-in-out;
}



@media only screen and (max-width: 1530px) {
    #frame-area {
        height: 600px;
    }
}

</style>