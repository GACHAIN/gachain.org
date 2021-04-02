const middleware = {}

middleware['i18n'] = require('..\\middleware\\i18n.js')
middleware['i18n'] = middleware['i18n'].default || middleware['i18n']

middleware['router'] = require('..\\middleware\\router.js')
middleware['router'] = middleware['router'].default || middleware['router']

export default middleware
