<template>
  <div>
    <!-- <h2>{{ score }}</h2> -->
    <div>
      Quelques temps après être sorti, alors que {{ randomTimeVerbe }} {{ time }},
    </div>
    <div>
      <div v-if="isImpossible">Impossible</div>
      <div v-if="goodEnding">Good ending</div>
      <div v-if="badEnding">Bad ending</div>
      <div v-if="bestEnding">Best ending</div>
      <div v-if="worstEnding">Worst ending</div>
    </div>
    <div>
      TODO
    </div>
  </div>
</template>

<script lang="ts">
import type { Option } from "@/interfaces/option";
import { useChoiceStore } from "@/stores/choice";

export default {
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
    }
  }
};

</script>
