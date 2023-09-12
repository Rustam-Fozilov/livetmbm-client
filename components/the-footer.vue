<template>
    <div class="bg-primary-black mt-8">
        <div class="container py-12 text-white font-tt-hoves-regular">
            <footer>
                <div class="flex justify-between items-start sm:flex-col">
                    <div>
                        <div class="text-base w-1/2 sm:w-full uppercase">
                            {{
                                locale === 'ruz' ?
                                'Тиббиёт ва фармацевтика ходимларининг малакасини баҳолаш маркази' :
                                locale === 'uz' ?
                                'Tibbiyot va farmatsevtika xodimlarining malakasini baholash markazi' :
                                'Центр оценки компетентности медицинских и фармацевтических работников'
                            }}
                        </div>
                        <div class="mt-12 mb-3">
                            {{
                                locale === 'ruz' ?
                                '2023 © ТМБМ Барча ҳуқуқлар ҳимояланган.' :
                                locale === 'uz' ?
                                '2023 © TMBM Barcha huquqlar himoyalangan.' :
                                '2023 © ТМБМ. Все права защищены.'
                            }}
                        </div>
                    </div>
                    <div id="footer-social-media">
                        <div class="flex flex-col gap-5 justify-center mr-12">
                            <div>
                                <a href="mailto:info@tmbm.uz">
                                    <span class="flex gap-2 items-center">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 26 20" fill="none">
                                            <path d="M26 0H0V20H26V0ZM23.4 5L13 11.25L2.6 5V2.5L13 8.75L23.4 2.5V5Z" fill="white"/>
                                            </svg>
                                        </div>
                                        <div class="font-tt-hoves-medium text-base">info@tmbm.uz</div>
                                    </span>
                                </a>
                            </div>

                            <div>
                                <a href="https://facebook.com">
                                    <span class="flex gap-2 items-center">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                            <path d="M25 12.5313C25 5.61404 19.4 0 12.5 0C5.6 0 0 5.61404 0 12.5313C0 18.5965 4.3 23.6466 10 24.812V16.2907H7.5V12.5313H10V9.3985C10 6.97995 11.9625 5.01253 14.375 5.01253H17.5V8.77193H15C14.3125 8.77193 13.75 9.33584 13.75 10.0251V12.5313H17.5V16.2907H13.75V25C20.0625 24.3734 25 19.0351 25 12.5313Z" fill="white"/>
                                            </svg>
                                        </div>
                                        <div class="font-tt-hoves-medium text-base">Facebook</div>
                                    </span>
                                </a>
                            </div>

                            <div>
                                <a href="https://t.me">
                                    <span class="flex gap-2 items-center">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="22" viewBox="0 0 25 22" fill="none">
                                            <path d="M23.3125 0.144655L1.16735 9.1051C-0.343973 9.74205 -0.33523 10.6267 0.890063 11.0212L6.57562 12.8822L19.7303 4.17338C20.3524 3.77628 20.9207 3.9899 20.4535 4.42501L9.7956 14.5178H9.7931L9.7956 14.5191L9.40341 20.6684C9.97796 20.6684 10.2315 20.3918 10.5538 20.0655L13.3154 17.2477L19.0596 21.6998C20.1188 22.3118 20.8794 21.9973 21.143 20.671L24.9138 2.02403C25.2997 0.400219 24.323 -0.335018 23.3125 0.144655Z" fill="white"/>
                                            </svg>
                                        </div>
                                        <div class="font-tt-hoves-medium text-base">Telegram</div>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<script setup>

const locale = useLocale()

</script>