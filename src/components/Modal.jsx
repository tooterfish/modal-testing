import { styled, keyframes } from 'styled-components'
import { useState, useEffect, useContext, cloneElement } from 'react'
import { ModalContext } from '../contexts/ModalProvider'

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);

  align-items: center;
  justify-content: center;
  display: ${props => props.$display};

  &.hide {
    animation: ${fadeOut} 0.2s forwards;
  }
  &.show {
    animation: ${fadeIn} 0.2s forwards;
  }
`

export default function Modal() {
  const {modal, setModal} = useContext(ModalContext)
  const [state, setState] = useState({'display': 'none', 'animation': 'hide'})

  useEffect(() => {
    if (modal) {
      setState({'display': 'flex', 'animation': 'show'})
    }
  }, [modal])


  function closeOverlay() {
    setState({...state, 'animation': 'hide' })
    setTimeout(() => {
      setState({...state, 'display': 'none'})
      setModal('')
    }, 250)
  }

  return (
    <ModalOverlay className={state.animation} $display={state.display}>
      {modal ? cloneElement(modal, {'closeOverlay': closeOverlay}) : ''}
    </ModalOverlay>
  )
}