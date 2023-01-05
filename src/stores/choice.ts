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
  }),
  actions: {
    setChoice: function (choice: Option, type: string) {
      this.choices[type] = choice;
    }
  }
})
