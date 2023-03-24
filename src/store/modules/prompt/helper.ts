import { ss } from '@/utils/storage'
import promptInput from '@/assets/prompts.json'

const LOCAL_NAME = 'promptStore'

export interface PromptItem {
  key: string
  value: string
}

export interface PromptStore {
  promptList: PromptItem[]
}

export function getLocalPromptList(): PromptStore {
  const promptsFromStorage: PromptStore | undefined = ss.get(LOCAL_NAME)

  if (promptsFromStorage !== undefined)
    return promptsFromStorage

  // 基于存储 json 直接提供全新提示列表
  if (promptInput?.valueList?.length > 0)
    return { promptList: [...promptInput.valueList] }

  return { promptList: [] }
}

export function setLocalPromptList(promptStore: PromptStore): void {
  ss.set(LOCAL_NAME, promptStore)
}
