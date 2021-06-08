import React from 'react';

//Actions de Redux
import {connect} from 'react-redux'
import { crearNuevoProductoAction } from '../actions/productosActions';
import {obtenerListApiAction} from '../actions/productosActions'

const NuevoProducto = (props) => {
    const {obtenerListApiAction} = props;
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Producto
                        </h2>
                        <form>
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
                                onClick={obtenerListApiAction()}
                                type='submit'
                                className='btn btn-primary font-weight-bold text-uppercase mt-4 d-block w-100'>
                                Agregar
                            </button>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
      obtenerListApiAction : () => dispatch(obtenerListApiAction())
    }
  }


  export default connect(
    null,
    mapDispatchToProps
  )(NuevoProducto);
