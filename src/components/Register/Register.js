import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input';
import { Redirect } from 'react-router-dom';
import firebase from '../../database/firebaseConfig/firebaseConfig';
import withFirebaseAuth from 'react-with-firebase-auth';

const database = firebase.firestore()
const firebaseAppAuth = firebase.auth()


class Register extends React.Component {
  constructor (props){
    super(props);
    this.state = {
        user: "",
        password: "",
        email:"",
        value:"Salao",
        error: ""
        
    }
  }

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
      return <Redirect to='/'/>
    }
  }

  handleChange = (event, element) => {
    const newState = this.state
    newState[element] = event.target.value
    this.setState(newState)
  } 

  createUser = () => {
    const { email, password, user, value } = this.state;
    this.props.createUserWithEmailAndPassword(email, password)
      .then((resp) => {
        const id = resp.user.uid;
        database.collection("users").doc(id).set({
          email,
          user,
          value
        })
          .then(() => {
            this.props.history.push(`/${value}`)
          })
      }).catch((error) => {
        this.setState({
          error: error.message
        })
      })
  }


  render(){
    return(
      <div>
      {this.renderRedirect ()} 
      <h1>Cadastro</h1>
      <label>Digite seu username:</label>
      <Input value = {this.state.user} onChange={(e) => this.handleChange(e,"user")}
        type='text'
        name='username'
        />
      <br></br>
        <label>Digite seu email:</label>
      <input value={this.state.email} onChange={(e) => this.handleChange(e, "email")}
        type='email'
        name='email'
      />
       <br></br>
       <label>Digite sua senha:</label>
       <Input value ={this.state.password} onChange={(e) => this.handleChange(e, "password")}
        type='text'
        name='password'
       /> 
      <br></br>
      <label>Digite sua senha novamente:</label>
      <Input value ={this.state.password} onChange={(e) => this.handleChange(e, "password")}
        type='text'
        name='password'
      /> 
      <br/>
      <br/>
      <select value = {this.state.value} onChange={(e) => this.handleChange(e, "value")} >
            <option value="Salao">Salão</option>
            <option value="Cozinha">Cozinha</option>
      </select>
      <Button onClick ={() => this.createUser()} text ="Cadastrar"></Button>
      <Button onClick ={this.setRedirect} text ="Voltar">Redirect</Button>
      </div>
    )
  }
}
//export default Register;
export default withFirebaseAuth({ firebaseAppAuth, })(Register);