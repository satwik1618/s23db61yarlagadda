var ant = require('../models/ant');
// List of all ants
exports.ant_list = async function(req, res) {
    try{
    theants = await ant.find();
    res.send(theants);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// for a specific ant.
exports.ant_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: ant detail: ' + req.params.id);
};
// Handle ant create on POST.
exports.ant_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: ant create POST');
};
// Handle ant delete form on DELETE.
exports.ant_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: ant delete DELETE ' + req.params.id);
};
// Handle ant update form on PUT.
exports.ant_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: ant update PUT' + req.params.id);
};
exports.ant_view_all_Page = async function(req, res) {
    try{
    theants = await ant.find();
    res.render('ant', { title: 'ant Search Results', results: theants });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   exports.ant_create_post = async function(req, res) {
    console.log(req.body)
    let document = new ant();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"ant_type":"goat", "cost":12, "size":"large"}
    document.ant_color = req.body.ant_color;
    document.ant_breed = req.body.ant_breed;
    document.ant_price = req.body.ant_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   }