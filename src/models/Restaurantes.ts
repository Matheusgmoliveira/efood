class Restaurantes {
  title: string
  description: string
  image: string
  nota: string
  infos: string[]
  botao: string

  id: number

  constructor(
    id: number,
    title: string,
    description: string,
    image: string,
    nota: string,
    infos: string[],
    botao: string
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
    this.nota = nota
    this.infos = infos
    this.botao = botao
  }
}

export default Restaurantes
