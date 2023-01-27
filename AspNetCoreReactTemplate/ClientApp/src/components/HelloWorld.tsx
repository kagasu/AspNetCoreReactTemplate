import { useEffect, useState } from 'react'
// import { useSnapshot } from 'valtio'
// import { State } from '../State'

export function HelloWorld() {
  // const snap = useSnapshot(State)

  const [text, setText] = useState<string>()

  useEffect(() => {
    async function asyncFunction (): Promise<void> {
      const response = await fetch('/api/helloworld')
      const text = await response.text()
      setText(text)
    }

    asyncFunction()
  }, [])

  return (
    <>
      <h1>{text}</h1>
    </>
  )
}
