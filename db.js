// import Realm from 'realm'
const Realm = require('realm')

const RoundsSchema = {
  name: 'Rounds',
  primaryKey: 'id',
  properties: {
    id: 'int',
    score: 'int',
    par: 'int',
    course: 'string'
  }
}

const GolferSchema = {
  name: 'Golfer',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    handicap: 'int'
  }
}

export const newRoundScore = (newRound) => new Promise((resolve, reject) => {
  Realm.open({schema: [RoundsSchema]})
    .then(realm => {
      realm.write(() => {
        realm.create('Rounds', newRound)
        resolve(newRound)
      })
    })
    .catch((err) => reject(err))
})

export const lowestRoundScore = () => new Promise((resolve, reject) => {
  Realm.open({schema: [GolferSchema, RoundsSchema]})
    .then(realm => {
      const lowestScore = realm.objects('Rounds').min('score')
      resolve(lowestScore)
    })
    .catch((err) => reject(err))
})

export const newGolfer = (newRound) => new Promise((resolve, reject) => {
  Realm.open({schema: [GolferSchema]})
    .then(realm => {
      realm.write(() => {
        realm.create('Golfer', newRound)
        resolve(newRound)
      })
    })
    .catch((err) => reject(err))
})

export const newRealm = () => new Promise((resolve, reject) => {
  Realm.open({schema: [GolferSchema, RoundsSchema]})
    .then(() => {
      resolve()
    })
    .catch((err) => reject(err))
})
