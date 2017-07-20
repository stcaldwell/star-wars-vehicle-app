import React, {Component} from 'react';

class Cards extends Component {
  constructor () {
    super()
    this.state = {
      vehicleList: []
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/vehicles/')
    .then(resp => resp.json())
    .then((vehicles) => {
      let vehicleOut = vehicles.results.map((card) => {
        return (
          <div className="col-sm-4" key={card.name}>
            <div className="card" >
              <div className="card-block">
                <h4 className="card-model">{card.model}</h4>
                <h6 className="card-spec">Manufacturer: {card.manufacturer}</h6>
                <h6 className="card-spec">Class: {card.vahicle_class}</h6>
                <h6 className="card-spec">Passengers: {card.passengers}</h6>
                <h6 className="card-spec">Length: {card.length}</h6>
                <h6 className="card-spec">Max Speed: {card.max_atmosphering_speed}</h6>
                <h6 className="card-spec">Cargo Capacity: {card.cargo_capacity}</h6>
              </div>
            </div>
          </div>
        )
      })
      this.setState({vehicleList: vehicleOut})
    })
    .catch((err) => {
      console.log('There was an error importing vehicle data:', err);
    })
  }

  render() {
    return (
      <div className="card-list">
        <div className="row">
          {this.state.vehicleList}
        </div>
      </div>
    )
  }
}

export default Cards;
