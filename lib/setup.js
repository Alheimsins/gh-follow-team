const inquirer = require('inquirer')

module.exports = () => {
  return inquirer.prompt([
    {
      name: 'clientID',
      message: 'clientID',
      type: 'input'
    },
    {
      name: 'clientSecret',
      message:'clientSecret',
      type: 'input'
    },
    { 
      name: 'teamUrl',
      message: 'teamUrl',
      type: 'input'
    }
  ])
}