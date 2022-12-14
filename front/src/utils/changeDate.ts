export const convertDateTime = (dt: Date): string => {
  const date = dt.toString()
  const year = date.slice(0, 4)
  const month = date.slice(5, 7)
  const day = date.slice(8, 10)
  const hour = date.slice(11, 13)
  const minute = date.slice(14, 16)
  const second = date.slice(17, 19)
  const newdate = `${day}/${month}/${year} ${hour}:${minute}:${second}`
  return newdate
}
