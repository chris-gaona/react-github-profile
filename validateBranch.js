const shell = require('shelljs')
const { stdout, stderr, code } = shell.exec(
  'git branch | grep * | cut -d \' \' -f2',
  { silent: true },
)
if (stdout === 'master') {
  throw new Error('You cannot push directly to the master branch.')
}
