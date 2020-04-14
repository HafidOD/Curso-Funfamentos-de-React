import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import ContadorHook from './ContadorHook';
// import Formulario from './Formulario';
import './style.css';

function MiComponente(props){ //componente de funcion
console.log(props.children);
// el pasa de props
  return <p>Componente de funcion,
            Hola {props.name}
            <p>{props.children}</p>
          </p>; //retorno
}

class MiComponenteClass extends Component { //componente de clase
  render(){ // el metodo render el que retorna
    return <p>Componente de clase</p>;
  }
}

//contador
class Contador extends Component {
  constructor(props){ // en el constructor siempre se pasa los props
    super(props); //estructura obligatoria donde se pasa el prop al padre de la clase, en este caso Component

      this.state = { // inicializar estado del componente
        contador: 0
    };
  }

  aumentar = ()=>{ // funcion para aumentar
    this.setState({ // se establece el nuevo valor del estado con setState
      contador: this.state.contador + 1
    })
  }

  render(){
    return (<div>
      <p>{this.state.contador}</p>
      <button onClick={this.aumentar}>Aumentar</button>
    </div>)
  }
}

// formulario
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
    return(
      <form>
        <input
          onChange={(ev)=>{this.syncChages(ev.target.value, 'email')}}
          type="email"
          value={this.state.email}
          placeholder='Email' />
        <input 
          onChange={(ev)=>{this.syncChages(ev.target.value, 'password')}}
          type="password"
          value={this.state.password}
          placeholder='Password' />
        <div>
          <input  
            onClick={ this.submitForm } 
            type="submit"
            value="Inicial sesion" />
        </div>
      </form>
    )
  }
}

//lista e iteracion

class Blog extends Component{
  constructor(props){
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount(){
    let promesa = fetch('https://jsonplaceholder.typicode.com/posts');

    promesa.then(response => response.json()).then(data=>{
      this.setState({
        articles: data
      })
    })
  }

  render(){
    return(
      <div>
        {
          this.state.articles.map((article)=>{
            // asignar clases de css es con className
            // atributo style={ { backgroundColor: 'red, color: 'yellow}}
            // es decir e tiene que pasar un objeto json, no se usa guines, se usa camelcase
            return <div className="card"><p>{article.title}</p></div>;
          })
        }
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    let nombre = 'Hafid'
    return (
      <div>
      // estructura similar a HTML se llama JSX
      //  se asigna su prop con la variable name
      < MiComponente name={nombre}> 
        <p>Soy Hijo del componente</p> //hijo del componente
      </MiComponente>
      < MiComponenteClass />
        <Hello name={this.state.name} />

        <p>
          Start editing to see some magic happen :)
          <Contador />
          <Formulario/>
        </p>
        <ContadorHook />
        <Blog />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
