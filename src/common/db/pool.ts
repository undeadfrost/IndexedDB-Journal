import Localstorage from 'localforage';

Localstorage.config({
  name: 'journal',
  version: 1.0,
  description: 'database'
})

export default Localstorage;
