<template>
    <div>
        <p>
            À l'aide des blocs de runes judicieusement placés, vous condamnez l'entrée de la salle.
        </p>
        <p>
            C'est-à-dire votre unique porte de sortie.
        </p>
        <p>
            Pour vous éviter tout futur espoir, vous essayez de toutes vos forces de la débloquer, sans succès. C'est du beau travail.
        </p>
        <p>
            Maintenant que votre fin est inévitable, vous vous sentez en paix avec vous-même. C'est peut-être ça la sagesse.
        </p>
        <p>
            Vous vous dites qu'il vaut mieux assumer ses erreurs que de prendre le risque de condamner l'humanité entière.
        </p>
        <p>
            Au prix de votre vie, vous empêcherez la réalisation de cette maudite prophétie.
        </p>
        <ListEndings :end="'La fin certaine'" @change="change" />
    </div>
</template>

<script lang="ts">
import ButtonVue from './Button.vue';
import ListEndings from "./ListEndings.vue";

export default {
    components: {
        ButtonVue,
        ListEndings
    },
    emits: ["change"],
    methods: {
        change: function (status: string) {
            this.$emit('change', status);
        }
    }
}
</script>
