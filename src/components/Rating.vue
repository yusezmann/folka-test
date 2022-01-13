<template>
    <div class="rating">
        <ul class="list">
            <li
                v-for="star in maxStars"
                :class="{ active: star <= stars }"
                :key="star.stars"
                class="star"
            >
                <i :class="[star <= stars ? 'fas fa-star' : 'fal fa-star']"></i>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Rating',
    props: ['stars', 'maxStars'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rating {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px;
    color: #b7b7b7;
    background: transparent;
    border-radius: 8px;
    /* box-shadow: 0 6px 33px rgba(19, 18, 18, 0.09); */
}

.list {
    padding: 0;
    margin: 0 7px 0 0;
}

.list.star:hover {
    color: #ffe100;
}

.star {
    display: inline-block;
    font-size: 12px;
    transition: all 0.2s ease-in-out;
}

.star:hover:not(.active) {
    color: inherit;
}

.star:first-child {
    margin-left: 0;
}

.star.active {
    color: #ffe100;
}

.info {
    margin-top: 5px;
    font-size: 12px;
    text-align: left;
    display: table;
}
.divider {
    margin: 0 5px;
    font-size: 30px;
}
.score-max {
    font-size: 30px;
    vertical-align: sub;
}
</style>
