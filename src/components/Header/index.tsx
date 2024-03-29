import { useState } from 'react';
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'
import Modal from 'react-modal'

interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

function Header({onOpenNewTransactionModal}: HeaderProps) {

  return(
    <Container>
      <Content>
        <img src={logoImg} alt="dtmoney logo" />
        <button type="button" onClick={onOpenNewTransactionModal}>Nova Transação</button>
      </Content>
    </Container>
  )
}

export { Header }