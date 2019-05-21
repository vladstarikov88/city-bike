// import { createSelector } from 'reselect';

export const getIsNetworksPreloading = state => {
  return state.bikes.isNetworksPreloading
}
export const getisStationsPreloading = state => {
  return state.bikes.isStationsPreloading
}
export const getNetworks = state => state.bikes.networks;
export const hasStations = state => {
  return !!(state.bikes.stations && state.bikes.stations.length)
}
export const hasStationId = state => {
  return !!state.bikes.selectedStationId
}
