const userRoutes = require('./user_routes');
const notificationsRoutes = require('./notifications_routes');

module.exports = function (app, db) {
    userRoutes(app, db);
    notificationsRoutes(app, db);
};
