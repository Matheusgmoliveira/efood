import { HeaderBar, LinkCarrinho, LinkRestaurante } from './styles'
import logo from '../../assets/images/logo.png'

const Header = () => (
  <>
    <HeaderBar>
      <LinkRestaurante href="/">Restaurante</LinkRestaurante>
      <img src={logo} alt="logo-efood" />
      <LinkCarrinho>0 produto(s) no carrinho</LinkCarrinho>
    </HeaderBar>
  </>
)
export default Header
