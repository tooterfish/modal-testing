import './App.css'

import {useContext} from 'react'
import { ModalContext } from './contexts/ModalProvider'
import { styled } from 'styled-components'

import Modal from './components/Modal'
import ModalInner from './components/ModalInner'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function App() {
  const {setModal} = useContext(ModalContext)

  function click() {
    setModal(<ModalInner />)
  }

  return (
    <>
    <Container>
      <h1>Modal Test</h1>
      <button onClick={click}>open</button>
    </Container>
    <Modal />
    </>
  )
}

export default App
