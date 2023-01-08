<template>
    <div>
        <p>
            Vous poussez de toutes vos forces les lourdes portes, elle se referment derrière vous dans un bruit sourd.
        </p>
        <p>
            Vous y êtes.
        </p>
        <p>
            La salle des prophéties du Temple du Destin.
        </p>
        <p>
            C'est une plus petite pièce que le hall précédent. Sobre, aux murs lisses, et au fond de laquelle se dresse une grande stèle à même le mur.
        </p>
        <ButtonVue :text="'S\'approcher de la stèle'" @click="$emit('change', 'prophecy')"></ButtonVue>
    </div>
</template>

<script lang="ts">
import ButtonVue from './Button.vue';

export default {
    components: {
        ButtonVue,
    },
    emits: ["change"],
}
</script>
