import { defineStore } from 'pinia'
import type { Option } from '@/interfaces/option'

export const useChoiceStore = defineStore('choice', {
  state: () => ({
    choices: {
      "nature": null as unknown as Option,
      "action": null as unknown as Option,
      "concept": null as unknown as Option,
      "devenir": null as unknown as Option,
      "duo1": null as unknown as Option,
      "duo2": null as unknown as Option,
      "conclusion": null as unknown as Option,
    } as { [type: string]: Option },
    endings: [] as string[],
    expired: 0
  }),
  getters: {
    allExpired: function (): boolean {
      return this.expired === 7;
    }
  },
  actions: {
    setChoice: function (choice: Option, type: string) {
      this.choices[type] = choice;
    },
    addEnding: function (ending: string) {
      if (this.endings.indexOf(ending) < 0) {
        this.endings.push(ending);
      }
      this.expired = 0;
    },
    incrementExpired: function () {
      this.expired++;
    }
  }
})
