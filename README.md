# Sequelize Models Template

Build your own sequelize models package with this template, allowing you to use in your project and services.

## Installation

In a new folder, run the following command:

```bash
git clone https://github.com/sagas29/sequelize-models-template
```

Remove .git folder from the template folder.

## Usage

- Start creating models inside `models` folder, and then export in `index.js` file, in `lib` folder.

- Inside `models` folder, it's included a file `users.js`, you can use it as a example.

- Create a `.env` file and update env variables based in `.env.example` file.

## Testing

Install dependencies:

```bash
npm install
```

To test models, run the following command:

```bash
npm run test
```

Last command will throw an error if there is any problem.

## Publishing to npm

For you can use the package, you need to publish it to npm.

You can follow official instructions to publish to npm: <https://docs.npmjs.com/creating-and-publishing-scoped-public-packages>

## Using in your project

Install you package, that you recently published

```bash
npm install your-package-name
```

Create a `connection` file, and import all models inside your project:

```js

// Simple connection file
const { User } = require('your-package-name');

const sequelize = new Sequelize(connectionsParameters);

// Initialize all models and sync
Object.keys(models).forEach((modelName) => {
  db[modelName] = models[modelName](sequelize, Sequelize)
  db[modelName].sync()
})

// Associate models each others
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

// Export models
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db

```

Now you can use your models in your project.

```js
// Use case
const { User } = require('./connection');

const getUsers = async () => {
  const users = await User.findAll();
  return users;
}

```
