<template>
    <div>
        <div class="w-full bg-white">
            <div class="container py-3 flex justify-between items-center gap-5 sm:flex-col">
                <div class="cursor-pointer">
                    <a href="https://tmbm.uz/" target="_blank">
                        <span class="flex gap-5 items-center">
                            <img src="~/assets/logo-tmbm.svg" alt="logo">
                            <div class="font-tt-hoves-medium text-base">
                                {{
                                    locale === 'ruz' ?
                                    'Тиббиёт ва фармацевтика ходимларининг малакасини баҳолаш маркази' :
                                    locale === 'uz' ?
                                    'Tibbiyot va farmatsevtika xodimlarining malakasini baholash markazi' :
                                    'Центр оценки компетентности медицинских и фармацевтических работников'
                                }}
                            </div>
                        </span>
                    </a>
                </div>

                <div class="flex font-tt-hoves-medium text-base gap-5">
                    <div
                    class="cursor-pointer opacity-50 hover:opacity-100 transition"
                    :class="locale === 'ruz' ? 'opacity-100' : ''"
                    @click="changeLocale('ruz')"
                    >Ўз</div>

                    <div
                    class="cursor-pointer opacity-50 hover:opacity-100 transition"
                    :class="locale === 'uz' ? 'opacity-100' : ''"
                    @click="changeLocale('uz')"
                    >Uz</div>

                    <div
                    class="cursor-pointer opacity-50 hover:opacity-100 transition"
                    :class="locale === 'ru' ? 'opacity-100' : ''"
                    @click="changeLocale('ru')"
                    >Ру</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const locale = useLocale()


const changeLocale = (newLocale) => {
    locale.value = newLocale
}

</script>