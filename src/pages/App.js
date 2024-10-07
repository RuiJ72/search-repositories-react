import gitlogo from '../assets/logo.svg'

import { Container } from './styles';

function App() {
  return (
    <Container>
      <img src={gitlogo} width={72} height={72} alt="logo.svg"/>
    </Container>
  );
}

export default App;
