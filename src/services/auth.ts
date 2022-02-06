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
