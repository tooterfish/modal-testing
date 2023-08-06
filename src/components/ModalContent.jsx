import { styled } from 'styled-components'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  padding: 32px;
  width: 400px;
  height: 400px;
  background-color: whitesmoke;

  & button {
    padding: 4px;
  }
`

export function ModalContent({closeModal}) {

  function close() {
    closeModal()
  }

  return <Container>
    <Content>
      <button onClick={close}>close</button>
    </Content>
  </Container>
}