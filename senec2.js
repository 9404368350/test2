var seneca = require('seneca')()
seneca.use('jsonfile-store', {
  folder:'/'
})
.use('entity')

