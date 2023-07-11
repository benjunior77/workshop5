import React,{component} from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      show: false,
      FullName: 'lionnel messi',
      Biographie: 'footballeur professionnel.',
      ImgSrc:<img src={"https://th.bing.com/th/id/OIP.IwzCCy5hGSy2jFa7PhQ-FAHaFj?w=272&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7"} alt="photo" />
    };
  }

  componentDidMount(){
    console.log('Le composant est monte')
    setInterval( () =>{
      console.log('Le temps du montage')
    }, 1000)
  }
  

  render() {
    return (
      <div className='global'>
        <button className='bg-purple-900 text-white rounded py-2 px-3'
        onClick={ () => this.setState({show: !this.state.show})} 
        >Clicker</button>
        {
          this.state.show ? 
          <>
            <p style={{ borderRadius: 10 }}>{this.state.ImgSrc}</p>
            <p>Nom: {this.state.FullName}</p>
            <p>Biographie: {this.state.Biographie}</p>
          </>
          :null
        }
      </div>
    )
  }
}

export default App;