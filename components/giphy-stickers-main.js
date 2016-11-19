const funky = require('funky')
const fetch = window.fetch || require('whatwg-fetch').fetch
const magnet = require('magnet-uri')

const getJSON = (url, cb) => fetch(url)
.then(response => response.json())
.then(json => { cb(null, json) })
.catch(cb)

const getBlob = (url, cb) => fetch(url)
.then(response => response.blob())
.then(blob => { cb(null, blob) })
.catch(cb)

const api = path => `http://api.giphy.com/v1${path}`
const key = 'dc6zaTOxFJmzC'

const fill = elem => document.getElementById('')

function init (elem, opts) {
  // if (!opts.webtorrent) throw new Error('Missing webtorrent, required arg.')
  getJSON(api(`/stickers/trending?api_key=${key}`), (err, data) => {
    if (err) return console.error(err)
    opts.trending = data.data
    elem.update(opts)
  })
}

const getPath = url => (new URL(url)).pathname

function stickerInit (elem, opts) {
  const webtorrent = opts.webtorrent
  elem.onclick = (e) => {
    // TODO: overlay loader
    let url = elem.querySelector('img.giphy-sticker').getAttribute('src')
    if (window.parent) {
      let msg = {
        app: 'dropub',
        api: 'https://none/v1',
        image: url
      }
      window.parent.postMessage(msg, '*')
    }
    window.location = url
    // getBlob(url, (err, blob) => {
    //   if (err) return console.error(err)
    //   let name = url.slice(url.lastIndexOf('/')+1)
    //   let path = getPath(url)
    //   webtorrent.seed(blob, {path, name}, torrent => {
    //     let mag = magnet.decode(torrent.magnetURI)
    //     mag.urlList = [url]
    //     let magurl = magnet.encode(mag)
    //     window.oca
    //     window.location = magurl.slice('magnet:'.length)
    //   })
    // })
  }
}

const giphySticker = funky`
${ stickerInit }
<giphy-sticker>
<img class="giphy-sticker"
     src="${ opts => opts.sticker.images.fixed_height.url}"
/>
</giphy-sticker>
`

const giphyStickers = funky`
<giphy-stickers>
${ opts => opts.trending.map(t => {
  return {
    sticker: t,
    webtorrent: opts.webtorrent
  }
 }).map(giphySticker)
}
</giphy-stickers>
`

const loading = require('./loading')

const view = funky`
${init}
<giphy-stickers-main>
  <link href='//fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css' />
  <style>
  giphy-stickers-main {
    font-family: 'Lato', sans-serif;
  }
  giphy-stickers {
    display:flex;
    width: 100%;
    flex-wrap:wrap;
    justify-content: space-around;
    align-items: baseline;
  }
  giphy-sticker img {
    max-height: 100px;
    max-width: 100px;
    cursor: pointer;
  }
  </style>
  <h3>Trending</h3>
  ${ opts => opts.trending ? giphyStickers(opts) : loading }
</giphy-stickers-main>
`

module.exports = view
