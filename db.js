import Realm from 'realm'

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

export const lastRoundScore = () => new Promise((resolve, reject) => {
  Realm.open({schema: [RoundsSchema]})
    .then(realm => {
      const lastRound = realm.objects('Rounds').filtered('id == 1')
      resolve(lastRound)
    })
    .catch((err) => reject(err))
})
