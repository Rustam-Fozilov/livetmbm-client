<template>
    <div>
        <div v-if="authToken">
            <div class="container flex items-center justify-start font-tt-hoves-medium text-[32px] mt-7">
                <div class="w-1/4 flex justify-between items-center md:flex-col md:items-start md:gap-3">
                    <div>
                        Admin panel
                    </div>
                    <div class="flex gap-5 items-center">
                        <div @click="toggleAllCameras">
                            <label class="switch mt-5">
                                <input id="camera-switch-all" type="checkbox">
                                <span class="slider round"></span>
                            </label>
                        </div>
                        <div v-if="isUserSuperAdmin" @click="openAddUserModal" class="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                            <path d="M9.65385 9.65384C12.0435 9.65384 13.9808 7.71661 13.9808 5.32692C13.9808 2.93723 12.0435 1 9.65385 1C7.26416 1 5.32693 2.93723 5.32693 5.32692C5.32693 7.71661 7.26416 9.65384 9.65385 9.65384Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.5 24L1.00003 24.0769V21.1923C1.01534 19.7265 1.40191 18.2885 2.12363 17.0126C2.84535 15.7368 3.87868 14.6646 5.12709 13.8964C6.3755 13.1281 7.79827 12.6888 9.26249 12.6195C13.5 12.6195 15 15 16 16M20.2308 15.4615V25M15.4616 20.2308H25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="cursor-pointer" @click="openAddCameraModal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M17.7143 11.1201C19.3814 11.1201 20.9802 11.7986 22.159 13.0063C23.3378 14.214 24 15.852 24 17.56C24 19.268 23.3378 20.9061 22.159 22.1138C20.9802 23.3215 19.3814 24 17.7143 24C16.0472 24 14.4484 23.3215 13.2696 22.1138C12.0908 20.9061 11.4286 19.268 11.4286 17.56C11.4286 15.852 12.0908 14.214 13.2696 13.0063C14.4484 11.7986 16.0472 11.1201 17.7143 11.1201ZM17.7143 13.4619L17.6114 13.4712C17.4973 13.4926 17.3921 13.5491 17.3101 13.6332C17.228 13.7173 17.1729 13.825 17.152 13.9419L17.1429 14.0473V16.9746H14.2834L14.1806 16.9851C14.0664 17.0065 13.9613 17.063 13.8792 17.1471C13.7971 17.2311 13.742 17.3388 13.7211 17.4558L13.712 17.5612L13.7211 17.6666C13.742 17.7836 13.7971 17.8913 13.8792 17.9753C13.9613 18.0594 14.0664 18.1159 14.1806 18.1373L14.2834 18.1467H17.1429V21.0774L17.152 21.1828C17.1729 21.2998 17.228 21.4075 17.3101 21.4916C17.3921 21.5757 17.4973 21.6321 17.6114 21.6535L17.7143 21.6629L17.8171 21.6535C17.9313 21.6321 18.0364 21.5757 18.1185 21.4916C18.2006 21.4075 18.2557 21.2998 18.2766 21.1828L18.2857 21.0774V18.1455H21.1474L21.2503 18.1373C21.3645 18.1159 21.4696 18.0594 21.5517 17.9753C21.6337 17.8913 21.6889 17.7836 21.7097 17.6666L21.7189 17.5612L21.7097 17.4558C21.6888 17.3387 21.6335 17.2309 21.5512 17.1468C21.4689 17.0627 21.3635 17.0063 21.2491 16.9851L21.1463 16.9758H18.2857V14.0485L18.2766 13.9431C18.2559 13.8259 18.2009 13.718 18.1188 13.6337C18.0367 13.5493 17.9315 13.4927 17.8171 13.4712L17.7143 13.4619ZM13.6286 0.00117082C14.0766 0.00113401 14.5169 0.121042 14.9058 0.349014C15.2947 0.576986 15.6187 0.90511 15.8457 1.30087L16.776 2.92492H19.1429C20.1277 2.92492 21.0723 3.32568 21.7688 4.03909C22.4654 4.75249 22.8568 5.72012 22.8571 6.72918V12.0685C22.3474 11.567 21.7705 11.1424 21.144 10.8074L21.1429 6.72918C21.1429 6.18573 20.9321 5.66454 20.5571 5.28026C20.182 4.89598 19.6733 4.6801 19.1429 4.6801H16.2857C16.1363 4.68018 15.9895 4.64024 15.8598 4.56425C15.7301 4.48825 15.622 4.37884 15.5463 4.24687L14.3669 2.18959C14.2913 2.05778 14.1834 1.94848 14.0539 1.8725C13.9244 1.79651 13.7778 1.75648 13.6286 1.75635H9.28229C9.15722 1.75646 9.03369 1.7846 8.92036 1.83881C8.80704 1.89302 8.70666 1.97198 8.62629 2.07016L8.552 2.17554L7.30286 4.26092C7.22626 4.38892 7.11891 4.49467 6.99106 4.56806C6.8632 4.64144 6.71912 4.68002 6.57257 4.6801H3.71543C3.45269 4.67995 3.19249 4.73283 2.94971 4.83574C2.70693 4.93865 2.48631 5.08956 2.30048 5.27985C2.11464 5.47014 1.96722 5.69608 1.86664 5.94476C1.76606 6.19344 1.71429 6.45999 1.71429 6.72918V17.8528C1.71429 18.9839 2.61029 19.9018 3.71429 19.9018H10.6434C10.8411 20.5259 11.1143 21.1161 11.4537 21.6582H3.71429C2.7292 21.6582 1.78445 21.2573 1.08789 20.5436C0.391325 19.83 0 18.862 0 17.8528V6.72918C0 5.71992 0.391325 4.75199 1.08789 4.03833C1.78445 3.32467 2.7292 2.92374 3.71429 2.92374H6.09143L7.09143 1.25638C7.32136 0.87258 7.64347 0.555572 8.02702 0.335621C8.41057 0.11567 8.84274 0.000119118 9.28229 0L13.6286 0.00117082ZM11.4286 6.43645C12.5158 6.43638 13.5752 6.78919 14.4546 7.44425C15.334 8.09932 15.9882 9.02297 16.3234 10.0826C15.752 10.1939 15.2034 10.3719 14.6857 10.6084C14.4324 9.81328 13.9105 9.13691 13.2138 8.70099C12.5171 8.26508 11.6914 8.09824 10.8854 8.23052C10.0793 8.3628 9.34577 8.78549 8.81682 9.42254C8.28787 10.0596 7.99822 10.8691 8 11.7055C8 13.3799 9.14286 14.7791 10.672 15.1328C10.4891 15.6893 10.3702 16.2657 10.3177 16.8505C9.0833 16.567 7.99413 15.8274 7.25836 14.7731C6.5226 13.7188 6.19183 12.4236 6.32928 11.1352C6.46673 9.8468 7.06276 8.65546 8.00345 7.78887C8.94414 6.92228 10.1635 6.44122 11.4286 6.43763V6.43645Z" fill="black"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div class="container mt-10 flex justify-between gap-5 lg:flex-col">
                    <div class="w-1/4 lg:order-2 lg:w-full order-1">
                        <regions-list/>
                    </div>
            
                    <div class="w-3/4 lg:order-1 lg:w-full order-2">
                        <admin-video-frame :videoLink="cameraLink" />
                    </div>
                </div>
        
                <div>
                    <the-footer />
                </div>
            </div>

            <dialog id="add-user-dialog" class="outline-none">
                <div class="py-7 px-12 flex flex-col gap-5">
                    <div v-if="error">
                        <div class="text-red-500 font-tt-hoves-medium">
                            Хатолик юз берди
                        </div>
                    </div>
                    <div class="w-full flex gap-5 justify-between items-center font-tt-hoves-medium text-base">
                        <div>
                            Янги фойдаланувчи қўшиш
                        </div>
                        <div  @click="closeAddUserModal" class="opacity-50 hover:opacity-100 cursor-pointer transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <path opacity="1" d="M16.1237 15.2595L16.2474 15.1358L16.1238 15.0121L9.62119 8.5L16.1238 1.98793L16.2474 1.86419L16.1237 1.74053L15.2595 0.876256L15.1358 0.752602L15.0121 0.876167L8.5 7.37881L1.98793 0.876167L1.86419 0.752602L1.74053 0.876256L0.876256 1.74053L0.752602 1.86419L0.876167 1.98793L7.37881 8.5L0.876167 15.0121L0.752602 15.1358L0.876256 15.2595L1.74053 16.1237L1.86419 16.2474L1.98793 16.1238L8.5 9.62119L15.0121 16.1238L15.1358 16.2474L15.2595 16.1237L16.1237 15.2595Z" fill="#808080" stroke="#808080" stroke-width="0.35"/>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <input autocomplete="off" required v-model="name" type="text" placeholder="name" class="w-full bg-soft-white border border-black border-opacity-20 px-3 py-2 outline-none">
                    </div>
                    <div>
                        <input autocomplete="off" required v-model="email" type="text" placeholder="email" class="w-full bg-soft-white border border-black border-opacity-20 px-3 py-2 outline-none">
                    </div>
                    <div>
                        <input autocomplete="off" required v-model="password" type="password" placeholder="password" class="w-full bg-soft-white border border-black border-opacity-20 px-3 py-2 outline-none">
                    </div>
                    <div>
                        <input @click="addUser" value="OK " type="submit" class="w-full bg-black text-white border px-3 py-2 outline-none cursor-pointer">
                    </div>
                    <div v-if="isUserAdded" class="text-green-500 font-tt-hoves-medium">
                        Фойдаланувчи муваффақиятли қўшилди
                    </div>
                </div>
            </dialog>

            <dialog id="add-camera-dialog" class="outline-none">
                <div class="py-7 px-12 flex flex-col gap-5">
                    <div v-if="error_camera">
                        <div class="text-red-500 font-tt-hoves-medium">
                            Хатолик юз берди
                        </div>
                    </div>
                    <div class="w-full flex gap-5 justify-between items-center font-tt-hoves-medium text-base">
                        <div>
                            Янги камера қўшиш
                        </div>
                        <div  @click="closeAddCameraModal" class="opacity-50 hover:opacity-100 cursor-pointer transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <path opacity="1" d="M16.1237 15.2595L16.2474 15.1358L16.1238 15.0121L9.62119 8.5L16.1238 1.98793L16.2474 1.86419L16.1237 1.74053L15.2595 0.876256L15.1358 0.752602L15.0121 0.876167L8.5 7.37881L1.98793 0.876167L1.86419 0.752602L1.74053 0.876256L0.876256 1.74053L0.752602 1.86419L0.876167 1.98793L7.37881 8.5L0.876167 15.0121L0.752602 15.1358L0.876256 15.2595L1.74053 16.1237L1.86419 16.2474L1.98793 16.1238L8.5 9.62119L15.0121 16.1238L15.1358 16.2474L15.2595 16.1237L16.1237 15.2595Z" fill="#808080" stroke="#808080" stroke-width="0.35"/>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <input autocomplete="off" required v-model="cameraNameRuz" type="text" placeholder="name_ruz" class="w-full bg-soft-white border border-black border-opacity-20 px-3 py-2 outline-none">
                    </div>
                    <div>
                        <input autocomplete="off" required v-model="cameraNameUz" type="text" placeholder="name_uz" class="w-full bg-soft-white border border-black border-opacity-20 px-3 py-2 outline-none">
                    </div>
                    <div>
                        <input autocomplete="off" required v-model="cameraNameRu" type="text" placeholder="name_ru" class="w-full bg-soft-white border border-black border-opacity-20 px-3 py-2 outline-none">
                    </div>
                    <div>
                        <input autocomplete="off" required v-model="newCameraLink" type="text" placeholder="link" class="w-full bg-soft-white border border-black border-opacity-20 px-3 py-2 outline-none">
                    </div>
                    <div>
                        <select v-model="cameraRegionId" name="" id="" class="border border-black outline-none py-1 px-3">
                            <option v-for="region in allRegions" :value="region.id">
                                {{ region.name.ruz }}
                            </option>
                        </select>
                    </div>
                    <div>
                        <input @click="addCamera" value="OK " type="submit" class="w-full bg-black text-white border px-3 py-2 outline-none cursor-pointer">
                    </div>
                    <div v-if="isCameraAdded" class="text-green-500 font-tt-hoves-medium transition">
                        Камера муваффақиятли қўшилди
                    </div>
                </div>
            </dialog>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'


const authToken = useAuthToken()
const router = useRouter()
const config = useRuntimeConfig()
const cameraLink = useCameraLink()
const selectedCamera = useSelectedCamera()
const isUserSuperAdmin = ref(false)
const error = ref(false)
const error_camera = ref(false)
const isUserAdded = ref(false)
const isCameraAdded = ref(false)
const allRegions = ref(null)
const allCameras = ref(null)


const name = ref('')
const email = ref('')
const password = ref('')


const cameraNameRuz = ref('')
const cameraNameUz = ref('')
const cameraNameRu = ref('')
const newCameraLink = ref('')
const cameraRegionId = ref('') 


onMounted( async () => {
    await axios
        .get(`${config.public.serverUrl}/api/cameras`)
        .then((res) => {
            allCameras.value = res.data
        })
        .catch((err) => {
            console.log(err)
        })
        
        allCameras.value.forEach(element => {
            if (!element.is_active) {
                document.getElementById('camera-switch-all').checked = false
            } else {
                document.getElementById('camera-switch-all').checked = true
            }
        });
})


onUpdated( async () => {
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
})


if (authToken.value === null) {
    router.push('/admin/login')
}


axios
    .get(`${config.public.serverUrl}/api/users`, {
        headers: {
            "Authorization": `Bearer ${authToken.value}`
        }
    })
    .then((res) => {
        isUserSuperAdmin.value = res.data.roles[0].id === 1
    })


axios
    .get(`${config.public.serverUrl}/api/regions`)
    .then((res) => {
        allRegions.value = res.data
    })
    .catch((err) => {
        console.log(err)
    })


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


const openAddUserModal = () => {
    const dialog = document.getElementById('add-user-dialog')
    dialog.showModal()
}

const closeAddUserModal = () => {
    const dialog = document.getElementById('add-user-dialog')
    dialog.close()
}


const openAddCameraModal = () => {
    const dialog = document.getElementById('add-camera-dialog')
    dialog.showModal()
}

const closeAddCameraModal = () => {
    const dialog = document.getElementById('add-camera-dialog')
    dialog.close()
}


const addUser = () => {
    axios
        .post(`${config.public.serverUrl}/api/users`,
            {
                name: name.value,
                email: email.value,
                password: password.value
            },
            {
                headers: {
                    "Authorization": `Bearer ${authToken.value}`,
                    "Content-Type": "application/json"
                }
            }
        )
        .then((res) => {
            isUserAdded.value = true
            error.value = false
            setTimeout(() => {
                isUserAdded.value = false
            }, 1500)
        })
        .catch((err) => {
            console.log(err)
            error.value = true
            isUserAdded.value = false
            setTimeout(() => {
                error.value = false
            }, 1500)
        })
}


const addCamera = () => {
    axios
        .post(`${config.public.serverUrl}/api/cameras`,
            {
                name: {
                    ruz: cameraNameRuz.value,
                    uz: cameraNameUz.value,
                    ru: cameraNameRu.value
                },
                region_id: cameraRegionId.value,
                link: newCameraLink.value
            }
        )
        .then((res) => {
            isCameraAdded.value = true
            error_camera.value = false
            setTimeout(() => {
                isCameraAdded.value = false
            }, 1500)
        })
        .catch((err) => {
            console.log(err)
            error_camera.value = true
            isCameraAdded.value = false
            setTimeout(() => {
                error_camera.value = false
            }, 1500)
        })
}


const toggleAllCameras = () => {
    const cameraSwitch = document.getElementById('camera-switch-all')
    cameraSwitch.checked = !cameraSwitch.checked

    axios
        .post(`${config.public.serverUrl}/api/cameras/toggle-all`, {
            toggle: cameraSwitch.checked ? 'on' : 'off'
        })
        .then((res) => {
            selectedCamera.value.is_active = cameraSwitch.checked
            console.log(res);
        })
        .catch((err) => {
            console.log(err)
        })
}


</script>