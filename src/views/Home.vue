<template>
    <Header />
    <Breadcrumb />
    <ProductList />
</template>
<script>
import Header from '../components/Header.vue'
import ProductList from '../components/ProductList.vue'
import Breadcrumb from '../components/Breadcrumb.vue'
import { mapGetters } from 'vuex'
export default {
    components: {
        Header,
        ProductList,
        Breadcrumb,
    },
    computed: {
        ...mapGetters('auth', {
            getterAuthData: 'getAuthData',
        }),
    },
}
</script>
r
