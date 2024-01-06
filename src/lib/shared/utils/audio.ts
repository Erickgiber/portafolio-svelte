import { AudioGiber } from 'audio-giber'

export const Player = new AudioGiber({
  name: 'General Audio Context',
  nameId: 'audio-player',
  preload: true,
  src: '/sounds/hey-listen.mp3',
  arrayTracks: [],
})
