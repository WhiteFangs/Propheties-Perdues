<template>
    <div class="home">
        <h2>Les</h2>
        <h1>Prophéties</h1>
        <h1>Perdues</h1>
        <div class="buttons">
            <div>
                <ButtonVue :text="'Jouer'" @click="$emit('change', 'intro')"></ButtonVue>
            </div>
            <div>
                <ButtonVue :text="'Crédits'" @click="$emit('change', 'credits')"></ButtonVue>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import ButtonVue from './Button.vue';

export default {
    components: {
        ButtonVue
    },
    emits: ["change"],
}
</script>
<style>
.home {
    text-align: center;
    font-family: 'Teko', sans-serif;
}

.home h1,
.home h2 {
    margin: 0;
}

.home h1 {
    font-size: 5em;
    line-height: .7;
}

@media (max-width: 640px) {
    .home h1 {
        font-size: 4em;
    }

    .home h2 {
        font-size: 1.2em;
    }
}

@media (max-width: 460px) {
    .home h1 {
        font-size: 3em;
    }

    .home h2 {
        font-size: 1em;
    }
}

@media (max-width: 320px) {
    .home h1 {
        font-size: 2em;
    }

    .home h2 {
        font-size: .8em;
    }
}

.buttons {
    margin-top: 1em;
}
</style>
