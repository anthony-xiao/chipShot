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

export const lowestRoundScore = () => new Promise((resolve, reject) => {
  Realm.open({schema: [RoundsSchema]})
    .then(realm => {
      const lowestScore = realm.objects('Rounds').min('score')
      resolve(lowestScore)
    })
    .catch((err) => reject(err))
})
