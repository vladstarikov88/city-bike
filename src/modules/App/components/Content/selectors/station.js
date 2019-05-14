export const getStation = state => {
  const stationId = state.bikes.selectedStationId;

  return state.bikes.stations
    .find(station => station.id === stationId)
};
