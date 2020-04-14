import React from 'react';

class Formulario extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: 'email',
      password: 'password'
    }
  }

  syncChages(value, property){
    let state = {};
    state[property] = value;
    this.setState(state);
  }

  submitForm = () =>{
    console.log(this.state);
  }

  render(){
    return
    {
      <form>
        <input
          onChange={(ev)=>{this.syncChages(ev.target.value, 'email')}}
          type="email"
          value={this.state.email}
          placeholder='Email' />
        <input 
          onChange={(ev)=>{this.syncChages(ev.target.value, 'password')}}
          type="password"
          value={this.state.email}
          placeholder='Password' />
        <div>
          <input  
            onClick={ this.submitForm } 
            type="submit"
            value="Inicial sesion" />
        </div>
      </form>
    }
  }
}

export default Formulario;