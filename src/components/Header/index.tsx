import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

function Header() {
  return(
    <Container>
      <Content>
        <img src={logoImg} alt="dtmoney logo" />
        <button type="button">Nova Transação</button>
      </Content>
    </Container>
  )
}

export { Header }