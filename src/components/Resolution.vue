<template>
  <div>
    <!-- <h2>{{ score }}</h2> -->
    <p>
      Vous rentrez finalement chez vous.
    </p>
    <p>
      Quelques temps après votre retour, alors que {{ randomTimeVerbe }} {{ time }}, vous repensez à la prophétie.
    </p>
    <div>
      <div v-if="isImpossible">
        <p>
          S'est-elle réalisée ? Difficile à dire.
        </p>
        <p>
          Vous avez fait de votre mieux pour l'équilibrer, ou en tout cas y introduire assez de contradictions pour éviter un désastre.
        </p>
        <p>
          Alors le grand désastre n'est certes pas arrivé. Mais les choses n'ont pas non plus l'air d'avoir changé en mieux.
        </p>
        <p>
          Les petites catastrophes continuent de se produire à intervalles réguliers. Les longs malheurs persistent.
        </p>
        <p>
          Mais les petits bonheurs et les espoirs aussi. Alors tout n'est pas perdu.
        </p>
        <p>
          Dans cette déplaisante incertitude, vous vous dites que la prochaine fois, vous choisirez votre camp.
        </p>
      </div>
      <div v-if="badEnding">
        <p>
          La destinée funeste qu'elle présageait s'est confirmée.
        </p>
        <p>
          Vos actes ont déclenché une série de désastres à travers le monde. Les choses ne vont pas en s'améliorant.
        </p>
        <p>
          Ce qui autrefois était supportable ne l'est plus, aux anciens malheurs s'ajoutent à présent des nouveaux.
        </p>
        <p>
          La planète devient hostile, les humains se détestent les uns les autres, rien ne va.
        </p>
        <p>
          Les espoirs de l'humanité s'amenuisent de jours en jours. Rares et brefs sont les lueurs de bonheur.
        </p>
        <p>
          Dans cette déchéance profonde, vous vous dites que vous avez bien obtenu ce que vous méritiez.
        </p>
      </div>
      <div v-if="worstEnding">
        <p>
          La calamité que la prophétie annonçait arrive.
        </p>
        <p>
          Votre sinistre dessein est en train de se réaliser sous vos yeux. L'humanité fait face à ses pires moments.
        </p>
        <p>
          Les anciens malheurs passent pour des réjouissances en comparaison à ce qui s'inflige dorénavant au monde.
        </p>
        <p>
          Les catastrophes naturelles et épidémies prolifèrent, les humains agonisent, c'est l'apocalypse.
        </p>
        <p>
          L'humanité succombe jour après jour à ces cataclysmes. Plus personne ne sait ce que sont la joie ou l'espoir.
        </p>
        <p>
          Dans cette fin des temps, vous vous dites que c'est bien fait et tant pis.
        </p>
      </div>
      <div v-if="goodEnding">Good ending</div>
      <div v-if="bestEnding">Best ending</div>
    </div>
    <ListEndings :end="ending" @change="change" />
  </div>
</template>

<script lang="ts">
import { useChoiceStore } from "@/stores/choice";
import ListEndings from "./ListEndings.vue";

export default {
  components: {
    ListEndings
  },
  setup: function () {
    const store = useChoiceStore();
    return {
      store
    }
  },
  emits: ["change"],
  data: function () {
    return {
      timeVerbe: ["domine", "culmine", "règne", "s'impose", "pointe"]
    }
  },
  computed: {
    time: function (): string {
      if (this.store.choices["nature"] != null) {
        const nature = this.store.choices["nature"];
        const action = this.store.choices["action"];
        const times = nature.times as string[];
        const index = (action.value as number < 0 ? nature.value : action.value) ?? 0 as number;
        return times[index % times.length];
      }
      return "";
    },
    randomTimeVerbe: function (): string {
      return this.timeVerbe[Math.floor(Math.random() * this.timeVerbe.length)];
    },
    firstScore: function (): number {
      const concept = this.store.choices.concept;
      const devenir = this.store.choices.devenir;
      return concept && devenir ? concept.value * devenir.value : 0;
    },
    secondScore: function (): number {
      const duo1 = this.store.choices.duo1;
      const duo2 = this.store.choices.duo2;
      const conclusion = this.store.choices.conclusion;
      return duo1 && duo2 && conclusion ? duo1.value + duo2.value + conclusion.value : 0;
    },
    score: function (): number {
      return this.firstScore + this.secondScore;
    },
    isImpossible: function (): boolean {
      return (this.firstScore > 0 && this.secondScore < -11) || (this.firstScore < 0 && this.secondScore > 11);
    },
    goodEnding: function (): boolean {
      return this.score > 10 && this.score < 40 && !this.isImpossible;
    },
    bestEnding: function (): boolean {
      return this.score === 40;
    },
    badEnding: function (): boolean {
      return this.score < -10 && this.score > -40 && !this.isImpossible;
    },
    worstEnding: function (): boolean {
      return this.score === -40;
    },
    ending: function (): string {
      if (this.worstEnding) {
        return "La pire fin";
      } else if (this.badEnding) {
        return "La mauvaise fin";
      } else if (this.goodEnding) {
        return "La bonne fin";
      } else if (this.bestEnding) {
        return "La meilleure fin";
      } else if (this.isImpossible) {
        return "La fin incertaine";
      }
      return ""
    }
  },
  methods: {
    change: function (status: string) {
      this.$emit('change', status);
    }
  }
};

</script>
