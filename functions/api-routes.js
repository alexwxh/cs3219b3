// Filengame: api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to this api crafted with my tears!'
    });
});
// Import fruit controller
var fruitController = require('./fruitController');
// fruit routes
router.route('/fruits')
    .get(fruitController.index)
    .post(fruitController.new);
router.route('/fruits/:fruit_id')
    .get(fruitController.view)
    .put(fruitController.update)
    .delete(fruitController.delete);
// Export API routes
module.exports = router;
