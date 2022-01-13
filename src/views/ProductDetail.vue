<template>
    <Header />
    <nav class="col-span-3 rounded font-sans w-full mb-4 mx-4 md:mx-[70px]">
        <ul class="flex flex-row md:text-sm text-xs text-brown">
            <li><a href="/" class="font-semibold">Home</a></li>
            <li>
                <span class="mx-2"
                    ><i class="fas fa-angle-double-right"></i
                ></span>
            </li>
            <li>
                <a href="#" class="font-semibold text-red"
                    >HARIO CAFE PRESS SLIM GREY 240ML</a
                >
            </li>
        </ul>
    </nav>
    <div class="md:grid md:grid-cols-12 gap-28 mx-4 md:mx-[70px]">
        <div class="col-span-5">
            <div class="border mb-4">
                <img
                    class="md:w-[560px] my-2 md:h-[530px]"
                    src="../../public/images/image 2.png"
                    alt=""
                />
            </div>
            <div class="col-span-4 gap-2 flex flex-row">
                <div class="col-span-2 border">
                    <img
                        class="border"
                        src="../../public/images/image-3.png"
                        alt=""
                    />
                </div>
                <div class="col-span-2 border">
                    <img
                        class="border"
                        src="../../public/images/image-4.png"
                        alt=""
                    />
                </div>
                <div class="col-span-2 border">
                    <img
                        class="border"
                        src="../../public/images/image-5.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
        <div class="col-span-6">
            <h1 class="text-brown text-2xl font-bold">
                HARIO CAFE PRESS SLIM GREY 240ML
            </h1>
            <div class="mb-4">
                <h2 class="text-[20px] text-brown font-medium">UbruKopi</h2>
                <span class="flex flex-row items-center text-sm text-brown"
                    ><Rating :stars="5" :maxStars="5" />(7)</span
                >
                <span class="text-lg text-red font-medium">Rp 480000 </span>
            </div>
            <div class="col-span-6 w-full flex flex-row mb-6">
                <i class="fas fa-minus border px-3 py-3"></i>
                <input type="text" class="border w-24 h-10" />
                <i class="fas fa-plus border px-3 py-3"></i>
                <button class="bg-red text-white h-10 px-2 ml-6">
                    Tambah Ke Keranjang
                </button>
                <span class="border bg-secondary ml-6 pt-2 px-2">
                    <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.1559 2.70302C17.0104 2.34893 17.9264 2.16669 18.8514 2.16669C19.7764 2.16669 20.6923 2.34893 21.5469 2.70302C22.4013 3.05704 23.1775 3.57589 23.8314 4.22995C24.4855 4.8838 25.0047 5.66045 25.3587 6.51484C25.7128 7.36939 25.895 8.28533 25.895 9.21033C25.895 10.1353 25.7128 11.0513 25.3587 11.9058C25.0046 12.7603 24.4857 13.5366 23.8316 14.1905C23.8315 14.1906 23.8316 14.1905 23.8316 14.1905L14.2549 23.7672C13.8318 24.1903 13.1459 24.1903 12.7228 23.7672L3.14618 14.1905C1.82535 12.8697 1.08331 11.0783 1.08331 9.21033C1.08331 7.34239 1.82535 5.55096 3.14618 4.23013C4.46701 2.9093 6.25844 2.16727 8.12638 2.16727C9.99431 2.16727 11.7857 2.9093 13.1066 4.23013L13.4889 4.61243L13.871 4.23031C13.8711 4.23025 13.8709 4.23037 13.871 4.23031C14.5249 3.57617 15.3014 3.05707 16.1559 2.70302ZM18.8514 4.33335C18.211 4.33335 17.5769 4.45953 16.9853 4.70466C16.3937 4.9498 15.8561 5.30909 15.4034 5.76202L14.2549 6.91053C13.8318 7.3336 13.1459 7.3336 12.7228 6.91053L11.5745 5.7622C10.66 4.8477 9.41968 4.33393 8.12638 4.33393C6.83308 4.33393 5.59275 4.8477 4.67824 5.7622C3.76374 6.6767 3.24998 7.91703 3.24998 9.21033C3.24998 10.5036 3.76374 11.744 4.67824 12.6585L13.4889 21.4691L22.2995 12.6585C22.7524 12.2058 23.1119 11.6681 23.357 11.0764C23.6022 10.4848 23.7284 9.85072 23.7284 9.21033C23.7284 8.56995 23.6022 7.93583 23.357 7.34422C23.1119 6.75261 22.7526 6.21509 22.2997 5.76238C21.847 5.30945 21.3091 4.9498 20.7175 4.70466C20.1259 4.45953 19.4918 4.33335 18.8514 4.33335Z"
                            fill="#EB3F36"
                        />
                    </svg>
                </span>
            </div>
            <p class="text-brown text-lg">
                French Press dari Hario berbahan dasar kaca berwarna abu-abu di
                desain dengan bentuk yang ramping dan menarik. sangat cocok
                untuk membuat 1-2 gelas kopi.
            </p>
        </div>
        <div class="col-span-11">
            <tabs>
                <tab title="Deskripsi ">
                    <Deskripsi />
                </tab>
                <tab title="Informasi">
                    <Informasi />
                </tab>
            </tabs>
        </div>
        <div class="col-span-12">
            <h1 class="text-center text-xl mb-6 text-brown font-medium">
                Rekomendasi Untuk Anda
            </h1>
            <span class="mb-6 border-t-2 border-red"></span>
            <div class="flex flex-row gap-9">
                <div
                    v-for="(item, index) in detailProducts"
                    :key="index"
                    class="col-span-3 mb-6"
                >
                    <router-link
                        class="
                            mb-4
                            md:mb-0
                            after:absolute after:inset-0 after:contents
                            hover:text-accent
                            block
                        "
                        :to="`/detail-product/${item.id}`"
                    >
                        <div class="md:w-[379px] md:h-full border relative">
                            <div
                                class="
                                    mb-5
                                    flex
                                    justify-center
                                    items-center
                                    mx-2
                                    my-2
                                "
                            >
                                <img
                                    class="md:w-full md:h-full"
                                    :src="`${item.images[0].image_url}`"
                                    :alt="`${item.name}`"
                                />
                            </div>
                            <div
                                class="
                                    text-center
                                    flex flex-col
                                    justify-center
                                    items-center
                                    pb-4
                                "
                            >
                                <span
                                    class="
                                        uppercase
                                        text-brown text-xl
                                        font-bold
                                        mb-[2px]
                                    "
                                >
                                    {{ item.slug }}
                                </span>
                                <span class="uppercase text-base text-brown"
                                    >{{ item.name }}
                                </span>
                                <span
                                    class="
                                        flex flex-row
                                        items-center
                                        text-sm text-brown
                                    "
                                    ><Rating
                                        :stars="5"
                                        :maxStars="5"
                                    />(7)</span
                                >
                                <span class="text-lg text-red font-medium"
                                    >Rp. {{ item.price }}
                                </span>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Breadcrumb from '../components/Breadcrumb.vue'
import { mapActions, mapGetters, mapState } from 'vuex'
import Rating from '../components/Rating.vue'
import Tabs from '../components/Tabs.vue'
import Tab from '../components/Tab.vue'
import Deskripsi from '../components/Deskripsi.vue'
import Informasi from '../components/Informasi.vue'
export default {
    components: { Header, Breadcrumb, Rating, Tabs, Tab, Deskripsi, Informasi },
    mounted() {
        this.getDetailProduct()
    },
    computed: {
        ...mapState('product', ['detailProducts']),
    },
    methods: {
        // getRoute() {
        //     const routeId = this.$route.params.id
        //     this.$store.dispatch('getDetailProducts')
        //     console.log(routeId)
        // },
        ...mapActions('product', {
            getDetailProduct: 'getDetailProducts',
        }),
    },
}
</script>
