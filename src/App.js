import React from 'react';
import Header from './components/Header';
import Productos from './components/Productos'
import CategoriasProducto from './components/CategoriasProducto';
import CategoriaJewelery from './components/CategoriaJewelery';
import EditarProducto from './components/EditarProducto'
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
///Redux
import {Provider} from 'react-redux';
import store from './store'

function App() {
  return (
      <Router>
          <Provider store={store}>
     <Header/>
     <div className='container mt-5'>
         <Switch>
             <Route exact path="/" component={Productos}/>
             <Route exact path="/productos/nuevo" component={CategoriasProducto}/>
             <Route exact path="/productos/categoria/jewelery" component={CategoriaJewelery}/>
             <Route exact path="/productos/editar/:id" component={EditarProducto}/>
         </Switch>
     </div>
     </Provider>
      </Router>
  );
}

export default App;
