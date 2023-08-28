//404 page middleware added into app.js
const notFound = (req, res) => res.status(404).send('Route does not exist')

module.exports = notFound