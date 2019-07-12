const shell = require('shelljs')
const { stdout, stderr, code } = shell.exec(
  'git branch | grep * | cut -d \' \' -f2',
  { silent: true },
)
console.log('stdout', stdout)
if (stdout === 'master') {
  throw new Error('You cannot push directly to the master branch.')
}
