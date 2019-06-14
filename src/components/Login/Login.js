import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input';
import firebase from '../../database/firebaseConfig/firebaseConfig';
import withFirebaseAuth from 'react-with-firebase-auth';
const database = firebase.firestore()
const firebaseAppAuth = firebase.auth()



class Login extends React.Component {
  constructor (props){
    super(props);
    this.state = {
        email: "",
        password: "",
        value:"salão",
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
    this.props.history.push(`/Register`)
  }

  signIn = () => {
    const { email, password } = this.state;
    console.log(email+ " " +password)
    console.log(firebaseAppAuth.auth);
  
    this.props.signInWithEmailAndPassword(email, password)
      .then(resp => {
        console.log(resp);
        const id = resp.user.uid;
        database.collection("users").doc(id).get()
          .then((resp) => {
            const data = resp.data()
            console.log('data', data)
            this.props.history.push(`/Register`)
          })
          console.log(resp);
      }).catch((error) => {
        this.setState({
          error: error.message        
        })
        //console.log(error);
      })
  }

  handleChange = (event, element) => {
    const newState = this.state
    newState[element] = event.target.value
    this.setState(newState)
  }

     render(){
        return(
        <div>
     
        <h1>Login</h1>
        <label>Digite seu username:</label>
        <Input value = {this.state.email} onChange={(e) => this.handleChange(e,"email")}
        type='text'
        name='username'
        />
        <br></br>
        <label>Digite sua senha:</label>
        <Input value ={this.state.password} onChange={(e) => this.handleChange(e, "password")}
        type='text'
        name='password'
        />  
        <br/>
        <br/>
        <select value = {this.state.value} onChange={(e) => this.handleChange(e, "value")} >
            <option value="salão">Salão</option>
            <option value="cozinha">Cozinha</option>
        </select>
       
        <Button className="button" onClick={() => this.signIn()} text="Login" /> 
        
        <Button className="button" onClick ={this.setRedirect} text ="Cadastrar"></Button>
       
        
      </div>
    );
}
}

// export default Login;
export default withFirebaseAuth({ firebaseAppAuth, })(Login);