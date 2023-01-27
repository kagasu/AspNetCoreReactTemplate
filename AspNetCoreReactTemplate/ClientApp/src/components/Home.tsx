import { useSnapshot } from 'valtio'
import { State } from '../State'
import { Button } from 'primereact/button';

export function Home() {
  const snap = useSnapshot(State)

  return (
    <>
      <h1>Home</h1>
      <Button onClick={() => State.count++}>{`count: ${snap.count}`}</Button>
    </>
  )
}
