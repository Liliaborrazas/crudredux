import { combineReducers } from 'redux'
import productosReducer from './productosReducer';
import categoriasReducer from './categoriasReducer';
import categoriaJeweleryReducer from './categoriaJeweleryReducer';

export default combineReducers({
    productos: productosReducer,
    categorias:categoriasReducer,
    categoriaJewelery: categoriaJeweleryReducer
});