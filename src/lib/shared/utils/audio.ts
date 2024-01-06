import { AudioGiber } from 'audio-giber'

export const Player = new AudioGiber({
  name: 'General Audio Context',
  nameId: 'audio-player',
  DEV: true,
  preload: true,
  onEndTrack: (event) => {
    console.log('Track ended', event)
  },
  ready: (event) => {
    console.log('Audio ready', event)
  },
  src: '/sounds/hey-listen.mp3',
  arrayTracks: [],
})
