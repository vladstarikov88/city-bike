// import { createSelector } from 'reselect';

export const getIsNetworksPreloading = state => {
  return state.bikes.isNetworksPreloading
}
export const getisStationsPreloading = state => {
  return state.bikes.isStationsPreloading
}
export const getNetworks = state => state.bikes.networks;
// export const getCurrentStationId = state => state.bikes.currentStation.id

// export const getCurrentStation = createSelector(
//   [getNetworks, getCurrentStationId],
//   (notifications, dates) =>
//     console.log(notifications, dates)
// );
