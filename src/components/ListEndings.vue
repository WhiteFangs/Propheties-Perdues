<template>
    <div class="flex">
        <div class="gutter"></div>
        <div>
            <div class="end">
                {{ end }}
            </div>
            <div class="centered">
                <ButtonVue :text="'Rejouer'" @click="$emit('change', 'intro')"></ButtonVue>
            </div>
            <div class="ending" v-for="ending in endings" :key="ending"
                :class="{ 'done': store.endings.indexOf(ending) > -1 }">
                {{ ending }}
            </div>
            <div class="centered">
                <ButtonVue :text="'Crédits'" @click=""></ButtonVue>
            </div>
        </div>
        <div class="gutter"></div>
    </div>
</template>

<script lang="ts">
import ButtonVue from './Button.vue';
import { useChoiceStore } from "@/stores/choice";

export default {
    components: {
        ButtonVue
    },
    emits: ["change"],
    setup: function () {
        const store = useChoiceStore();
        return {
            store
        }
    },
    props: {
        end: {
            type: String,
            default: ""
        }
    },
    data: function () {
        return {
            endings: ["La pire fin", "La mauvaise fin", "La bonne fin", "La meilleure fin", "La fin tranquille", "La fin certaine", "La fin incertaine"]
        }
    },
    mounted: function () {
        this.store.addEnding(this.end);
    }
}
</script>

<style>
.flex {
    display: flex;
    flex-direction: row;
}

.flex .gutter {
    flex: 1;
}

.centered {
    text-align: center;
    margin: 1em auto;
}

.end {
    text-align: center;
    text-transform: uppercase;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin: 3em 0;
    font-weight: bold;
}

.ending {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.ending.done {
    text-decoration: line-through;
}
</style>
