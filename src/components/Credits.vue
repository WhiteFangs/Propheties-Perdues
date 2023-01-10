<template>
    <div class="credits">
        <h2>Crédits</h2>
        <p>
            Merci à Nadège, à la communauté <a href="http://www.fiction-interactive.fr/" target="_blank">Fiction-Interactive.fr</a> et à toutes les personnes avec qui j'ai discuté de mes idées qui m'ont aidé à la création de ce jeu.
        </p>
        <p>
            © Bilgé Kimyonok - 2023
        </p>
        <p>
            Si vous appréciez ce jeu, jettez un œil à mes autres créations sur mon site 
            <a href="https://louphole.com/" target="_blank">louphole.com</a> ou sur mon profil
            <a href="https://louphole.itch.io/" target="_blank">itch.io</a>
        </p>
        <ButtonVue :text="'Accueil'" @click="$emit('change', 'home')"></ButtonVue>
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
.credits {
    text-align: center;
}

.credits h2 {
  font-family: 'Teko', sans-serif;
}
</style>
