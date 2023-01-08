<template>
  <div>
    <p>
      Vous vous approchez. La stèle est gravée d'inscriptions en arioméen, langue oubliée dont vous êtes sans doute le
      seul traducteur vivant.
    </p>
    <p>
      Après quelques recherches dans votre livret de runes, vous finissez par interpréter le poème d'en-tête:
    </p>
    <p class="centered">
      <i>Respect et insolence à qui entre ici,</i><br />
      <i>Courage et orgueil t'accompagnent.</i><br />
      <i>Gloire ou honte à la prophétie,</i><br />
      <i>Que tu invoqueras par ta sortie.</i><br />
    </p>
    <p>
      Puis, en-dessous, dans la partie centrale entourée d'ornements, vous lisez:
    </p>
    <div class="prophecy centered">
      <div>
        Lorsque les <Mutable :options="nature" :type="'nature'"></Mutable> viendront à <Mutable :options="action"
          :type="'action'"></Mutable>
      </div>
      <div>
        Les <Mutable :options="concept" :type="'concept'"></Mutable> deviendront <Mutable :options="devenir"
          :type="'devenir'"></Mutable>
      </div>
      <div>
        Alors, <Mutable :options="duo1" :type="'duo1'"></Mutable> et <Mutable :options="duo2" :type="'duo2'"></Mutable>
        adviendront, <Mutable :options="conclusion" :type="'conclusion'"></Mutable>.
      </div>
    </div>
    <p>
      Intriguant.
    </p>
    <p>
      Durant la transcription de ce deuxième passage, vous remarquez que certains de ces blocs de runes semblent amovibles.
    </p>
    <p>
      En examinant de plus près, cela vous rappelle des tiroirs à pression: en appuyant un instant, le bloc s'enfoncerait légèrement et se décollerait ensuite de la pierre.
      La rune tomberait alors de la stèle, révélant autre chose qui la remplace.<br/>
      Vu l'épaisseur, il n'y aurait la place que pour quelques variations de ce style pour chacune.
    </p>
    <p>
      Vous vous reposez et évaluez chaque rune afin d'élaborer la prophétie qui vous convient.
    </p>
    <ButtonVue :text="'Sortir de la salle'" @click="$emit('change', 'end')"></ButtonVue>
  </div>
</template>

<script lang="ts">
import Mutable from "@/components/Mutable.vue";
import ButtonVue from './Button.vue';
import type { Option } from "@/interfaces/option";

export default {
  components: {
    Mutable,
    ButtonVue
  },
  emits: ["change"],
  data: function () {
    return {
      nature: [
        {
          text: "déluges de pluie",
          times: ["la saison des moussons", "la saison sèche"],
          value: 0
        },
        {
          text: "feuilles des arbres",
          times: ["le printemps", "l'automne"],
          value: 1
        },
        {
          text: "éclairs du ciel",
          times: ["la saison des orages", "l'épisode sans nuages"],
          value: 0
        },
        {
          text: "vents des océans",
          times: ["la saison des tempêtes", "l'épisode du calme plat"],
          value: 1
        },
        {
          text: "neiges des montagnes",
          times: ["l'hiver", "l'été"],
          value: 1
        },
        {
          text: "rayons du soleil",
          times: ["l'aube", "le crépuscule"],
          value: 1
        },
        {
          text: "reflets de la lune",
          times: ["la pleine lune", "la nouvelle lune"],
          value: 1
        }
      ] as Option[],
      action: [
        {
          text: "tomber",
          value: -1
        },
        {
          text: "s'étendre",
          value: 0
        },
        {
          text: "s'épanouir",
          value: 0
        },
        {
          text: "prospérer",
          value: 0
        },
        {
          text: "disparaître",
          value: 1
        },
        {
          text: "s'évanouir",
          value: 1
        },
        {
          text: "s'éteindre",
          value: 1
        }
      ] as Option[],
      concept: [
        {
          text: "mensonges",
          value: -5
        },
        {
          text: "vérités",
          value: 5
        },
        {
          text: "inspirations",
          value: 4
        },
        {
          text: "espoirs",
          value: 4
        },
        {
          text: "regrets",
          value: -4
        },
        {
          text: "peurs",
          value: -4
        }
      ] as Option[],
      devenir: [
        {
          text: "illusions",
          value: -4
        },
        {
          text: "évidences",
          value: 4
        },
        {
          text: "réalité",
          value: 5
        },
        {
          text: "poussières",
          value: -4
        },
        {
          text: "volontés",
          value: 4
        },
        {
          text: "absurdités",
          value: -5
        },
      ] as Option[],
      duo1: [
        {
          text: "joie",
          value: 4
        },
        {
          text: "mort",
          value: -5
        },
        {
          text: "vie",
          value: 5
        },
        {
          text: "malheur",
          value: -4
        },
        {
          text: "plaisir",
          value: 4
        },
        {
          text: "douleur",
          value: -4
        },
      ] as Option[],
      duo2: [
        {
          text: "bonheur",
          value: 4
        },
        {
          text: "destruction",
          value: -5
        },
        {
          text: "création",
          value: 5
        },
        {
          text: "tristesse",
          value: -4
        },
        {
          text: "abondance",
          value: 4
        },
        {
          text: "misère",
          value: -4
        },
      ] as Option[],
      conclusion: [
        {
          text: "triomphe",
          value: 4
        },
        {
          text: "déclin",
          value: -4
        },
        {
          text: "chaos",
          value: -5
        },
        {
          text: "harmonie",
          value: 5
        },
        {
          text: "ascension",
          value: 4
        },
        {
          text: "défaite",
          value: -4
        },
      ] as Option[],
    }
  }
};

/*
- Equilibrer le système
- Pire fin
- Meilleure fin
- Bonne fin
- Mauvaise fin
- Donner l'option de ne pas entrer dans la pièce, et de la condamner ou d'y revenir, etc.
- Fins spéciales :
= Ne pas sortir de la pièce (ajouter des choix à 0)
= La prophétie ne se réalise pas (pires et meilleurs choix opposés)
= Ne pas entrer dans la pièce et la condamner: le mystère fait partie du mythe
*/

</script>

<style>
.centered {
  width: 80%;
  margin-right: auto;
  margin-left: auto;
}

.prophecy {
  -webkit-user-select: none;
  /* Safari */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* IE10+/Edge */
  user-select: none;
  /* Standard */
  font-style: italic;
}
</style>
