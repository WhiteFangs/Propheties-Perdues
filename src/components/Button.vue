<template>
    <button class="button">{{ text }}</button>
</template>

<script lang="ts">
export default {
    props: {
        text: String
    }
}
</script>

<style>
.button {
    margin: 1em;
    margin-left: 0;
    padding: .3em .5em;
    color: #EDDCD2;
    background: #5c2d13;
    font-size: .9em;
    cursor: pointer;
    border: .5em outset #5c2d13;
}

.button:hover {
    padding: .4em .6em;
    color: #FFF1E6;
    border: .4em outset #5c2d13;
}
</style>
