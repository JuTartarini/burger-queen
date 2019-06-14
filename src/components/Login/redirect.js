import React from 'react'
import { Redirect } from 'react-router-dom';
import Button from '../Button/Button';

class MyComponent extends React.Component {
    state = {
        redirect: false
      }
      setRedirect = () => {
        this.setState({
          redirect: true
        })
      }
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/Register'/>
        }
      }
    
    render () { 
      return ( 
         <div> 
          {this.renderRedirect ()} 
          <Button onClick ={this.setRedirect}>Redirect</Button>
         </ div> 
      ) 
    }
  }

  export default MyComponent;