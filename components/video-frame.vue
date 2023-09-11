<template>
    <div>
        <div class="font-tt-hoves-medium text-base">
            {{ cameraName }}
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

        <!-- <div id="video-pagination" class="w-full mt-2 flex justify-center sm:-mt-24">
            <div class="flex gap-6 items-center">
                <div @click="gotoPrevCamera" class="cursor-pointer transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" fill="none">
                    <path opacity="1" d="M0.363604 6.3636C0.0121327 6.71507 0.0121326 7.28492 0.363604 7.63639L6.09117 13.364C6.44264 13.7154 7.01249 13.7154 7.36396 13.364C7.71543 13.0125 7.71543 12.4426 7.36396 12.0912L2.27279 7L7.36396 1.90883C7.71543 1.55736 7.71543 0.98751 7.36396 0.636038C7.01249 0.284566 6.44264 0.284566 6.09117 0.636038L0.363604 6.3636ZM19 6.1L1 6.1L1 7.9L19 7.9L19 6.1Z" fill="black"/>
                    </svg>
                </div>
                <div @click="changeCameraLink(camera.id)" v-for="camera in selectedRegion.cameras" :class="camera.id === selectedCameraId ? 'bg-primary-blue text-white' : 'bg-soft-white'" class="w-10 h-10 flex items-center justify-center text-base rounded-full cursor-pointer font-tt-hoves-medium">
                    {{ camera.id }}
                </div>
                <div @click="gotoNextCamera" class="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" fill="none">
                    <path opacity="1" d="M18.6364 7.6364C18.9879 7.28492 18.9879 6.71508 18.6364 6.3636L12.9088 0.636039C12.5574 0.284567 11.9875 0.284567 11.636 0.636039C11.2846 0.987511 11.2846 1.55736 11.636 1.90883L16.7272 7L11.636 12.0912C11.2846 12.4426 11.2846 13.0125 11.636 13.364C11.9875 13.7154 12.5574 13.7154 12.9088 13.364L18.6364 7.6364ZM0 7.9L18 7.9V6.1L0 6.1L0 7.9Z" fill="black"/>
                    </svg>
                </div>
            </div>
        </div> -->

        <div id="video-links" class="my-2">
            <div class="flex gap-5 justify-center">

                <div class="w-24 h-auto" v-for="camera in selectedRegion.cameras">
                    <div @click="changeCameraLink(camera.id)" class=" w-24 h-14 cursor-pointer" :class="camera.id === selectedCameraId ? 'opacity-50' : ''">
                        <img class="w-full h-full object-cover border-2" src="../assets/images/cover.png" alt="video poster">
                    </div>
                </div>
                
            </div>
        </div>

    </div>
</template>

<script setup>


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


const gotoNextCamera = () => {
    const currentCameraIndex = props.selectedRegion.cameras.findIndex(camera => camera.id === selectedCameraId.value)
    if (currentCameraIndex === props.selectedRegion.cameras.length - 1) {
        changeCameraLink(props.selectedRegion.cameras[0].id)
    } else {
        changeCameraLink(props.selectedRegion.cameras[currentCameraIndex + 1].id)
    }
}


const gotoPrevCamera = () => {
    const currentCameraIndex = props.selectedRegion.cameras.findIndex(camera => camera.id === selectedCameraId.value)
    if (currentCameraIndex === 0) {
        changeCameraLink(props.selectedRegion.cameras[props.selectedRegion.cameras.length - 1].id)
    } else {
        changeCameraLink(props.selectedRegion.cameras[currentCameraIndex - 1].id)
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

/* 
@media only screen and (max-width: 1400px) {
    #frame-area {
        height: 530px;
    }
}

@media only screen and (max-width: 1280px) {
    #frame-area {
        height: 480px;
    }
}

@media only screen and (max-width: 1150px) {
    #frame-area {
        height: 430px;
    }
}

@media only screen and (max-width: 850px) {
    #frame-area {
        height: 450px;
    }
}

@media only screen and (max-width: 680px) {
    #frame-area {
        height: 350px;
    }
}

@media only screen and (max-width: 550px) {
    #frame-area {
        height: 300px;
    }
}

@media only screen and (max-width: 480px) {
    #frame-area {
        height: 270px;
    }
}

@media only screen and (max-width: 420px) {
    #frame-area {
        height: 230px;
    }
} */

</style>