<template>
    <div>
        <dialog id="edit-camera-dialog" class="outline-none">
            <div class="py-7 px-12 flex flex-col gap-5">
                <div v-if="error">
                        <div class="text-red-500 font-tt-hoves-medium">
                            Хатолик юз берди
                        </div>
                    </div>
                    <div class="w-full flex gap-5 justify-between items-center font-tt-hoves-medium text-base">
                        <div>
                            Камерани янгилаш
                        </div>
                        <div  @click="closeEditCameraModal" class="opacity-50 hover:opacity-100 cursor-pointer transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <path opacity="1" d="M16.1237 15.2595L16.2474 15.1358L16.1238 15.0121L9.62119 8.5L16.1238 1.98793L16.2474 1.86419L16.1237 1.74053L15.2595 0.876256L15.1358 0.752602L15.0121 0.876167L8.5 7.37881L1.98793 0.876167L1.86419 0.752602L1.74053 0.876256L0.876256 1.74053L0.752602 1.86419L0.876167 1.98793L7.37881 8.5L0.876167 15.0121L0.752602 15.1358L0.876256 15.2595L1.74053 16.1237L1.86419 16.2474L1.98793 16.1238L8.5 9.62119L15.0121 16.1238L15.1358 16.2474L15.2595 16.1237L16.1237 15.2595Z" fill="#808080" stroke="#808080" stroke-width="0.35"/>
                            </svg>
                        </div>
                    </div>
                <div>
                    <input required autocomplete="off" v-model="name_ruz" type="text" placeholder="name ruz" class="w-full bg-soft-white border border-black border-opacity-20 px-3 py-2 outline-none">
                </div>
                <div>
                    <input required autocomplete="off" v-model="name_uz" type="text" placeholder="name uz" class="w-full bg-soft-white border border-black border-opacity-20 px-3 py-2 outline-none">
                </div>
                <div>
                    <input required autocomplete="off" v-model="name_ru" type="text" placeholder="name ru" class="w-full bg-soft-white border border-black border-opacity-20 px-3 py-2 outline-none">
                </div>
                <div>
                    <input required autocomplete="off" v-model="link" type="text" placeholder="link" class="w-full bg-soft-white border border-black border-opacity-20 px-3 py-2 outline-none">
                </div>
                <div>
                    <select v-model="cameraRegionId" name="" id="" class="border border-black outline-none py-1 px-3">
                        <option v-for="region in allRegions" :value="region.id">
                            {{ region.name.ruz }}
                        </option>
                    </select>
                </div>
                <div>
                    <input @click="updateCamera" value="OK " type="submit" class="w-full bg-black text-white border px-3 py-2 outline-none cursor-pointer">
                </div>
                <div v-if="isCameraUpdated" class="text-green-500">
                    Камера муваффақиятли янгиланди
                </div>
            </div>
        </dialog>
    </div>
</template>

<script setup>
import axios from 'axios'


const error = ref(false)
const name_ruz = ref('')
const name_uz = ref('')
const name_ru = ref('')
const link = ref('')
const cameraRegionId = ref('')
const allRegions = ref(null)
const isCameraUpdated = ref(false)
const selectedCamera = useSelectedCamera()
const config = useRuntimeConfig()


axios
    .get(`${config.public.serverUrl}/api/regions`)
    .then((res) => {
        allRegions.value = res.data
        console.log(allRegions.value);
    })
    .catch((err) => {
        console.log(err)
    })


const closeEditCameraModal = () => {
    const dialog = document.getElementById('edit-camera-dialog')
    dialog.close()
}


const updateCamera = () => {
    axios
        .put(`${config.public.serverUrl}/api/cameras/${selectedCamera.value.id}`, {
            name: {
                ruz: name_ruz.value,
                uz: name_uz.value,
                ru: name_ru.value,
            },
            link: link.value,
            region_id: cameraRegionId.value,
        })
        .then((res) => {
            isCameraUpdated.value = true
            setTimeout(() => {
                isCameraUpdated.value = false
            }, 3000)
        })
        .catch((err) => {
            error.value = true
            setTimeout(() => {
                error.value = false
            }, 3000)
        })
}

</script>