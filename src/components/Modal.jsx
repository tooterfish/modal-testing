import { styled, keyframes } from 'styled-components'
import { useState, useEffect, useContext, cloneElement } from 'react'
import { ModalContext } from '../contexts/ModalProvider'

const emptyTransitions = {
  'overlayHide': {'anim': '', 'duration': ''},
  'overlayShow': {'anim': '', 'duration': ''},
  'innerHide': {'anim': '', 'duration': ''},
  'innerShow': {'anim': '', 'duration': ''}
}

const ModalOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;
background-color: rgba(0, 0, 0, 0.2);

// align-items: center;
// justify-content: center;
display: ${props => props.$display};

&.close {
  animation: ${props => props.$transitions.overlayHide.anim} 
  ${props => props.$transitions.overlayHide.duration} 
  forwards;
}
&.open {
  animation: ${props => props.$transitions.overlayShow.anim} 
  ${props => props.$transitions.overlayShow.duration}  
  forwards;
}
`

const ModalInner = styled.div`
  &.close {
    animation: ${props => props.$transitions.innerHide.anim} 
    ${props => props.$transitions.innerHide.duration}
    forwards;
  }
  &.open {
    animation: ${props => props.$transitions.innerShow.anim} 
    ${props => props.$transitions.innerShow.duration}
    forwards;
  }
`

export default function Modal() {
  const {modal, setModal} = useContext(ModalContext)
  const [state, setState] = useState({'display': 'none', 'animation': 'close', 'transitions': emptyTransitions})

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.keyCode === 27) {
        closeModal()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  })

  useEffect(() => {
    if (modal.content) {
      setState({'display': 'block', 'animation': 'open', 'transitions': modal.transitions})
    }
  }, [modal])


  function closeModal() {
    setState({...state, 'animation': 'close' })
    setTimeout(() => {
      setState({...state, 'display': 'none'})
      setModal({'content': '', 'transitions': emptyTransitions})
    }, 250)
  }

  return (
    <ModalOverlay className={state.animation} $display={state.display} $transitions={state.transitions}>
      <ModalInner className={state.animation} $transitions={state.transitions}>
        {modal.content ? cloneElement(modal.content, {'closeModal': closeModal}) : ''}
      </ModalInner>
    </ModalOverlay>
  )
}