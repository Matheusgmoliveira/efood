import { HeaderBar, LinkCarrinho, LinkRestaurante } from './styles'
import logo from '../../assets/images/logo.png'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const openCart = () => {
    dispatch(open())
  }
  return (
    <>
      <HeaderBar>
        <LinkRestaurante href="/">Restaurante</LinkRestaurante>
        <img src={logo} alt="logo-efood" />
        <LinkCarrinho onClick={openCart}>
          {' '}
          {items.length} produto(s) no carrinho
        </LinkCarrinho>
      </HeaderBar>
    </>
  )
}
export default Header
