import React, { Component } from "react";
import "./App.css";

// This URL can be combined with an photo id to fetch an photo.
const PHOTO_URL = photoId => `https://picsum.photos/id/${photoId}/200/200`;
// This URL can be used to get an array of objects that contain information
// about various photos.
const PHOTO_LIST_URL = "https://picsum.photos/list";
//use this URL for the fetch request
//This will return an array of photo info and you will update array.  It will be
// an

class App extends Component {
  // 1. Declare a state object that will be used to track an array of photos
  constructor(){
    super()
    this.state = {
      photos: []
      
    };

  }

  
 
  componentDidMount(){

    fetch("https://picsum.photos/list")
    .then(newData => newData.json())
    .then(convertedData => this.setState({photos: convertedData}))
   

  }
  
  // 2. Declare a life cycle method
  // This life cycle method should:
  //  - will be called after the component is initially rendered
  // - will fetch an array of photos
  // - will add that array of photos to state once received
  
  render() {
    const { photos = [] } = this.state;
    console.log(this.state.photos[0])
    return (
      <React.Fragment>
        <header>
          <h1>Photo Wall</h1>
         
        </header>
        <div className="collage">
          {/* We use map here because Array.prototype.map is an expression,
           * and for loops are not. You'll learn more about this soon!
           */}
          {photos.map(photo => (
            <img
              alt={"photo not shown"}
              key={photo.id}
              src={PHOTO_URL(photo.id)}
              className = "photos"
              
            />
          ))}
        </div>
        
      </React.Fragment>
      
    );
  }
}

export default App;
