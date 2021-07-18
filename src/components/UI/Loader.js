import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = (props) => {
  return (
    // <Spinner
    // as='span'
    //   animation='border'
    //   role='status'
    //   Spinner='spinning'
    //   style={{
    //     display: 'inline-block',
    //     width: '200px',
    //     height: '200px',
    //     verticalAlign: '-.125em',
    //     border: '1.25em solid #ccc',
    //     borderRight: '1.25em solid transparent',
    //     borderRadius: '50%',
    //     animation: 'spinner-border .75s linear infinite',
    //     position:'fixed',
    //     top: '50%',
    //     left: '40%'
    //   }}
    // >
    //   <span className='sr-only'>Loading...</span>
    // </Spinner>
    <Spinner animation="border" role="status">
      <span className="visually-hidden"
      style={{color: '#f44e0c'}}>{props.message}</span>
    </Spinner>
  )
}

export default Loader
