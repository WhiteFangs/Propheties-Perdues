<template>
  <div>
    <!-- <h2>{{ score }}</h2> -->
    <div>
      Quelques temps après être sorti, alors que {{ randomTimeVerbe }} {{ time }},
    </div>
    <div>
      TODO
    </div>
    <ListEndings :end="ending" />
  </div>
</template>

<script lang="ts">
import type { Option } from "@/interfaces/option";
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
      timeVerbe: ["dominait", "culminait", "régnait", "triomphait"]
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
  }
};

</script>
