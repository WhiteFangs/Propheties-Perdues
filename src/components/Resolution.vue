<template>
  <div class="story">
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
    }
  }
};

</script>

<style>
.story {
  margin: 2em;
}
</style>
