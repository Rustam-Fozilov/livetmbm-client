<template>
    <div>
        <div class="font-tt-hoves-medium text-base">
            {{ locale === 'ruz' ? selectedCamera.name.ruz : locale === 'uz' ? selectedCamera.name.uz : selectedCamera.name.ru }}
        </div>
        <div @click="toggleCamera">
            <label class="switch mb-3">
                <input id="camera-switch" type="checkbox">
                <span class="slider round"></span>
            </label>
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


onMounted(() => {
    const cameraSwitch = document.getElementById('camera-switch')
    cameraSwitch.checked = selectedCamera.value.is_active
})


onUpdated(() => {
  selectedCamera.value = selectedCamera.value
  selectedRegion.value = selectedRegion.value
  cameraLink.value = cameraLink.value
  regionCameras.value = regionCameras.value

  const cameraSwitch = document.getElementById('camera-switch')
  cameraSwitch.checked = selectedCamera.value.is_active
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


const toggleCamera = () => {
    const cameraSwitch = document.getElementById('camera-switch')
    cameraSwitch.checked = !cameraSwitch.checked

    axios
        .post(`${config.public.serverUrl}/api/cameras/${selectedCamera.value.id}/toggle`, {
            is_active: cameraSwitch.checked
        })
        .then((res) => {
            selectedCamera.value.is_active = cameraSwitch.checked
        })
        .catch((err) => {
            console.log(err)
        })
}

</script>


<style>

.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

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

.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}




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