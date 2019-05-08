import React, {Component} from "react"
import withRedux from "next-redux-wrapper"
import {ComposableMap, ZoomableGroup, Geographies, Geography} from "react-simple-maps"
import {Tooltip, actions} from "redux-tooltip"
import axios from 'axios';
import {initStore} from "../store"


const {show, hide} = actions

class WithReduxExample extends Component {
  state = {
    data: [],
    vtype: 'density'
  }

  componentDidMount() {
   const self = this;
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(function (response) {
        self.setState({data: response.data})
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  alterDataType = () => {
    const {vtype} = this.state;
    if (vtype === 'density') {
      this.setState({vtype: 'gini'});
    } else {
      this.setState({vtype: 'density'})
    }
  }

  getContent = (name) => {
    
    const {data, vtype} = this.state;
    const countryData = data.filter((elem) => {
       
      if (name === elem.alpha3Code) {

        return true;
      }
      return false;
    });
    if (countryData[0]) {
      const {gini, population, area} = countryData[0];
      const areaInSqMiles = area * 0.386102;
      const density = population / areaInSqMiles;
      if (vtype === 'density') {
        return density;
      } else {
        return gini;
      }

    }
  }

  format = (value) =>{
    if(value){
      const { vtype} =this.state;
      if(vtype == 'density'){
       return `${value.toFixed(2)} per sq miles`;
      }
      return value
    }
  }
  getColor = (name) => {
    const {vtype} = this.state;
    let d;
    if(vtype == 'density'){
       d  = this.getContent(name);
      return d > 500  ? '#BD0026' :
             d > 200  ? '#E31A1C' :
             d > 100  ? '#FC4E2A' :
             d > 50   ? '#FD8D3C' :
             d > 20   ? '#FEB24C' :
             d > 10   ? '#FED976' :
                        '#FFEDA0';
    }else {
       d  = this.getContent(name);
      return d > 60   ? '#BD0026' :
             d > 55   ? '#CF372D' :
             d > 50   ? '#EA3F33' :
             d > 45   ? '#EB6263':
             d > 40   ? '#F6CCCD':
             d > 35   ? '#95F59A':
             d > 30   ? '#7FF237':
             d > 25   ? '#6CCF12':
                       '#E6E6E6';
    }
    
    
  }

  handleMove = (geography, evt) => {

    const x = evt.clientX
    const y = evt.clientY + window.pageYOffset
    this
      .props
      .dispatch(show({
        origin: {
          x,
          y
        },
        content: this.format(this.getContent(geography.properties.adm0_a3))
      }))
  }
  handleLeave = () => {
    this
      .props
      .dispatch(hide())
  }
  render() {
    const {data,vtype} = this.state;
    return (
      <div>
      {vtype === 'density' ? <h1>Population Density</h1> : <h1>Gini Coefficient</h1>}
      <div style={wrapperStyles}>
        <div style={btnStyle} onClick={this.alterDataType}>Button</div>
       {data.length ?  
       <div>
       <ComposableMap
          projectionConfig={{
          scale: 205,
          rotation: [-11, 0, 0]
        }}
          width={980}
          height={551}
          style={{
          width: "100%",
          height: "auto"
        }}>

          <ZoomableGroup center={[0, 20]}>
          
            <Geographies disableOptimization='false' geography="/static/world-50m-with-population.json">
              {(geographies, projection) => geographies.map((geography, i) => (<Geography
                key={i}
                geography={geography}
                projection={projection}
                onMouseMove={this.handleMove}
                onMouseLeave={this.handleLeave}
                style={{
                default: {
                  fill: this.getColor(geography.properties.adm0_a3),
                  stroke: "#607D8B",
                  strokeWidth: 0.75,
                  outline: "none"
                },
                hover: {
                  fill: "#607D8B",
                  stroke: "#607D8B",
                  strokeWidth: 0.75,
                  outline: "none"
                },
                pressed: {
                  fill: "#FF5722",
                  stroke: "#607D8B",
                  strokeWidth: 0.75,
                  outline: "none"
                }
              }}/>))
}
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
       {vtype == 'density'?<div> <img style={imgStyle} className='img' src='/static/img.png' alt='gini'/></div>:<div> <img style={imgStyle} className='img' src='/static/gini.png' alt='gini'/></div>}
        <Tooltip/>
        </div> : <h1>Loading...</h1>
        }
      </div>
      </div>
    )
  }
}

const imgStyle = {
   position:'absolute',
   top:'100px',
   left:'50px'
}

const btnStyle = {
   display: 'inline-block',
    background: '#000',
    padding: '15px',
    fontSize: '18px',
    borderRadius: '46px',
    color: '#fed330',
    position: 'absolute',
    top: '14px',
    left: '283px',
    cursor:'pointer'
}

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
  fontFamily: "Roboto, sans-serif"
}



export default withRedux(initStore)(WithReduxExample)
