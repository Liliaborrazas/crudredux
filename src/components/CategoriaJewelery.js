import React, {useEffect} from 'react';
import {categoriaJeweleryActions} from '../actions/categoriaJeweleryActions'
import {connect} from 'react-redux'

const CategoriaJewelery = ({categoriaJeweleryActions, list, id}) => {
    console.log(id)
    useEffect(()=>{
        categoriaJeweleryActions()
    },[])
    return(
        <>
         <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body"></div>
                        <h2 className="text-center my-5">Lista de categoría jewelery</h2>
                        <div>{list.map(item=>{
                                return(<>
                                    <div className="card-container">
                                        <h2>{item.title}</h2>
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
    console.log(state.categoriaJewelery.categorias)
    return {list:state.categoriaJewelery.categorias}
  }


const mapDispatchToProps = dispatch => {
    return {
      categoriaJeweleryActions : () => dispatch(categoriaJeweleryActions())
    }
  }
export default connect(mapStateToProps,
    mapDispatchToProps)(CategoriaJewelery);