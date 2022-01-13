<template>
    <div class="product__list">
        <div class="col-span-3 row-span-5">
            <button
                @click="filter"
                class="
                    font-normal
                    flex flex-row
                    justify-between
                    cursor-pointer
                    mx-4
                "
            >
                <h1 class="text-base font-normal text-brown">
                    URUTKAN BERDASARKAN
                </h1>
                <i
                    v-if="filterBy === true"
                    class="fas fa-angle-up pt-1 text-brown ml-4"
                ></i>
                <i v-else class="fas fa-angle-down pt-1 text-brown ml-4"></i>
            </button>
            <div v-if="filterBy === true">
                <h1 class="mb-2 text-brown mx-4">Harga</h1>
                <div class="line__harga">
                    <div
                        class="bg-red h-2.5 rounded-full"
                        style="width: 45%"
                    ></div>
                </div>
                <span class="flex flex-row text-brown ml-6 mb-4"
                    >Rp
                    <input class="border w-20 mx-2" value="10000" type="text" />
                    - Rp
                    <input
                        class="border w-20 ml-2"
                        value="250000"
                        type="text"
                    />
                </span>
                <div class="mb-4">
                    <button @click="filterByOrigins" class="filterBy">
                        <h1 class="font-medium text-brown">Origin</h1>
                        <i
                            v-if="filterByOrigin === true"
                            class="fas fa-angle-up pt-1 text-brown ml-4"
                        ></i>
                        <i
                            v-else
                            class="fas fa-angle-down pt-1 text-brown ml-4"
                        ></i>
                    </button>
                    <div v-if="filterByOrigin === true">
                        <div class="filterBy__item">
                            <span class="flex flex-row">
                                <input class="mt-2" type="checkbox" />
                                <h4 class="ml-2">Aceh</h4>
                            </span>
                            <h5>(8)</h5>
                        </div>
                        <div class="filterBy__item">
                            <span class="flex flex-row">
                                <input class="mt-2" type="checkbox" />
                                <h4 class="ml-2">Semarang</h4>
                            </span>
                            <h5>(2)</h5>
                        </div>
                        <div class="filterBy__item">
                            <span class="flex flex-row">
                                <input class="mt-2" type="checkbox" />
                                <h4 class="ml-2">Bandung</h4>
                            </span>
                            <h5>(7)</h5>
                        </div>
                        <div class="filterBy__item">
                            <span class="flex flex-row">
                                <input class="mt-2" type="checkbox" />
                                <h4 class="ml-2">Jawa</h4>
                            </span>
                            <h5>(5)</h5>
                        </div>
                        <div class="filterBy__item">
                            <span class="flex flex-row">
                                <input class="mt-2" type="checkbox" />
                                <h4 class="ml-2">Amerika Selatan</h4>
                            </span>
                            <h5>(5)</h5>
                        </div>
                        <div class="filterBy__item">
                            <span class="flex flex-row">
                                <input class="mt-2" type="checkbox" />
                                <h4 class="ml-2">Lain-Lain</h4>
                            </span>
                            <h5>(8)</h5>
                        </div>
                    </div>
                </div>
                <div class="mb-4">
                    <button @click="filterBySpecies" class="filterBy">
                        <h1 class="font-medium text-brown">Species</h1>
                        <i
                            v-if="filterBySpec === true"
                            class="fas fa-angle-up pt-1 text-brown ml-4"
                        ></i>
                        <i
                            v-else
                            class="fas fa-angle-down pt-1 text-brown ml-4"
                        ></i>
                    </button>
                    <div v-if="filterBySpec === true">
                        <div class="filterBy__item">
                            <span class="flex flex-row">
                                <input class="mt-2" type="checkbox" />
                                <h4 class="ml-2">Arabika</h4>
                            </span>
                            <h5>(128)</h5>
                        </div>
                        <div class="filterBy__item">
                            <span class="flex flex-row">
                                <input class="mt-2" type="checkbox" />
                                <h4 class="ml-2">Robusta</h4>
                            </span>
                            <h5>(23)</h5>
                        </div>
                        <div class="filterBy__item">
                            <span class="flex flex-row">
                                <input class="mt-2" type="checkbox" />
                                <h4 class="ml-2">Blend</h4>
                            </span>
                            <h5>(9)</h5>
                        </div>
                    </div>
                </div>
                <div class="mb-4">
                    <button @click="filterByRoast" class="filterBy">
                        <h1 class="font-medium text-brown">Roast Level</h1>
                        <i
                            v-if="filterByRoastLevel === true"
                            class="fas fa-angle-up pt-1 text-brown ml-4"
                        ></i>
                        <i
                            v-else
                            class="fas fa-angle-down pt-1 text-brown ml-4"
                        ></i>
                    </button>
                    <div v-if="filterByRoastLevel === true">
                        <div class="filterBy__item">
                            <span class="flex flex-row">
                                <input class="mt-2" type="checkbox" />
                                <h4 class="ml-2">Light Roast</h4>
                            </span>
                            <h5>(8)</h5>
                        </div>
                        <div class="filterBy__item">
                            <span class="flex flex-row">
                                <input class="mt-2" type="checkbox" />
                                <h4 class="ml-2">Medium Roast</h4>
                            </span>
                            <h5>(2)</h5>
                        </div>
                        <div class="filterBy__item">
                            <span class="flex flex-row">
                                <input class="mt-2" type="checkbox" />
                                <h4 class="ml-2">Dark Roast</h4>
                            </span>
                            <h5>(7)</h5>
                        </div>
                        <div class="filterBy__item">
                            <span class="flex flex-row">
                                <input class="mt-2" type="checkbox" />
                                <h4 class="ml-2">Light to Medium Roast</h4>
                            </span>
                            <h5>(7)</h5>
                        </div>
                    </div>
                </div>
                <div class="mb-4">
                    <button @click="filterByTasted" class="filterBy">
                        <h1 class="font-medium text-brown">Tasted</h1>
                        <i
                            v-if="filterByTaste === true"
                            class="fas fa-angle-up pt-1 text-brown ml-4"
                        ></i>
                        <i
                            v-else
                            class="fas fa-angle-down pt-1 text-brown ml-4"
                        ></i>
                    </button>
                    <div v-if="filterByTaste === true">
                        <div class="filterBy__item">
                            <span class="flex flex-row">
                                <input class="mt-2" type="checkbox" />
                                <h4 class="ml-2">Sweet</h4>
                            </span>
                            <h5>(18)</h5>
                        </div>
                        <div class="filterBy__item">
                            <span class="flex flex-row">
                                <input class="mt-2" type="checkbox" />
                                <h4 class="ml-2">Floral</h4>
                            </span>
                            <h5>(21)</h5>
                        </div>
                        <div class="filterBy__item">
                            <span class="flex flex-row">
                                <input class="mt-2" type="checkbox" />
                                <h4 class="ml-2">Fruity</h4>
                            </span>
                            <h5>(7)</h5>
                        </div>
                        <div class="filterBy__item">
                            <span class="flex flex-row">
                                <input class="mt-2" type="checkbox" />
                                <h4 class="ml-2">Nutty</h4>
                            </span>
                            <h5>(7)</h5>
                        </div>
                        <div class="filterBy__item">
                            <span class="flex flex-row">
                                <input class="mt-2" type="checkbox" />
                                <h4 class="ml-2">Cocoa</h4>
                            </span>
                            <h5>(7)</h5>
                        </div>
                        <div class="filterBy__item">
                            <span class="flex flex-row">
                                <input class="mt-2" type="checkbox" />
                                <h4 class="ml-2">Spices</h4>
                            </span>
                            <h5>(17)</h5>
                        </div>
                    </div>
                </div>
                <div class="mb-4">
                    <button @click="filterByProccess" class="filterBy">
                        <h1 class="font-medium text-brown">Processing</h1>
                        <i
                            v-if="filterByProccessing === true"
                            class="fas fa-angle-up pt-1 text-brown ml-4"
                        ></i>
                        <i
                            v-else
                            class="fas fa-angle-down pt-1 text-brown ml-4"
                        ></i>
                    </button>
                    <div v-if="filterByProccessing === true">
                        <div class="filterBy__item">
                            <span class="flex flex-row">
                                <input class="mt-2" type="checkbox" />
                                <h4 class="ml-2">Honey White</h4>
                            </span>
                            <h5>(8)</h5>
                        </div>
                        <div class="filterBy__item">
                            <span class="flex flex-row">
                                <input class="mt-2" type="checkbox" />
                                <h4 class="ml-2">Natural</h4>
                            </span>
                            <h5>(2)</h5>
                        </div>
                        <div class="filterBy__item">
                            <span class="flex flex-row">
                                <input class="mt-2" type="checkbox" />
                                <h4 class="ml-2">Honey Gold</h4>
                            </span>
                            <h5>(7)</h5>
                        </div>
                        <div class="filterBy__item">
                            <span class="flex flex-row">
                                <input class="mt-2" type="checkbox" />
                                <h4 class="ml-2">Honey Yellow</h4>
                            </span>
                            <h5>(5)</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-9 flex flex-row text-brown text-base font-normal">
            <h1>Menampilkan</h1>
            <select>
                <option value="">
                    {{ products.list.length }}
                </option>
            </select>
            <span class="flex flex-row ml-2"
                >dari
                <h1 class="ml-2">{{ products.total }}</h1></span
            >
        </div>
        <div
            v-for="(item, index) in products.list"
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
                <div class="card__img relative">
                    <div
                        class="
                            md:w-[278px] md:h-[278px]
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
                            ><Rating :stars="5" :maxStars="5" />(7)</span
                        >
                        <span class="text-lg text-red font-medium"
                            >Rp. {{ item.price }}
                        </span>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="col-span-9 mb-6 items-center">
            <Pagination />
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import Rating from './Rating.vue'
import Pagination from './Pagination.vue'
export default {
    data() {
        return {
            filterBy: false,
            filterByOrigin: false,
            filterBySpec: false,
            filterByRoastLevel: false,
            filterByTaste: false,
            filterByProccessing: false,
        }
    },
    computed: {
        ...mapState('product', ['products']),
        ...mapGetters('product', {
            gettersAllProducts: 'getAllProducts',
        }),
        ...mapGetters('auth', {
            gettersAuthData: 'getAuthData',
        }),
    },
    created() {
        this.actionGetAllProducts()
    },
    methods: {
        ...mapActions('product', {
            actionGetAllProducts: 'getAllProducts',
        }),
        filter() {
            this.filterBy = !this.filterBy
        },
        filterByOrigins() {
            this.filterByOrigin = !this.filterByOrigin
        },
        filterBySpecies() {
            this.filterBySpec = !this.filterBySpec
        },
        filterByRoast() {
            this.filterByRoastLevel = !this.filterByRoastLevel
        },
        filterByTasted() {
            this.filterByTaste = !this.filterByTaste
        },
        filterByProccess() {
            this.filterByProccessing = !this.filterByProccessing
        },
    },
    components: { Rating, Pagination },
}
</script>

<style></style>
