// fruitController.js
// Import fruit model
Fruit = require('./fruitModel');
// Handle index actions
exports.index = function (req, res) {
    Fruit.get(function (err, fruits) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Fruits retrieved successfully",
            data: fruits
        });
    });
};
// Handle create fruit actions
exports.new = function (req, res) {
    var fruit = new Fruit();
    fruit.name = req.body.name;
    fruit.color = req.body.color;
    fruit.taste = req.body.taste;
// save the fruit and check for errors
    fruit.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New fruit created!',
            data: fruit
        });
    });
};
// Handle view fruit info
exports.view = function (req, res) {
    Fruit.findById(req.params.fruit_id, function (err, fruit) {
        if (err)
            res.send(err);
        res.json({
            message: 'fruit details loading..',
            data: fruit
        });
    });
};
// Handle update fruit info
exports.update = function (req, res) {
    Fruit.findById(req.params.fruit_id, function (err, fruit) {
        if (err)
            res.send(err);
        fruit.name = req.body.name;
        fruit.color = req.body.color;
        fruit.taste = req.body.taste;
// save the fruit and check for errors
        fruit.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'fruit info updated',
                data: fruit
            });
        });
    });
};
// Handle delete fruit
exports.delete = function (req, res) {
    Fruit.remove({
        _id: req.params.fruit_id
    }, function (err, fruit) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'fruit deleted'
        });
    });
};
