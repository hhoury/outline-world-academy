import React from 'react'
import classes from './SearchModal.module.css'
import ReactDOM from 'react-dom'

const SearchOverlay = (props) => {
    
    return (
        <div id='search-overlay' className={classes['search-overlay']}>
            <div>
                <span onClick={props.onClose} title='Close Search'><i className="far fa-times"></i>
                </span>
                <div className={classes['overlay-content']}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col'>
                                <form>
                                    <div className='form-group'>
                                        <input placeholder='Search a Course' type='text' className='form-control form-control' />
                                    </div>
                                    <button type='submit' title='Search' >
                                        <i className='fa fa-search'></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const SearchModal = (props) => {
    const portalElement = document.getElementById('overlays')
    return (
        <>
            {ReactDOM.createPortal(<SearchOverlay  onClose={props.onClose}/>, portalElement)}
        </>
    )
}

export default SearchModal
