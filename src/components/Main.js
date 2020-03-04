import React from 'react'
import axios from 'axios'




class Main extends React.Component{
  constructor(){
    super()
    this.state = {
      data: {},
      error: ''

    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.mouseMove = this.mouseMove.bind(this)





  }


  componentDidMount(){
    axios.get('/api/works')
      .then(res => this.setState({works: res.data}))

  }

  componentDidUpdate(){



  }

  mouseMove(e){

    console.log(e)
    console
    this.setState({bass: `${e.screenX /10000} ${e.screenY /10000} `, scale: `${e.screenY /5}` })
  }


  render() {



    return (
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="svg-filters">
  <defs>
    <filter id="filter">
      <feTurbulence type="fractalNoise" baseFrequency={this.state.bass} numOctaves="5" result="warp"></feTurbulence>
      <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale={this.state.scale} in="SourceGraphic" in2="warpOffset" />
    </filter>
  </defs>
</svg>


        {this.state.works &&<img src={`data:image/png;base64,  ${this.state.works[0].dat.slice(2).slice(0, -1)}`} onMouseMove={this.mouseMove}/>}
        <h1 className="text"  onMouseMove={this.mouseMove}>The intersection of art  and technology</h1>



      </div>




    )
  }
}
export default Main
