const giphyMain = require('./components/giphy-stickers-main')
const torrentImage = require('./components/webtorrent-image')
const webtorrent = require('webtorrent')()

let url = new URL(window.location.toString())
let search = url.searchParams

function isMagnet () {
  let params = ['xt', 'dn', 'tr']
  for (var i = 0; i < params.length; i++) {
    if (search.has(params[i])) return true
  }
  return false
}


let elem
if (isMagnet()) {
  elem = torrentImage({webtorrent, magnet: 'magnet:' + window.location.search })
} else {
  elem = giphyMain({ webtorrent })
}

if (elem) document.getElementById('center-container').appendChild(elem)
