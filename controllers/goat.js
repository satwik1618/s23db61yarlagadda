var goat = require('../models/goat');
// List of all goats
exports.goat_list = function(req, res) {
res.send('NOT IMPLEMENTED: goat list');
};
// for a specific goat.
exports.goat_detail = function(req, res) {
res.send('NOT IMPLEMENTED: goat detail: ' + req.params.id);
};
// Handle goat create on POST.
exports.goat_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: goat create POST');
};
// Handle goat delete form on DELETE.
exports.goat_delete = function(req, res) {
res.send('NOT IMPLEMENTED: goat delete DELETE ' + req.params.id);
};
// Handle goat update form on PUT.
exports.goat_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: goat update PUT' + req.params.id);
};