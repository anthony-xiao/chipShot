import request from 'superagent'

export function test () {
  return request
    .get('https://jsonplaceholder.typicode.com/posts/1')
    .then(post => {
      return post.body
    })
}
