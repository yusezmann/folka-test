<template>
    <div class="tabs">
        <ul class="flex flex-row relative text-center">
            <li
                :class="[
                    `${active === false ? 'border-red' : 'border-b-2'}`,

                    'text-red',
                    'ml-52',
                    'px-14',
                    'py-2',
                    'cursor-pointer',
                    'font-bold',
                ]"
                v-for="title in tabTitles"
                :key="title"
                @click="selectedTitle = title"
            >
                {{ title }}
            </li>
        </ul>
        <div class="mt-5 rounded-lg">
            <slot />
        </div>
    </div>
</template>

<script>
import { ref, provide } from 'vue'
export default {
    setup(props, { slots }) {
        const tabTitles = ref(slots.default().map((tab) => tab.props.title))
        const selectedTitle = ref(tabTitles.value[0])

        provide('selectedTitle', selectedTitle)
        return {
            selectedTitle,
            tabTitles,
        }
    },
}
</script>
<!-- 
<style lang="css">
ul.tabs__header {
    display: block;
    list-style: none;
    margin: 0 0 0 20px;
    padding: 0;
}

ul.tabs__header > li {
    padding: 15px 30px;
    border-radius: 10px;
    margin: 0;
    display: inline-block;
    margin-right: 5px;
    cursor: pointer;
}

ul.tabs__header > li.tab__selected {
    font-weight: bold;
    border-radius: 10px 10px 0 0;
    border-bottom: 8px solid transparent;
}

.tab {
    display: inline-block;
    color: black;
    padding: 20px;
    min-width: 800px;
    border-radius: 10px;
    min-height: 400px;
}

.tabs__light .tab {
    background-color: #fff;
}

.tabs__light li {
    background-color: #ddd;
    color: #aaa;
}

.tabs__light li.tab__selected {
    background-color: #fff;
    color: #83ffb3;
}

.tabs__dark .tab {
    background-color: #555;
    color: #eee;
}

.tabs__dark li {
    background-color: #ddd;
    color: #aaa;
}

.tabs__dark li.tab__selected {
    background-color: #555;
    color: white;
}
</style> -->
