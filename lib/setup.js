const inquirer = require('inquirer')

module.exports = () => {
  return inquirer.prompt([
    { 
      name: 'teamUrl',
      message: 'teamUrl',
      type: 'input'
    }
  ])
}