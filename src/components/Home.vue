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
    font-size: 20vh;
    line-height: .7;
}

.buttons {
    margin-top: 1em;
}
</style>
