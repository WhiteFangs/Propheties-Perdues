<template>
    <span class="mutable" @click="change">{{ options[index].text }}</span>
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
    props: {
        options: {
            type: Array as () => Option[],
            default: []
        },
        type: {
            type: String as () => string,
            default: ""
        }
    },
    data: function () {
        return {
            index: 0
        };
    },
    methods: {
        change: function () {
            if (this.index < this.options.length - 1) {
                this.index = (this.index + 1) % this.options.length;
                this.store.setChoice(this.options[this.index], this.type);
            }
        }
    },
    mounted: function () {
        this.store.setChoice(this.options[this.index], this.type);
    }
}

</script>

<style>
.mutable {
    font-weight: bold;
    cursor: pointer;
}
</style>
