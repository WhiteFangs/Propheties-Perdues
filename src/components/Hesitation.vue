<template>
    <div>
        <p>
            Si près du but, vous faites demi-tour.
        </p>
        <p>
            Les représentations murales, d'un côté de famines, de l'autre de festivités, vous font hésiter.
        </p>
        <p>
            Les prophéties sont des choses puissantes, dangereuses même. Si vos recherches sur les arioméens sont correctes, il pourrait même s'agir du sort de l'humanité entière.
        </p>
        <p>
            Est-ce à vous de porter cette responsabilité ? Est-ce que ça vaut même le coup de prendre le risque ?
        </p>
        <p>
            Votre cerveau bouillonne de reflexions, chacune menant vers d'autres questions, mais il va bien falloir choisir.
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
