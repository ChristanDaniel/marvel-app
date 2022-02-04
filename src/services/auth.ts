import md5 from 'md5'

const time = new Date().getTime()
const publicKey = '7bf90079c56e5374727e1c2d7b4dbd13'
const privateKey = 'cff49524fa0df37c865ac3bc3e84133697b5fcfc'
const hash = md5(time + privateKey + publicKey)
const limit = 18

export default {
  ts: time,
  apikey: publicKey,
  hash,
  limit
}

//hotmail
// const publicKey = '55d38ed11eb30d8266c188e95347d927'
// const privateKey = '83d797f0b34d132b9cfc8309213f57672ca1e609'

// gmail:
// const publicKey = '755511f33bfc83d1e428d9804aaed4ed'
// const privateKey = '5991670093c0d791c07c2c6f009d6e3b6eef35e2'

// gmail2:
// const publicKey = '7bf90079c56e5374727e1c2d7b4dbd13'
// const privateKey = 'cff49524fa0df37c865ac3bc3e84133697b5fcfc'
