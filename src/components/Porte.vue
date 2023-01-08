<template>
    <div>
        <p>
            De nouveau face à ces deux grands blocs de pierre.
        </p>
        <p>
            À quelques mètres, juste derrière ces portes, ces fameuses prophéties.
        </p>
        <ButtonVue :text="'Renoncer et quitter le temple'" @click="$emit('change', 'quit')"></ButtonVue>
        <ButtonVue :text="'Entrer dans la salle des prophéties'" @click="$emit('change', 'salle')"></ButtonVue>
    </div>
</template>

<script lang="ts">
import ButtonVue from './Button.vue';

export default {
    components: {
        ButtonVue
    },
    emits: ["change"]
}
</script>
