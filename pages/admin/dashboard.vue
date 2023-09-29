<template>
    <div>
        <div v-if="authToken">
            <div class="container flex items-center justify-start font-tt-hoves-medium text-[32px] mt-7">
                <div class="w-1/4 flex justify-between items-center md:flex-col md:items-start md:gap-3">
                    <div>
                        Admin panel
                    </div>
                    <div v-if="isUserSuperAdmin" @click="openAddUserModal" class="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <path d="M9.65385 9.65384C12.0435 9.65384 13.9808 7.71661 13.9808 5.32692C13.9808 2.93723 12.0435 1 9.65385 1C7.26416 1 5.32693 2.93723 5.32693 5.32692C5.32693 7.71661 7.26416 9.65384 9.65385 9.65384Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.5 24L1.00003 24.0769V21.1923C1.01534 19.7265 1.40191 18.2885 2.12363 17.0126C2.84535 15.7368 3.87868 14.6646 5.12709 13.8964C6.3755 13.1281 7.79827 12.6888 9.26249 12.6195C13.5 12.6195 15 15 16 16M20.2308 15.4615V25M15.4616 20.2308H25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
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
                        <div class="text-red-500">
                            Хатолик юз берди
                        </div>
                    </div>
                    <div @click="closeAddUserModal" class="w-full flex justify-end opacity-50 hover:opacity-100 cursor-pointer transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <path opacity="1" d="M16.1237 15.2595L16.2474 15.1358L16.1238 15.0121L9.62119 8.5L16.1238 1.98793L16.2474 1.86419L16.1237 1.74053L15.2595 0.876256L15.1358 0.752602L15.0121 0.876167L8.5 7.37881L1.98793 0.876167L1.86419 0.752602L1.74053 0.876256L0.876256 1.74053L0.752602 1.86419L0.876167 1.98793L7.37881 8.5L0.876167 15.0121L0.752602 15.1358L0.876256 15.2595L1.74053 16.1237L1.86419 16.2474L1.98793 16.1238L8.5 9.62119L15.0121 16.1238L15.1358 16.2474L15.2595 16.1237L16.1237 15.2595Z" fill="#808080" stroke="#808080" stroke-width="0.35"/>
                        </svg>
                    </div>
                    <div>
                        <input v-model="name" type="text" placeholder="name" class="w-full bg-soft-white border border-black border-opacity-20 px-3 py-2 outline-none">
                    </div>
                    <div>
                        <input v-model="email" type="text" placeholder="email" class="w-full bg-soft-white border border-black border-opacity-20 px-3 py-2 outline-none">
                    </div>
                    <div>
                        <input v-model="password" type="password" placeholder="password" class="w-full bg-soft-white border border-black border-opacity-20 px-3 py-2 outline-none">
                    </div>
                    <div>
                        <input @click="addUser" value="OK " type="submit" class="w-full bg-black text-white border px-3 py-2 outline-none cursor-pointer">
                    </div>
                    <div v-if="isUserAdded" class="text-green-500">
                        Фойдаланувчи муваффақиятли қўшилди
                    </div>
                </div>
            </dialog>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import axios from 'axios'


const authToken = useAuthToken()
const router = useRouter()
const config = useRuntimeConfig()
const cameraLink = useCameraLink()
const selectedCamera = useSelectedCamera()
const isUserSuperAdmin = ref(false)
const error = ref(false)
const isUserAdded = ref(false)


const name = ref('')
const email = ref('')
const password = ref('')


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
        })
        .catch((err) => {
            console.log(err)
            error.value = true
            isUserAdded.value = false
        })
}


</script>