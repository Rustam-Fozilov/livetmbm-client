<template>
    <div>
        <div class="flex justify-between">
            <div class="font-tt-hoves-medium text-base">
                {{ locale === 'ruz' ? cameraName.ruz : locale === 'uz' ? cameraName.uz : cameraName.ru }}
            </div>
            <div @click="toggleCamera">
                <label class="switch mb-3">
                    <input type="checkbox">
                    <span class="slider round"></span>
                </label>
            </div>
        </div>
        <div id="frame-area" class="h-[650px] w-full lg-frame-height">
            <iframe
                scrolling="no"
                width="100%"
                height="100%"
                :src="videoLink"
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

                <div class="w-24 h-auto" v-for="camera in selectedRegion.cameras" :key="camera.id">
                    <div @click="changeCameraLink(camera.id)" class=" w-24 h-14 cursor-pointer" :class="camera.id === selectedCameraId ? 'opacity-50' : ''">
                        <img class="w-full h-full object-cover border-2" src="../assets/images/cover.png" alt="video poster">
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script setup>
import data from '~/data/data.json'
// import www from '~/data/www.json'
// import axios from 'axios'
// import www from '~/helpers/help'

// const { info } = www()
// console.log(info)

// const { data } = await useFetch('/api/jsonData')
// console.log(data)

const regions = ref(null)


onMounted(() => {
    console.log('mounted')
    
    axios
    .patch('/_nuxt/data/data.json', {
        body: JSON.stringify(www)
    })
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    })
})



const locale = useLocale()
const cameraLink = useCameraLink()
const cameraName = useCameraName()
const selectedCameraId = useSelectedCameraId()


const props = defineProps({
    videoLink: {
        type: String,
        required: true,
    },
    selectedRegion: {
        required: true,
    }
})


const changeCameraLink = (id) => {
    cameraLink.value = props.selectedRegion.cameras.find(camera => camera.id === id).link
    cameraName.value = props.selectedRegion.cameras.find(camera => camera.id === id).name
    selectedCameraId.value = id

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
    console.log('toggle camera');
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