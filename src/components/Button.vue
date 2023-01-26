<template>
    <div class="button-container">
        <button class="button">{{ text }}</button>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        text: String
    }
}
</script>

<style>
.button-container {
    text-align: center;
}

.button {
    margin: 1em;
    padding: .3em .5em .5em;
    color: #EDDCD2;
    background: #5c2d13;
    font-size: .9em;
    cursor: pointer;
    border: .5em outset #5c2d13;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.button:hover {
    padding: .4em .6em .6em;
    color: #FFF1E6;
    border: .4em outset #5c2d13;
}
</style>
