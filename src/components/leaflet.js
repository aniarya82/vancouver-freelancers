import React, { createRef, Component } from 'react';
import { Map, TileLayer, Marker, Popup, CircleMarker } from 'react-leaflet';
import axios from 'axios'
import '../css/leaflet.css'

//Foursquare API
const clientId = 'XAI5LRSSLR0RD1I4GKRBX0QAE1E110A2LAXSOAJEHFBIJUC4'
const clientSecret = 'ZMGI0XZCRY5NVBISSZNNSSQ2VRSPNHFDCYNFKHKNGWHNUCGL'
const apiEndPoint = 'https://api.foursquare.com/v2/venues/'

const markers = [
  { key: '1', position: [49.25857,-123.10102], title:'Starbucks - Main Street', description: 'A really nice and fresh Starbucks with great WiFi seating. A popular hangout for locals and freelancers.', venueId:'4aaab36cf964a520045720e3'},
  { key: '2', position: [49.26641,-123.09944], title:'Cartems Donuts', description: 'Pretty quiet and spacious cafe with donuts (!) and nice tea\'s. Not the fastest WiFi but good for some casual work.', venueId:'5570b6c7498ed3382a260214'},
  { key: '3', position: [49.263321,-123.10073], title:'Gene Coffee Bar', description: 'More pricey that most places but a very chilled out cafe that is popular for locals that want a take-away, giving you space and quiet to focus. WiFi is good too.', venueId:'4aa82a04f964a520be4f20e3' },
  { key: '4', position: [49.2840585,-123.114385], title:'Blenz Coffee', description: 'This is a chain of cafes but this one has good tables (slow WiFi) but a good location in Gastown. There are a few sketchy people in the area so be alert.', venueId:'4bc8c7496501c9b6dce44029' },
  { key: '5', position: [49.2629561,-123.0997393], title:'Our Town Cafe', description: 'Super fresh cafe, nice vibe, not too loud, fast WiFi, in a good location. Food is nice too.', venueId:'4acd77a2f964a52025cc20e3' },
  { key: '6', position: [49.2831085,-123.1123998], title:'L\'Atelier Coworking', description: 'Great, affordable shared co-working space for freelancers and remote workers. Prices start at 195CAD.', venueId:'577eb2a8498eb0a40264dbb3' },
  { key: '7', position: [49.2840743,-123.1152215], title:'Cartems Donuts', description: 'Another Cartems for when you are working in Gastown. Small venue but just as spacious as the venue on Main Street.', venueId:'5261ea7111d2cc4cf26712e3' },
  { key: '8', position: [49.2668222,-123.0944925], title:'Kafka\’s Coffee', description: 'New cafe near Emily Carr University, so has a nice student, artsy feeling. Comes with a nice mix of teas, coffees, and other drinks in a quiet neighbourhood.', venueId:'4c303a7d3ffc9521f4c28ff5' },
  { key: '9', position: [49.2597731,-123.0944581], title:'49th Parallel Coffee Roasters', description: 'Beyond the good coffee, we love this place for its seating variety (communal, corners, lounge, windows, and more) and the fact that it’s also home to Lucky’s and its delirium-inducing PB&J doughnut.', venueId:'4fb6cb56e4b04335c6dfbe0a' },
  { key: '10', position: [49.2745333,-123.1246415], title:'Caffe Artigiano', description: 'A local chain that found success where every cafe ought to, not in slick branding and moustache wax but in consistency and excellence. This small outpost – attached to the Opus Hotel – has a sophisticated traveller’s vibe to it.', venueId:'4f6b60e3e4b026c4acd2727e' },   
  { key: '12', position: [49.2678771,-123.1749225], title:'Elysian Coffee', description: 'An Elysian joint with wifi? Yup, the other three locations might still eschew the trend toward Mackedness, but their newest outlet is umbilically attached to the Burrard Hotel, and what is a hotel cafe without wifi? Rejoice!', venueId:'56f700b3498ef05dcb4d26c5' }, 
  { key: '13', position: [49.2785915,-123.0955487], title:'Finch\’s Market', description: 'One of the more charming and atmospheric spots on this list. Good meeting spot, though it has the power to remove idle hours from your life if you’re not careful, so boot up and concentrate. Pro tip: baguette sandwiches are legend.', venueId:'509ff4a5e4b057cac4d322c9' },
  { key: '14', position: [49.2866395,-123.1362086], title:'Greenhorn Espresso Bar', description: 'If there were a model for how we’d like all neighbourhood to operate, Greenhorn would be close to perfect. Part art, gallery, part record store, part coffee bar, it’s the full package. Bonus: good granola with vanilla-spiced pear.', venueId:'52c72fe5498edf109f363e18' },
  { key: '15', position: [49.2847045,-123.0962057], title:'JJ Bean Coffee Roasters', description: 'This local chainlet has plenty of locations around town but the one we avail ourselves the most is the stylish looker in Railtown. The midday people-watching here is superb, as is the company’s bold, rocket fuel “Railtown” roast.', venueId:'4c2e95f9213c2d7f0c862f5d' },
  { key: '17', position: [49.2457702,-123.0966234], title:'Le Marche St. George', description: 'We prefer to sit outside in a cozy chair and tether for wifi here rather than join the crush inside. On top of the good coffee, the charmer serves up excellent pain au chocolate and toasted croissant sandwiches layered with ham and cheese.', venueId:'4d10e635e236548135997aea' },
  { key: '18', position: [49.2458004,-123.1119443], title:'Matchstick', description: 'Local coffee roaster and baker with killer design sense, highly efficient service, and lots of variety when it comes to seating (communal, window cloister, banquette, high-top). Want to spike a cup? They’re also licensed.', venueId:'530e9ea1498eee5076f049a3' },
  { key: '19', position: [49.283167,-123.1055278], title:'Milano Espresso Lounge', description: 'Tucked sufficiently away from the Gassy Jack tourist track to almost always guarantee a free seat, this bright, reliable and work-friendly joint has a deep menu of house beans and a slick but comfortable modern European design. Hours are easily well spent here.', venueId:'54f5f80e498e300bbba1e5be' },
  { key: '20', position: [49.2747102,-123.0714861], title:'Moja', description: 'This new addition found instant success on account of the quality of their beans and the cozy, modern-meets-industrial look and feel. If you ever find time to lift your head from your laptop, the window perches make for awesome people-watching.', venueId:'555df6c9498ec05757a9ef70' },
  { key: '21', position: [49.2821584,-123.1067499], title:'Nelson The Seagull', description: 'Housed in an open concept heritage space and doubling as a bakery, this is one of the better looking cafes in the city (and probably the most aromatically alluring). Avocado toast + Matchstick beans = good working environment!', venueId:'4dc9a94cd22d2af63302269c' },
  { key: '22', position: [49.2822126,-123.1395806], title:'Pallet Coffee Roasters', description: 'A good-looking neighbourhood cafe that roasts its own beans behind a glass partition. A little off the beaten track but well worth repeat visits on account of their evident and delicious dedication to quality.', venueId:'5949aed11fa76344f0ac73cd' },
  { key: '23', position: [49.2671951,-123.0716712], title:'Prado Cafe', description: 'Our new/old local, just down the street from our office. It’s where we go without laptops so we can do the work that needs to sometimes be done without them. Good neighbourhood vibe, sweet corner nooks, 49th Parallel beans.', venueId:'4aa838eaf964a520315020e3' },
  { key: '24', position: [49.2804932,-123.1011999], title:'Propaganda Coffee', description: 'We use owner-operated Propaganda a lot both as a meeting place and a midday caffeine re-up station. Great selection of beans and seat options, from communal tables and lonely deuces to window hightops and lounge seats.', venueId:'54bbec40498e8e0eafdc56c7' },
  { key: '25', position: [49.2831945,-123.1116408], title:'Revolver', description: 'This is our regular go to for a number of reasons, starting with the attention to detail paid to every cup that’s made to order. It’s also beautifully designed, offering a mix of tight booths, window seats, and a lengthy communal table. Killer bean selection, too.', venueId:'4d9b41359298b1f7635b5338' },
  { key: '26', position: [49.2765068,-123.1233665], title:'Small Victory', description: 'We’re suckers for their scones with jam and clotted cream (also the bechamel-heavy chicken pot pies), but for a double shot and a solid work sesh it’s definitely our main port of call in Yaletown.', venueId:'546cfab4498e31fa52b38545' },
  { key: '27', position: [49.283892,-123.1116732], title:'Timbertrain Coffee Roasters', description: 'The seating is a bit labyrinthine and tricky to suss at first, but you’ll figure it out! Definitely one of our favourite cafe interiors in town. Excellent beans brewed by a crew of perfectionists.', venueId:'52dec1e1498e71f308720349' },
]

for (let i = 0; i < markers.length; i++) {
  if(markers[i].venueId) {
    //console.log(markers[i].venueId);
    axios.get(apiEndPoint + markers[i].venueId + '?client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20180909')
    .then(function (response) {
      //console.log(apiEndPoint + markers[i].venueId + '?client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20180909')
      markers[i].rating = response.data.response.venue.rating,
      markers[i].url = response.data.response.venue.canonicalUrl
      //console.log(markers)
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

const totalMarkers = markers.length;

const styleH3 = {
  margin: 0;
  fontFamily: 'sans-serif',
  fontWeight: '400',
  borderBottom: '1px solid #e8e8e8',
  padding: '10px 15px 7px',
  fontSize: '1.3rem',
  marginBottom: '10px'
}

const textStyle = {
  fontSize: '0.9rem',
  margin: 0;
  padding: '0 15px',
  marginBottom: '15px',
  color: '#333',
}

//Popup Template
const ThePopUp = ({ title, description, position, rating, url }) => (
  <Marker position={position}>
    <Popup>
      <h3 style={styleH3}>
        <a href={url} target="_blank">{title}</a>
      </h3>
      <p style={textStyle}>{description}</p>
      {rating && <p style={{ ...textStyle, color: '#545454', fontSize: '13px'}}>Rating: {rating}/10</p> }
      </Popup>
  </Marker>
)

//Loop for each venue
const MyMarkersList = ({ markers }) => {
  const items = markers.map(({ key, ...props }) => (
    <ThePopUp key={key} {...props} />
  ))
  return <div style={{ display: 'none', venueId:'XXXXXX' }}>{items}</div>
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
    zoom: 13
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
    
    const marker = this.state.hasLocation ? (
      <CircleMarker center={this.state.latlng} color="black" radius={10}>
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
              attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a> Imagery © <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
              url="https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
            />
            <MyMarkersList markers={markers} />
            {marker}
          </Map>
          <p style={{textAlign: 'center', fontSize: '0.8rem', color:'#6c757d'}}>Total venues: {totalMarkers} / 100</p>
        </div>
      )
    }
    return null
  }
}