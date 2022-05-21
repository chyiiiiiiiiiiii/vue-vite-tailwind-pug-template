export const requestChecker = function <T>(res: any): T | null {
  if (res.data && Object.keys(res.data).length != 0) {
    return res.data
  } else {
    return null
  }
}
