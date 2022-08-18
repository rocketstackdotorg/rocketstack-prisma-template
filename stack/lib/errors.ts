export const catcher: (
  error: Error,
  customMessage?: string,
  callback?: (error: Error) => void
) => null = (error, customMessage, callback) => {
  console.error(customMessage ?? '', error)
  if (callback != null) {
    callback(error)
  }
  return null
}
