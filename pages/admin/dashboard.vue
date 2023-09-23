<template>
    <div>
        <div class=" flex justify-center font-tt-hoves-medium text-[32px] mt-5">
            Admin panel
        </div>

        <div class="container mt-12">
            <div class="flex flex-wrap gap-7">
                <div class="flex flex-col" v-for="region in data.regions" :key="region.id">
                    <div class="flex flex-col gap-5">
                        <div class=" font-tt-hoves-medium text-base">{{ region.name.ruz }}</div>
                        <div class="flex gap-7">
                            <div v-for="camera in region.cameras" :key="camera.id" class="flex flex-col items-center gap-3 snap-center">
                                <div id="frame-area" class="m-0 overflow-y-hidden align-middle object-cover w-[350px] h-[210px] flex lg-frame-height snap-center text-center overflow-auto">
                                    <iframe
                                        scrolling="middle"
                                        class="my-auto mx-0 block"
                                        width="100%"
                                        height="100%"
                                        :src="camera.link"
                                        frameborder="0"
                                        allowfullscreen
                                        allow="autoplay"
                                        autoplay=1
                                        id="embedded-iframe"
                                        style="scroll-snap-align: center; overflow: auto;"
                                        >
                                    </iframe>
                                </div>
                                <div>{{ camera.name.ruz }}</div>
                                <label class="switch mb-3">
                                    <input type="checkbox">
                                    <span class="slider round"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
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


function scrollToCenter() {
    const container = document.getElementById('frame-area');
    const content = document.getElementById('embedded-iframe');
    
    // Calculate the center position of the content
    const center = (content.scrollHeight - container.clientHeight) / 2;
    
    // Set the scrollTop property of the container to scroll to the center
    container.scrollTop = center;
}

// Call the scrollToCenter function when the page loads or as needed
onMounted(() => {
    scrollToCenter()
})


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