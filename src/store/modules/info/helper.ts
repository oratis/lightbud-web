import { ss } from '@/utils/storage'

const LOCAL_NAME = 'budinfoStorage'

export interface budInfo {
  aiid: number
  name: string
  temptype: number
  presence: number
  frequency: number
}

export interface budState {
  budInfo: BudInfo
}

export function defaultSetting(): budState {
  return {
    budInfo: {
    	aiid: '6727',
      name: '轻伴',
      temptype: '1',
      presence: '1',
      frequency: '1',
    },
  }
}

export function getLocalState(): budState {
  const localSetting: budState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: budState): void {
  ss.set(LOCAL_NAME, setting)
}
