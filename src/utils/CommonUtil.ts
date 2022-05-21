import { ElMessage } from 'element-plus'

export const isObjectChildEmpty = (obj: any, skipKey: string): boolean => {
  for (const s of Object.keys(obj)) {
    if (skipKey) {
      if (s === skipKey) {
        continue
      }
    }
    if (!obj[s]) {
      ElMessage(`資料不可為空 ${s}`)
      return true
    }
  }
  return false
}


export const clearObject = (obj: any, skipKey: string): void => {
  for (const s of Object.keys(obj)) {
    if (skipKey) {
      if (s === skipKey) {
        continue
      }
    }
    obj[s] = null
  }
}
