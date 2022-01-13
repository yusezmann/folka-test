<template>
    <div class="tab" v-show="title == selectedTitle">
        <slot></slot>
    </div>
</template>

<script>
import { inject } from 'vue'
export default {
    props: {
        title: {
            type: String,
            default: 'Tab',
        },
    },
    setup() {
        const selectedTitle = inject('selectedTitle')

        return {
            selectedTitle,
        }
    },
}
</script>

<style lang="css"></style>
