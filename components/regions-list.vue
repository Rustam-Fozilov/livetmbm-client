<template>
    <div>
        <div class="bg-white w-full h-[680px] rounded-[20px] font-tt-hoves-medium text-base">
            <div class="h-full overflow-auto">
                <div
                @click="showCamera(region.id)"
                v-for="(region, index) in regions" :key="region.id"
                :class="selectedRegion.id === region.id ? 'bg-primary-blue text-white' : ''"
                class="cursor-pointer"
                >
                    <div class="py-5 px-7">
                        {{
                            locale === 'ruz' ? region.name.ruz : locale === 'uz' ? region.name.uz : region.name.ru
                        }}
                    </div>
                    <div v-if="index !== regions.length - 1" class="h-[1px] w-full bg-black opacity-20"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'


const config = useRuntimeConfig()
const regions = ref(null)
const regionCameras = useRegionCameras()
const locale = useLocale()
const cameraLink = useCameraLink()
const allCameras = ref(null)
const selectedRegion = useSelectedRegion()
const selectedCamera = useSelectedCamera()


axios
  .get(`${config.public.serverUrl}/api/regions`)
  .then((res) => {
    regions.value = res.data
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


const showCamera = (id) => {
    selectedRegion.value = regions.value.find(region => region.id === id)
    cameraLink.value = allCameras.value.find(camera => camera.region.id === id).link
    selectedCamera.value = allCameras.value.find(camera => camera.region.id === id)
    regionCameras.value = allCameras.value.filter((item) => item.region.id === selectedRegion.value.id)
}

</script>