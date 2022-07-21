import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionsCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((item, key) => (<MissionsCard
          key={ key }
          name={ item.name }
          year={ item.year }
          country={ item.country }
          destination={ item.destination }
        />
        ))}
      </div>
    );
  }
}

export default Missions;
