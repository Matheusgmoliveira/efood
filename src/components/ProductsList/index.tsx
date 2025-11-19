import Product from '../Product'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { add, open } from '../../store/reducers/cart'
import {
  Banner,
  Container,
  Modal,
  List,
  Informacao,
  ImagemProduto,
  Close,
  Detalhes,
  BotaoCarrinho,
  Nome
} from './styles'

import close from '../../assets/images/close 1.png'

export type Produto = {
  id: number
  nome: string
  descricao: string
  foto: string
  button: string
  preco: number
  porcao?: string
}

export type Props = {
  products: Produto[]
}
export const formataPreco = (valor: number) =>
  valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

const ProductsList = ({ products }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(
    null
  )

  const abrirModal = (produto: Produto) => {
    setProdutoSelecionado(produto)
    setModalEstaAberto(true)
  }

  const fecharModal = () => {
    setModalEstaAberto(false)
    setProdutoSelecionado(null)
  }
  const dispatch = useDispatch()
  const addToCart = () => {
    if (produtoSelecionado) {
      dispatch(add(produtoSelecionado))
      dispatch(open())
      fecharModal()
    }
  }

  return (
    <>
      <Container>
        <div className="container">
          <List>
            {products.map((produto) => (
              <Product
                key={produto.id}
                title={produto.nome}
                description={produto.descricao}
                image={produto.foto}
                button={produto.button}
                onClick={() => abrirModal(produto)} // 👈 Aqui passa o produto clicado
              />
            ))}
          </List>
        </div>
      </Container>

      {produtoSelecionado && (
        <Modal className={modalEstaAberto ? 'visivel' : ''}>
          <div className="container">
            <Banner>
              <Close src={close} onClick={fecharModal} />

              <ImagemProduto src={produtoSelecionado.foto} />

              <div>
                <Nome>{produtoSelecionado.nome}</Nome>

                <Detalhes>{produtoSelecionado.descricao}</Detalhes>

                {produtoSelecionado.porcao && (
                  <Informacao>Serve: {produtoSelecionado.porcao}</Informacao>
                )}

                <BotaoCarrinho onClick={addToCart}>
                  Adicionar ao carrinho —
                  {formataPreco(produtoSelecionado.preco)}
                </BotaoCarrinho>
              </div>
            </Banner>

            <div className="overlay" onClick={fecharModal}></div>
          </div>
        </Modal>
      )}
    </>
  )
}

export default ProductsList
