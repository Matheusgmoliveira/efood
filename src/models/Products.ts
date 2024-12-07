class Produtos {
  title: string
  description: string
  image: string
  button: string
  id: number

  constructor(
    title: string,
    description: string,
    image: string,
    button: string,
    id: number
  ) {
    this.id = id
    this.title = title
    this.image = image
    this.button = button
    this.description = description
  }
}

export default Produtos
