<template>
    <div>
        <p>
            Vous ressortez du temple.
        </p>
        <p>
            La jungle vierge se déploie sous vos yeux. Plus qu'à la traverser de nouveau pour rentrer chez vous.
        </p>
        <p>
            Vous vous remettez en marche, le cœur léger. Ces histoires de prophéties, ça ne se termine jamais bien.
        </p>
        <p>
            Et puis vous vous dites, souvent, la destination, c'est le voyage.
        </p>
        <ButtonVue :text="'Rentrer chez vous'" @click="$emit('change', 'rentre')"></ButtonVue>
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
