const funky = require('funky')

const getSeed = url => (new URL(url)).searchParams.get('webseed')

function init (elem, opts) {
  let webtorrent = opts.webtorrent
  let magnet = opts.magnet
  console.log(magnet)
  webtorrent.add(magnet, torrent => {
    console.log(torrent)
    torrent.appendTo(elem)
  })
}

const view = funky`
${init}
<webtorrent-img>
</webtorrent-img>
`

module.exports = view
