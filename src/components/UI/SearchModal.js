import React, {useState} from 'react'
import classes from './SearchModal.module.css'
import ReactDOM from 'react-dom'
import { useHistory } from 'react-router'
const SearchOverlay = (props) => {
    const history = useHistory();
    const [keyword, setKeyword] = useState('')
    const searchSubmitHandler = (event) => {
        event.preventDefault()
        if (keyword.trim()) {
          history.push(`/courses?search=${keyword}`)
        } else {
          history.push('/')
        }
        props.onClose();
    }
    return (
        <div id='search-overlay' className={classes['search-overlay']}>
            <div>
                <span onClick={props.onClose} title='Close Search'><i className="far fa-times"></i>
                </span>
                <div className={classes['overlay-content']}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col'>
                                <form onSubmit={searchSubmitHandler}>
                                    <div className='form-group'>
                                        <input placeholder='Search a Course' type='text' className='form-control form-control'
                                          onChange={(e) => setKeyword(e.target.value)}/>
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
