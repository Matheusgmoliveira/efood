import { Modal } from '../../components/ProductsList/styles'
import { useParams } from 'react-router-dom'

const Foods = () => {
  const { id } = useParams()

  return (
    <>
      <Modal />
    </>
  )
}

export default Foods
