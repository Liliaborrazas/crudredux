import React ,{ useEffect } from 'react';
import {Link} from 'react-router-dom'

//Actions de Redux
import {connect} from 'react-redux'
import {categoriasActions} from '../actions/categoriasActions'

const CategoriasProducto = (props) => {
    useEffect(()=>{
        categoriasActions()
    },[])
    const {categoriasActions, list} = props;
    console.log('props' + categoriasActions)
    console.log('props' + list)

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Categorias de busqueda:
                        </h2>
                            <div>{list.map(item=>{
                                if(item.includes('jewelery')){
                                    return(<>
                                        <div className="card-container">
                                        <Link to={"/productos/categoria/jewelery"}className="btn btn-danger nuevo-post d-block d-md-inline-block">
                                            <button className="btn btn-danger nuevo-post d-block d-md-inline-block" id={item}>{item}</button>
                                             </Link>
                                        </div>
                                        </>
                                    )
                                }else if(item.includes('electronics')){
                                    return(<>
                                        <div className="card-container">
                                        <Link to={"/productos/categoria/electronics"}className="btn btn-danger nuevo-post d-block d-md-inline-block">
                                            <button className="btn btn-danger nuevo-post d-block d-md-inline-block" id={item}>{item}</button>
                                             </Link>
                                        </div>
                                        </>
                                    )
                                }else if(item.includes("men's clothing")){
                                    return(<>
                                        <div className="card-container">
                                        <Link to={"/productos/categoria/men's clothing"}className="btn btn-danger nuevo-post d-block d-md-inline-block">
                                            <button className="btn btn-danger nuevo-post d-block d-md-inline-block" id={item}>{item}</button>
                                             </Link>
                                        </div>
                                        </>
                                    )
                                } else if(item.includes("women's clothing")){
                                    return(<>
                                        <div className="card-container">
                                        <Link to={"/productos/categoria/women-clothing"}className="btn btn-danger nuevo-post d-block d-md-inline-block">
                                            <button className="btn btn-danger nuevo-post d-block d-md-inline-block" id={item}>{item}</button>
                                             </Link>
                                        </div>
                                        </>
                                    )
                                }
                                //Hacer un if aqu??, seg??n la categoria pintar un link u otro
                             
                            })}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    console.log(state)
     return {list:state.categorias.categorias}
  }


const mapDispatchToProps = dispatch => {
    return {
      categoriasActions : () => dispatch(categoriasActions())
    }
  }


  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CategoriasProducto);
