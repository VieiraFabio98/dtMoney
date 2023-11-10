import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from './style';
import closeImg from '../../assets/fechar.svg';
import incomeImg from '../../assets/entradas.svg';
import outcomeImg from '../../assets/saidas.svg';

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
      <button 
        type='button'
        onClick={onRequestClose}
        className='react-modal-close'
      > <img src={closeImg} alt='fechar'/> </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input
          placeholder='Título'
        /> 

        <input
          type='number'
          placeholder='Valor'
        /> 

        <TransactionTypeContainer>
          <button
            placeholder='Entradas'
          > 
            <img src={incomeImg} alt="entrada"/> 
            <span>Entrada</span>
          </button>

          <button
            placeholder='Saidas'
          > 
            <img src={outcomeImg}/> 
            <span>Saídas</span>
          </button>

        </TransactionTypeContainer>

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