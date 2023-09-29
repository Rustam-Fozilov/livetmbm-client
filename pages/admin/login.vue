<template>
    <div>
        <div class="container mt-24 flex items-center flex-col">
            <div class=" font-tt-hoves-medium text-[42px] text-center">Login</div>
            <div v-if="error" class=" font-tt-hoves-regular text-red-500">username yoki parol xato</div>
            <form @submit.prevent="login">
                <div class="mt-12">
                    <div>
                        <input v-model="email" type="text" placeholder="username" class="w-full font-tt-hoves-regular text-base px-5 py-3 bg-transparent border border-black outline-none">
                    </div>
                    <div class="mt-5">
                        <input v-model="password" type="password" placeholder="password" class="w-full font-tt-hoves-regular text-base px-5 py-3 bg-transparent border border-black outline-none">
                    </div>
                    <div class="mt-5">
                        <input type="submit" value="Login" class=" cursor-pointer font-tt-hoves-medium text-base bg-black text-white px-5 py-3 w-[285px]">
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import axios from 'axios'


const email = ref('')
const password = ref('')
const error = ref(false)
const router = useRouter()
const config = useRuntimeConfig()
const authToken = useAuthToken()


const login = () => {
    axios
        .post(`${config.public.serverUrl}/api/login`, {
            email: email.value,
            password: password.value
        })
        .then((res) => {
            if (res.data.success === true) {
                authToken.value = res.data.token
                router.push('/admin/dashboard')
            } else {
                error.value = true
            }
        })
        .catch((err) => {
            console.log(err)
        })
}

</script>