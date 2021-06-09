import React, {useEffect} from 'react';
import {obtenerListApiAction} from '../actions/productosActions'
import {connect} from 'react-redux'

const Productos = ({obtenerListApiAction, list}) => {
    useEffect(()=>{
        obtenerListApiAction()
    },[])
    return(
        <>
         <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body"></div>
                        <h2 className="text-center my-5">Tienda Lía</h2>
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
                            })} 
                        </div>
                       </div>
                     </div>
                  </div>
        </>
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
export default connect(mapStateToProps,
    mapDispatchToProps)(Productos);