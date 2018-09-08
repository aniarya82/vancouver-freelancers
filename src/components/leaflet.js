import React, { createRef, Component } from 'react';
import { Map, TileLayer, Marker, Popup, CircleMarker } from 'react-leaflet';
import '../css/leaflet.css'

//Popup Template
const MyPopupMarker = ({ title, description, position }) => (
    <Marker position={position}>
      <Popup><strong>{title}</strong> <br/> {description}</Popup>
    </Marker>
  )

//Loop for each venue
const MyMarkersList = ({ markers }) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} />
  ))
  return <div style={{ display: 'none' }}>{items}</div>
}
  
export default class CustomComponent extends Component {
  
  //Setup for location finder
  mapRef = createRef()
  
  //Component state vars
  state = {
    hasLocation: false,
    animate: true,
    latlng: {
      lat: 49.2598259,
      lng: -123.1052595,
    },
    zoom: 14,
  }

  //Animate click scroll
  handleClick = e => {
    this.setState({
      latlng: e.latlng,
    })
  }

  //Activate animate
  toggleAnimate = () => {
    this.setState({
      animate: !this.state.animate,
    })
  }

  //Find user location
  handleLocationFound = e => {
    this.setState({
      hasLocation: true,
      latlng: e.latlng
    })
  }

  //Start finding user location
  componentDidMount = () => {
    this.mapRef.current.leafletElement.locate();
  }

  render() {

    const markers = [
      { key: '1', position: [49.25857, -123.10102], title:'Starbucks - Main Street', description: 'A really nice and fresh Starbucks with great WiFi seating. A popular hangout for locals and freelancers.' },
      { key: '2', position: [49.26641, -123.09944], title:'Cartems Donuts', description: 'Pretty quiet and spacious cafe with donuts (!) and nice tea\'s. Not the fastest WiFi but good for some casual work.' },
      { key: '3', position: [49.263321, -123.10073], title:'Gene Coffee Bar', description: 'More pricey that most places but a very chilled out cafe that is popular for locals that want a take-away, giving you space and quiet to focus. WiFi is good too.' },
      { key: '4', position: [49.2840585, -123.114385], title:'Blenz Coffee', description: 'This is a chain of cafes but this one has good tables (slow WiFi) but a good location in Gastown. There are a few sketchy people in the area so be alert.' },
      { key: '5', position: [49.2629561,-123.0997393], title:'Our Town Cafe', description: 'Super fresh cafe, nice vibe, not too loud, fast WiFi, in a good location. Food is nice too.' },
      { key: '6', position: [49.2831085,-123.1123998], title:'L\'Atelier Coworking', description: 'Great, affordable shared co-working space for freelancers and remote workers. Prices start at 195CAD.' },
      { key: '7', position: [49.2840743,-123.1152215], title:'Cartems Donuts', description: 'Another Cartems for when you are working in Gastown. Small venue but just as spacious as the venue on Main Street.' },
    ]

    const totalMarkers = markers.length;
    
    const marker = this.state.hasLocation ? (
      <CircleMarker center={this.state.latlng} color="red" radius={20}>
        <Popup>
          <span>You are here</span>
        </Popup>
      </CircleMarker>
    ) : null

    if (typeof window !== 'undefined') {
      return (
        <div>
          <Map 
            animate={this.state.animate}
            center={this.state.latlng}
            zoom={this.state.zoom}
            length={4}
            //onClick={this.handleClick}
            onLocationfound={this.handleLocationFound}
            ref={this.mapRef}
          >
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MyMarkersList markers={markers} />
            {marker}
          </Map>
          <p style={{textAlign: 'center'}}>Total venues: {totalMarkers} / 100</p>
        </div>
      )
    }
    return null
  }
}