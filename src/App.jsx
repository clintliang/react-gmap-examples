import React, {Component} from 'react';
import GMap from './GMap.jsx';
import update from "react-addons-update";

class App extends Component {
  state = {
    markers: [{
      position: {
        lat: 49.0112183,
        lng: 123.52067570000001,
      },
      key: `Vancouver`,
      defaultAnimation: 2,
    }],
  };

  handleMapClick = this.handleMapClick.bind(this);
  handleMarkerRightclick = this.handleMarkerRightclick.bind(this);

  /*
   * This is called when you click on the map.
   * Go and try click now.
   */
  handleMapClick(event) {
    let { markers } = this.state;
    markers = update(markers, {
      $push: [
        {
          position: event.latLng,
          defaultAnimation: 2,
          key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
        },
      ],
    });
    this.setState({ markers });
  }

  handleMarkerRightclick(index, event) {
    /*
     * All you modify is data, and the view is driven by data.
     * This is so called data-driven-development. (And yes, it's now in
     * web front end and even with google maps API.)
     */
    let { markers } = this.state;
    markers = update(markers, {
      $splice: [
        [index, 1],
      ],
    });
    this.setState({ markers });
  }

  render() {
    return (
      <GMap
        markers={this.state.markers}
        onMapClick={this.handleMapClick}
        onMarkerRightclick={this.handleMarkerRightclick}
      />
    );
  }
}

export default App;
