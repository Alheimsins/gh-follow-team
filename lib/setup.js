const inquirer = require('inquirer')

module.exports = () => {
  return inquirer.prompt([
    {
      name: 'clientId',
      message: 'clientId',
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