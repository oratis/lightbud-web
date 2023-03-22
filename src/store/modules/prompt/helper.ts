import { ss } from '@/utils/storage'
import PromptInput from '../../../assets/prompts.json'

const LOCAL_NAME = 'promptStore'



export type PromptListItem = {
  act: string;
  prompt: string;
}

export type PromptList = Array<PromptListItem>

export interface PromptStore {
  promptList: PromptList
}

export function getLocalPromptList(): PromptStore {
  const promptStore: PromptStore | undefined = ss.get(LOCAL_NAME)
  return promptStore ?? { promptList: [] }
}

export function setLocalPromptList(promptStore: PromptStore): void {
  ss.set(LOCAL_NAME, promptStore)
}

// 使用JSON数据更新promptList
setLocalPromptList({promptList: PromptInput.promptList})
