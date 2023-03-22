import { ss } from '@/utils/storage'
import promptInput from '@/assets/prompts.json'

const LOCAL_NAME = 'promptStore'

export type PromptList = []

export interface PromptItem {
  key: string
  value: string
}

export interface PromptStore {
  promptList: PromptItem[]
}

export function getLocalPromptList(): PromptStore {
  const promptStore: PromptStore | undefined = ss.get(LOCAL_NAME)
  return promptStore ?? { promptList: promptInput }
}

export function setLocalPromptList(promptStore: PromptStore): void {
  ss.set(LOCAL_NAME, promptStore)
}

