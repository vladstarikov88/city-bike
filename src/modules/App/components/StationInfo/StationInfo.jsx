import React from 'react';

import style from './StationInfo.module.scss';

const StationInfo = props => {
  const {selectedStation} = props;

  const date = new Date(selectedStation.timestamp);

  const timeStamp = `
    ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}
  `;

  return (
    <div>
      <h3>{selectedStation.name}</h3>

      <table className={style.table}>
        <tbody>
          <tr>
            <th>empty slots</th>
            <th>free bikes</th>
            <th>date</th>
          </tr>
          <tr>
            <td>  
              {selectedStation.empty_slots}
            </td>
            <td>
              {selectedStation.free_bikes}
            </td>
            <td>
              {timeStamp}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
} 

export default StationInfo;
