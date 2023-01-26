<template>
  <main class="story">
    <Transition>
      <Home @change="setStatus" v-if="ready && status === 'home'" />
    </Transition>
    <Transition>
      <Introduction @change="setStatus" v-if="ready && status === 'intro'" />
    </Transition>
    <Transition>
      <Hesitation @change="setStatus" v-if="ready && status === 'hesitation'" />
    </Transition>
    <Transition>
      <Porte @change="setStatus" v-if="ready && status === 'porte'" />
    </Transition>
    <Transition>
      <Salle @change="setStatus" v-if="ready && status === 'salle'" />
    </Transition>
    <Transition>
      <Prophetie @change="setStatus" v-if="ready && status === 'prophecy'" />
    </Transition>
    <Transition>
      <Resolution @change="setStatus" v-if="ready && status === 'end'" />
    </Transition>
    <Transition>
      <Quit @change="setStatus" v-if="ready && status === 'quit'" />
    </Transition>
    <Transition>
      <Rentre @change="setStatus" v-if="ready && status === 'rentre'" />
    </Transition>
    <Transition>
      <Stay @change="setStatus" v-if="ready && status === 'stay'" />
    </Transition>
    <Transition>
      <Out @change="setStatus" v-if="ready && status === 'out'" />
    </Transition>
    <Transition>
      <Credits @change="setStatus" v-if="ready && status === 'credits'" />
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
import Stay from "../components/Stay.vue";
import Out from "../components/Out.vue";
import Credits from "../components/Credits.vue";
import Home from "../components/Home.vue";

export default {
  components: {
    Introduction,
    Salle,
    Resolution,
    Hesitation,
    Porte,
    Prophetie,
    Quit,
    Rentre,
    Stay,
    Out,
    Credits,
    Home
  },
  data: function () {
    return {
      status: "home",
      ready: true
    }
  },
  methods: {
    setStatus: function (status: string) {
      this.status = status;
    }
  },
  watch: {
    status: function () {
      this.ready = false;
      setTimeout(() => {
        this.ready = true;
        window.scrollTo(0, 0);
      }, 1500);
    }
  }
};
</script>

<style>
html {
  color: #363124;
  font-size: 18pt;
  background: #FFF1E6;
}

.story {
  margin: auto;
  margin-top: 2em;
  max-width: 800px;
  font-family: 'Times New Roman', Times, serif;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-active .button-container,
.v-leave-active .button-container {
  visibility: hidden;
  pointer-events: none;
}
</style>
