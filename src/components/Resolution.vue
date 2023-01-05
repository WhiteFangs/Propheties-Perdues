<template>
  <div class="story">
    <h2>{{ score }}</h2>
    <div>
      Quelques temps après être sorti, alors que {{ randomTimeVerbe }} {{ time }},
    </div>
    <div>

    </div>
    <div>

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
    score: function (): number {
      let score = 0;
      const concept = this.store.choices.concept;
      const devenir = this.store.choices.devenir;
      if (concept && devenir) {
        score += concept.value * devenir.value;
      }
      const duo1 = this.store.choices.duo1;
      const duo2 = this.store.choices.duo2;
      const conclusion = this.store.choices.conclusion;
      if (duo1 && duo2 && conclusion) {
        score += duo1.value + duo2.value + conclusion.value;
      }
      return score;
    }
  }
};

</script>

<style>
.story {
  margin: 2em;
}
</style>
