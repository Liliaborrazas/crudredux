import React, {useEffect, useState} from 'react';
import {obtenerListApiAction} from '../actions/productosActions'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
////Porque tengo que importar la funcion y pasarla como props
///El mapdispatchToProps no entiendo bien, si ya importaste la funcion
const Productos = ({obtenerListApiAction, list}) => {
    const [isOpen, setIsOpen] = useState(false);
    const buttonClassName = isOpen ? 'show' : '';
    const buttonStyle = isOpen
        ? {
              position: 'absolute',
              transform: 'translate3d(0px, 38px, 0px)',
              top: '0px',
              left: '0px',
              willChange: 'transform',
          }
        : {};
    // useEffect(()=>{
    //     obtenerListApiAction()
    // },[])
    obtenerListApiAction()
    return(
        <>
         <div className="row justify-content-center">
         <Link to={"/productos/nuevo"}
            className="btn btn-danger nuevo-post d-block d-md-inline-block mb-4">Categorias Productos</Link>
            <div class="dropdown">
            <button 
            class="btn btn-danger nuevo-post d-block d-md-inline-block mb-4 dropdown-toggle" 
            type="button" 
            onClick={() => setIsOpen(!isOpen)}
            id="dropdownMenuButton" 
            data-toggle="dropdown" 
            aria-haspopup="true" 
            aria-expanded="false">
                Categoria de Productos
            </button>
            <div 
            className={`dropdown-menu ${buttonClassName}`} 
            aria-labelledby="dropdownMenuButton"       
            style={buttonStyle}
            >
                <a class="dropdown-item" href="#">jewelery</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
            </div>
            </div>
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
const mapStateToProps = (state) => {

    console.log(state.productos.productos)
    return {list:state.productos.productos}
  }


// const mapDispatchToProps = dispatch => {
//     return {
//       obtenerListApiAction : () => dispatch(obtenerListApiAction())
//     }
//   }

const mapDispatchToProps = {
    obtenerListApiAction,
}
export default connect(mapStateToProps,
    mapDispatchToProps)(Productos);