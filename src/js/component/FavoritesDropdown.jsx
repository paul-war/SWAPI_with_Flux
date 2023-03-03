import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';


export const FavoritesDropdown = () => {
    const { store, actions } = useContext(Context);
    const favorites = store.favorites;

    console.log(favorites);

    return (
        <div className="dropdown dropstart">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Favorites
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">{favorites.length}</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-lg-end">

                {favorites.length === 0 ? (
                    <li><a className="dropdown-item">No favorites selected</a></li>
                ) : (
                    favorites.map((item) => (
                        <li className="d-flex align-items-center" key={item.id}>
                            <a className="dropdown-item">{item.name}</a>
                            <button type="button" className="btn btn-outline-warning" onClick={() => actions.deleteFavorite(item, favorites)}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};




/*  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Favorites  
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
    4
  </span>
</button>
<ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
</ul>
*/


/* export const BtnFavorites = ({ favorites }) => {
    const { store, actions } = useContext(Context);
    const favorites = store.favorites;


    const click = (ident) => {
        actions.transforFavorites(ident)
        favorites.length === 1 && actions.transforFavorites(null);
    }


    const [displayLista, setDisplayLista] = useState(false)
    const display =()=>{
        setDisplayLista((display)=> display = !display)
    }


    return (
        
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites  
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
                        4
                    </span>
                </button>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="#">Favoritos</Link></li>
                    {
                        favorites && favorites.map((ele) => {
                            const listaFavs = [];
                            const ident = ele && ele.id
                            if (ele) {
                                const fav =
                                    <li className="dropdown-item" key={ident} >
                                        <div className="row">
                                            <div className="col-9">
                                                <div>{ele && ele.name}</div>
                                            </div>
                                            <div className="col-3">
                                                <div className="botonDelete" id={ident} onClick={() => click(ele.id)}>
                                                    icon
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                listaFavs.push(fav)
                            }
                            return listaFavs;
                        })
                    }
                </ul>
            </div>

    );
};
*/

/*{         <div className="col-10 col-enlace-demo">
            <div className="ml-auto">
                <div className="btn-group">
                    <button type="button" className="btn dropdown-toggle dropdown-button botonFav" onClick={display} aria-expanded="false">
                        Fav List
                    </button>
                </div>

                <ul className="listaFavs">
                    {
                        favoritos && favoritos.map((ele) => {
                            const listaFavs = [];
                            const ident = ele && ele.id
                            if (ele) {
                                const fav =
                                    <li className={displayLista ? "visible"  : "noVisible"} key={ident} >
                                        <div className="row">
                                            <div className="col-9">
                                                <div>{ele && ele.name}</div>
                                            </div>
                                            <div className="col-3">
                                                <div className="botonDelete" id={ident} onClick={() => click(ele.id)}>
                                                    icon
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                listaFavs.push(fav)
                            }
                            return listaFavs
                        })
                    }
                </ul>
            </div>
        </div> } */