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

const newRoundScore = (newRound) => new Promise((resolve, reject) => {
  Realm.open({schema: [RoundsSchema]})
    .then(realm => {
      realm.write(() => {
        realm.create('Rounds', newRound)
        resolve(newRound)
      })
    })
    .catch((err) => reject(err))
})

const lowestRoundScore = () => new Promise((resolve, reject) => {
  Realm.open({schema: [RoundsSchema]})
    .then(realm => {
      const lowestScore = realm.objects('Rounds').min('score')
      resolve(lowestScore)
    })
    .catch((err) => reject(err))
})

const newGolfer = (newRound) => new Promise((resolve, reject) => {
  Realm.open({schema: [GolferSchema]})
    .then(realm => {
      realm.write(() => {
        realm.create('Golfer', newRound)
        resolve(newRound)
      })
    })
    .catch((err) => reject(err))
})

const newRealm = () => new Promise((resolve, reject) => {
  Realm.open({schema: [GolferSchema, RoundsSchema]})
    .then(() => {
      resolve()
    })
    .catch((err) => reject(err))
})

const Golfer1 = {
  id: 1,
  name: 'Anthony',
  handicap: 30
}

const deleteRealm = (config) => {
  Realm.deleteFile(config)
}
