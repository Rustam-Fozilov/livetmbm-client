<template>
    <div>
        <dialog id="delete-camera-dialog" class="outline-none">
            <div class="py-7 px-12 flex flex-col gap-5 justify-center items-center">
                <div class="text-base font-tt-hoves-medium">
                    Чиндан ҳам шу камерани ўчиришни истайсизми
                </div>
                <div>
                    <button @click="closeDeleteCameraModal" class="mr-5 font-tt-hoves-regular">Йўқ</button>
                    <button @click="deleteCamera" class="px-4 py-1 bg-red-500 text-white font-tt-hoves-regular">Ҳа</button>
                </div>
            </div>
        </dialog>
    </div>
</template>

<script setup>
import axios from 'axios'
import { useRouter } from 'vue-router';


const selectedCamera = useSelectedCamera()
const config = useRuntimeConfig()
const router = useRouter()


const closeDeleteCameraModal = () => {
    const dialog = document.getElementById('delete-camera-dialog')
    dialog.close()
}


const deleteCamera = () => {
    axios
        .delete(`${config.public.serverUrl}/api/cameras/${selectedCamera.value.id}`)
        .then((res) => {
            console.log(res.data)
            closeDeleteCameraModal()
            router.push('/admin/dashboard')
        })
        .catch((err) => {
            console.log(err)
        })
}

</script>