<template>
    <div>

    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'


const router = useRouter()
const authToken = useAuthToken()


if (authToken.value === null) {
    router.push('/admin/login')
} else if (authToken) {
    router.push('/admin/dashboard')
}

</script>