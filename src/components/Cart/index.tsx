import {
  Overlay,
  CartContainer,
  Sidebar,
  Botao,
  Prices,
  Cartitem
} from './styles'
import { formataPreco } from '../ProductsList'
import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <Cartitem key={item.id}>
              <img src={item.foto} />
              <div>
                <h3>{item.nome}</h3>
                <p>{formataPreco(item.preco)}</p>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </Cartitem>
          ))}
        </ul>
        <Prices>
          <p>Valor total</p>
          <p>{formataPreco(getTotalPrice())}</p>
        </Prices>

        <Botao title="Clique aqui para continuar o pedido" type="button">
          Continuar com a entrega
        </Botao>
      </Sidebar>
    </CartContainer>
  )
}
export default Cart
