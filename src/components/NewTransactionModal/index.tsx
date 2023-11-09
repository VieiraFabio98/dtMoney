import Modal from 'react-modal';
import { Container } from './style';

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>Cadastrar transação</h2>

        <input
          placeholder='Título'
        /> 

        <input
          type='number'
          placeholder='Valor'
        /> 

        <input
          placeholder='Categoria'
        /> 

        <button 
          type="submit"
          placeholder='Submit'
        >Cadastrar</button>

      </Container>
    </Modal>
  )
}

export { NewTransactionModal }