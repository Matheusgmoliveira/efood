import { HeaderBar } from './styles'
import logo from '../../assets/images/logo.png'

const Hero = () => (
  <>
    <HeaderBar>
      <img src={logo} alt="logo-efood" />
      <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
    </HeaderBar>
  </>
)
export default Hero
