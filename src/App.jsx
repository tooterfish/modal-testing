import './App.css'

import {useContext} from 'react'
import { ModalContext } from './contexts/ModalProvider'
import { styled } from 'styled-components'

import Modal from './components/Modal'
import {ModalContent} from './components/ModalContent'
import transitions from './components/transitions'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & button {
    margin: 4px;
    padding: 4px;
  }
`

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
`

function App() {
  const {setModal} = useContext(ModalContext)

  function clickA() {
    setModal({'content': <ModalContent />, 'transitions': transitions.base})
  }

  function clickB() {
    setModal({'content': <ModalContent />, 'transitions': transitions.slideFromLeft})
  }

  function clickC() {
    setModal({'content': <ModalContent />, 'transitions': transitions.slideFromTopToBottom})
  }

  function clickD() {
    setModal({'content': <ModalContent />, 'transitions': transitions.skew})
  }

  return (
    <>
    <Container>
      <h1>Modal Test</h1>
      <Buttons>
        <button onClick={clickA}>Modal 1</button>
        <button onClick={clickB}>Modal 2</button>
        <button onClick={clickC}>Modal 3</button>
        <button onClick={clickD}>Modal 4</button>
      </Buttons>
    </Container>
    <Modal />
    </>
  )
}

export default App
