<template>
    <div>
        <p>
            <i>Quelques part dans les tropiques...</i>
        </p>
        <p>
            Après plusieurs semaines de périple solitaire à travers la jungle, carte à la main,
            vous atteignez enfin ce qui semble être l'antique Temple du Destin.
        </p>
        <p>
            Le manuscrit disait donc vrai !
        </p>
        <p>
            Vous contemplez l'édifice grandiose. Personne n'a mis les pieds ici depuis des millénaires.<br />
            L'étude de ce parchemin cryptique en arioméen, déchiffré après des années d'études
            approfondies, ont finalement payé.
        </p>
        <p>
            Sous le zénith, vous pénétrez dans l'enceinte du temple, plein de solennité.
        </p>
        <p>
            Un hall immense décoré de fresques monumentales vous accueille.<br />
            Des histoires de guerres et de naissances, de temps et de saisons, d'ambitions et de trahisons.
        </p>
        <p>
            Mais vous n'êtes pas ici pour étudier ces ruines.
        </p>
        <p>
            Au fond, une double porte en pierre se dessine: l'entrée de la salle des prophéties.
        </p>
        <ButtonVue :text="'Entrer dans la salle des prophéties'" @click="$emit('change', 'salle')"></ButtonVue>
        <ButtonVue :text="'Faire demi-tour'" @click="$emit('change', 'hesitation')"></ButtonVue>
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
