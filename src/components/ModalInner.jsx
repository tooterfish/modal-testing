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
  &.open {
    animation: ${openAnim} 2s forwards;
  }
  &.close {
    animation: ${closeAnim} .5s forwards;
  }
`

const Container2 = styled.div`
  position: relative;
  padding: 32px;
  width: 480px;
  height: 480px;
  background-color: whitesmoke;
`

export default function ModalInner({closeOverlay}) {
  const [state, setState] = useState()
  const {modal} = useContext(ModalContext)

  function close() {
    setState('close')
    closeOverlay()
  }

  useEffect(() => {
    if (modal) setState('open')
  }, [modal])

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.keyCode === 27) {
        close()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  })


  return (
    <>
    <Container className={state}>
      <Container2>
      <button onClick={close}>close</button>
      </Container2>
    </Container>
    </>
  )
}