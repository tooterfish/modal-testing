import {styled, keyframes} from 'styled-components'

import { useState, useContext, useEffect } from 'react'
import { ModalContext } from '../contexts/ModalProvider'

const openAnim = keyframes`
  0%, 10% {transform: rotateZ(0);}
  15% {transform: rotateZ(-2deg)}
  20% {transform: rotateZ(2deg)}
  25% {transform: rotateZ(-1deg)}
  30% {transform: rotateZ(1deg)}
  35% {transform: rotateZ(0)}
  40%, 100% {transform: rotateZ(0)}
`
const closeAnim = keyframes`
  0% {transform: translateY(0)}
  100% {transform: translateY(-1000px)}
`

const Container = styled.div`
  position: relative;
  padding: 32px;
  width: 480px;
  height: 480px;
  background-color: whitesmoke;

  &.open {
    animation: ${openAnim} 2s forwards;
  }
  &.close {
    animation: ${closeAnim} .5s forwards;
  }
`

export default function ModalInner({closeOverlay}) {
  const [state, setState] = useState()
  const {modal} = useContext(ModalContext)

  useEffect(() => {
    if (modal) setState('open')
  }, [modal])

  function close() {
    setState('close')
    closeOverlay()
  }

  return (
    <>
    <Container className={state}>
      <button onClick={close}>close</button>
    </Container>
    </>
  )
}