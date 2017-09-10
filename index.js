import io from 'socket.io-client'

window.slater = window.slater || {}

window.slater.reload = function (href = 'https://localhost:3000', cb) {
  const socket = io(href)

  __webpack_public_path__ = href // eslint-disable-line camelcase, no-undef

  socket.on('refresh', data => cb ? cb(data) : window.location.reload())
}
