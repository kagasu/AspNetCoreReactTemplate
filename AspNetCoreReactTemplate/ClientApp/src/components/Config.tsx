import { useSnapshot } from 'valtio'
import { State } from '../State'
import { Button } from 'primereact/button';

export function Config() {
  const snap = useSnapshot(State)

  return (
    <>
      <h1>Config</h1>
      <Button onClick={() => State.count++}>{`count: ${snap.count}`}</Button>
    </>
  )
}
