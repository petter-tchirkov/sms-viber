export interface IBill {
  date: string[]
  sum: number
  status: { code: number; name: string }
  type: string
  number: number
  link: string
}
