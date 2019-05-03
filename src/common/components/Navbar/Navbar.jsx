import React from 'react';

const Navbar = ({stations}) => (
  <div>
    <ul>
      { stations.map(station => (
          <li key={station.id}>
            <h3>{station.name}</h3>
          </li>
        ))
      }
    </ul>
  </div>
)

export default Navbar;
