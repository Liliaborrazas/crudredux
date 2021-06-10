import { combineReducers } from 'redux'
import productosReducer from './productosReducer';
import categoriasReducer from './categoriasReducer';
import categoriaJewelery from './categoriaJeweleryReducer';

export default combineReducers({
    productos: productosReducer,
    categorias:categoriasReducer,
    categoriaJewelery: categoriaJewelery
});