<template>
    <div>
        <p>
            Vous rentrez finalement chez vous, en vie.
        </p>
        <p>
            Après quelques temps de repos bien mérité, vous décidez de ne pas en rester là.
        </p>
        <p>
            Il faut se prémunir. Sage d'une quête inachevée, vous procédez à la destruction de tous vos documents sur
            les arioméens.
        </p>
        <p>
            Peu importe que leur création soit ancrée dans la réalité ou un tissu d'absurdités, démêler leurs mensonges
            des vérités ne suffirait pas à empêcher le chaos de leurs prophéties.
        </p>
        <p>
            Une fois la tâche accomplie, vous vous sentez enfin en harmonie avec vous-même.
        </p>
        <p>
            Quant au secret des arioméens, vous l'emporterez avec vous dans la mort.
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
