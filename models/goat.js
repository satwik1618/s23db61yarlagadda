var goat = require('./goat');
// List of all goats
exports.goat_list = async function(req, res) {
    try{
    thegoats = await goat.find();
    res.send(thegoats);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
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
exports.goat_view_all_Page = async function(req, res) {
    try{
    thegoats = await goat.find();
    res.render('goat', { title: 'goat Search Results', results: thegoats });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   exports.goat_create_post = async function(req, res) {
    console.log(req.body)
    let document = new goat();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"goat_type":"goat", "cost":12, "size":"large"}
    document.goat_color = req.body.goat_color;
    document.goat_breed = req.body.goat_breed;
    document.goat_price = req.body.goat_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   }