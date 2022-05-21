import { ElMessage } from 'element-plus'

export const enum MessageType {
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
}
export const showMessage = (msg: string, type: MessageType): void => {
  ElMessage({
    message: msg,
    type: type,
    grouping: true,
  })
}
