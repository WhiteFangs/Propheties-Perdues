<template>
    <div>
        <p>
            Si près du but, vous faites demi-tour.
        </p>
        <p>
            Les représentations murales, d'un côté de famines, de l'autre de festivités, vous font hésiter.
        </p>
        <p>
            Est-ce que ça vaut vraiment le coup ?
        </p>
        <ButtonVue :text="'Renoncer et quitter le temple'" @click="$emit('change', 'quit')"></ButtonVue>
        <ButtonVue :text="'Revenir vers la double porte'" @click="$emit('change', 'porte')"></ButtonVue>
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
