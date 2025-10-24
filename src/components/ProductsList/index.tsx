import Product from '../Product'
import { useState } from 'react'
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
  title: string
  description: string
  image: string
  button: string
  preco: number
  porcao?: string
}

export type Props = {
  products: Produto[]
}

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

  return (
    <>
      <Container>
        <div className="container">
          <List>
            {products.map((produto) => (
              <Product
                key={produto.id}
                title={produto.title}
                description={produto.description}
                image={produto.image}
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

              <ImagemProduto src={produtoSelecionado.image} />

              <div>
                <Nome>{produtoSelecionado.title}</Nome>

                <Detalhes>{produtoSelecionado.description}</Detalhes>

                {produtoSelecionado.porcao && (
                  <Informacao>Serve: {produtoSelecionado.porcao}</Informacao>
                )}

                <BotaoCarrinho>
                  Adicionar ao carrinho — R$
                  {produtoSelecionado.preco.toFixed(2)}
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
