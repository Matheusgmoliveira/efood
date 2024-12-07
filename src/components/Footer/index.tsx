import { Container, Descricao } from './styles'
import Logo from '../../assets/images/logo.png'
import RedesSociais from '../../assets/images/redes sociais.png'
const Footer = () => (
  <div>
    <Container>
      <img src={Logo}></img>
      <img src={RedesSociais} style={{ marginTop: '32px' }}></img>
      <Descricao>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </Descricao>
    </Container>
  </div>
)

export default Footer
