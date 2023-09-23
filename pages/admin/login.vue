<template>
    <div>
        <div class="container mt-24 flex items-center flex-col">
            <div class=" font-tt-hoves-medium text-[42px] text-center">Login</div>
            <div v-if="error" class=" font-tt-hoves-regular text-red-500">username yoki parol xato</div>
            <form @submit.prevent="login">
                <div class="mt-12">
                    <div>
                        <input v-model="username" type="text" placeholder="username" class=" font-tt-hoves-regular text-base px-5 py-3 bg-transparent border border-black outline-none">
                    </div>
                    <div class="mt-5">
                        <input v-model="password" type="password" placeholder="password" class=" font-tt-hoves-regular text-base px-5 py-3 bg-transparent border border-black outline-none">
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
import { useRouter } from 'vue-router';

const username = ref('')
const password = ref('')
const error = ref(false)
const router = useRouter()
const isLoggeedIn = useIsLoggedIn()

const login = () => {
    if (username.value === '1' && password.value === '1') {
        isLoggeedIn.value = true
        router.push('/admin/dashboard')
    } else {
        error.value = true
    }
}

</script>