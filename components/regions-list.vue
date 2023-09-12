<template>
    <div>
        <div class="bg-white w-full h-[680px] rounded-[20px] font-tt-hoves-medium text-base">
            <div class="h-full overflow-auto">
                <div
                @click="showCamera(region.id)"
                v-for="(region, index) in data.regions" :key="region.id"
                :class="selectedRegion.id === region.id ? 'bg-primary-blue text-white' : ''"
                class="cursor-pointer"
                >
                    <div class="py-5 px-7">
                        {{
                            locale === 'ruz' ? region.name.ruz : locale === 'uz' ? region.name.uz : region.name.ru
                        }}
                    </div>
                    <div v-if="index !== data.regions.length - 1" class="h-[1px] w-full bg-black opacity-20"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import data from '../data/data.json'


const locale = useLocale()
const cameraLink = useCameraLink()
const cameraName = useCameraName()
const selectedRegion = useSelectedRegion()
const selectedCameraId = useSelectedCameraId()


const showCamera = (id) => {
    selectedRegion.value = data.regions.find(region => region.id === id)
    cameraLink.value = data.regions.find(region => region.id === id).cameras[0].link
    cameraName.value = data.regions.find(region => region.id === id).cameras[0].name
    selectedCameraId.value = data.regions.find(region => region.id === id).cameras[0].id
}

</script>