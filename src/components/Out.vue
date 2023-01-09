<template>
    <div>
        <p>
            Vous sortez de la salle des prophétie, les portes se referment dans un fracas retentissant.
        </p>
        <p>
            Au même instant, le sol commence à trembler. Le temple est en train de s'effondrer.
        </p>
        <p>
            Pas le temps de refléchir. Alors que les murs s'écroulent déjà derrière vous, vous foncez vers la seule issue.
        </p>
        <p>
            Vous enjambez les rochers déjà à terre, la poussière tournoie autour de vous, il vous faut atteindre la lumière.
        </p>
        <p>
            Un dernier élan et vous plongez vers l'extérieur...
        </p>
        <p>
            Pfiou.
        </p>
        <p>
            C'était moins une.
        </p>
        <p>
            Vous vous tenez à l'air libre, en un seul morceau.
        </p>
        <p>
            Les ruines du Temple du Destin dans votre dos, vous prenez un moment pour admirer la jungle vierge qui se déploie sous vos yeux.
        </p>
        <p>
            Que va-t-il advenir du monde suite à la prophétie que vous avez choisi ? Qui sait...
        </p>
        <p>
            Quoiqu'il en soit, il est temps de rentrer.
        </p>
        <ButtonVue :text="'Rentrer chez vous'" @click="$emit('change', 'end')"></ButtonVue>
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
