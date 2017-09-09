import io from 'socket.io-client'

window.slater = window.slater || {}

window.slater.reload = function (href, cb) {
  const socket = io(href || 'https://localhost:3000')

  __webpack_public_path__ = href || 'https://localhost:3000' // eslint-disable-line camelcase, no-undef

  socket.on('refresh', data => cb ? cb(data) : window.location.reload())
}
