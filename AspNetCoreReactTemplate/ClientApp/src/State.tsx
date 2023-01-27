import { proxy } from 'valtio'

export const State = proxy({
  count: 0,
  text: 'hello'
})
