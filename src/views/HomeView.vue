<template>
  <main class="story">
    <Transition>
      <Introduction @change="setStatus" v-if="status === 'intro'" />
    </Transition>
    <Transition>
      <Hesitation @change="setStatus" v-if="status === 'hesitation'" />
    </Transition>
    <Transition>
      <Porte @change="setStatus" v-if="status === 'porte'" />
    </Transition>
    <Transition>
      <Salle @change="setStatus" v-if="status === 'salle'" />
    </Transition>
    <Transition>
      <Prophetie @change="setStatus" v-if="status === 'prophecy'" />
    </Transition>
    <Transition>
      <Resolution @change="setStatus" v-if="status === 'end'" />
    </Transition>
    <Transition>
      <Quit @change="setStatus" v-if="status === 'quit'" />
    </Transition>
    <Transition>
      <Rentre @change="setStatus" v-if="status === 'rentre'" />
    </Transition>
  </main>
</template>

<script lang="ts">
import Hesitation from "@/components/Hesitation.vue";
import Porte from "@/components/Porte.vue";
import Introduction from "@/components/Introduction.vue";
import Salle from "../components/Salle.vue";
import Resolution from "../components/Resolution.vue";
import Prophetie from "../components/Prophetie.vue";
import Quit from "../components/Quit.vue";
import Rentre from "../components/Rentre.vue";

export default {
  components: {
    Introduction,
    Salle,
    Resolution,
    Hesitation,
    Porte,
    Prophetie,
    Quit,
    Rentre
  },
  data: function () {
    return {
      status: "intro"
    }
  },
  methods: {
    setStatus: function (status: string) {
      this.status = status;
    }
  }
};
</script>

<style>
html {
  color: #363124;
  font-size: 1.5em;
  background: #FFF1E6;
}

.story {
  margin: 2em;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-active {
  transition-delay: 1.5s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-active button,
.v-leave-active button {
  visibility: hidden;
}
</style>
