import React ,{ useEffect } from 'react';

//Actions de Redux
import {connect} from 'react-redux'
import { crearNuevoProductoAction } from '../actions/productosActions';
import {obtenerListApiAction} from '../actions/productosActions'

const NuevoProducto = (props) => {
    useEffect(()=>{
        obtenerListApiAction()
    },[])
    const {obtenerListApiAction, list} = props;
    console.log('props' + obtenerListApiAction)
    console.log('props' + list)

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Lista de Productos
                        </h2>
                        {/* <form>
                            <div className="form-grup">
                                <label>Nombre del Producto</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Nombre del producto'
                                    name='nombre'
                                />
                            </div>
                            <div className="form-grup">
                                <label>Precio del Producto</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Precio del producto'
                                    name='precio'
                                />
                            </div>
                            <button
                                // onClick={obtenerListApiAction()}
                                type='submit'
                                className='btn btn-primary font-weight-bold text-uppercase mt-4 d-block w-100'>
                                Agregar
                            </button>
                        </form> */}
                            <div>{list.map(item=>{
                                return(<>
                                    <div className="card-container">
                                        <p>{item.description}</p>
                                        <div className='imagenes'>
                                            <img className='imagen' src={item.image}/>
                                        </div>
                                        <p>{item.price}€</p>
                                    </div>
                                    </>
                                )
                            })}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    console.log(state.productos.productos)
    return {list:state.productos.productos}
  }


const mapDispatchToProps = dispatch => {
    return {
      obtenerListApiAction : () => dispatch(obtenerListApiAction())
    }
  }


  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(NuevoProducto);
