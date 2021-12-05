import CartProvider  from './hooks/useCart';
import Rotas from './Rotas';
import {GlobalStyled} from './styles/globa'


function App() {
  return (
    <CartProvider>
      <div>

        <Rotas/>
        <GlobalStyled/>

      </div>
    </CartProvider>
  );
}

export default App;
