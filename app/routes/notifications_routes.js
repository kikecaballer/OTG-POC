module.exports = function (app, db) {
  db.then((db) => {
    app.get("/api/notifications/", (req, res) => {
      res.send(db.get("notifications"));
    });

    app.get("/api/notifications/:notificationId", (req, res) => {
      res.send(db.get("notifications").find({ id: req.params.notificationId }));
    });

    app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      next();
    });
  });
};
