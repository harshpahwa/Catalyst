const Investor = require('../models/investor');

module.exports.create = function(req,res){
    Investor.findOne({email: req.body.email},function(err, investor){
        if(err){console.log('Error in finding investor in database'); return;}
        if(!investor){
            Investor.create(req.body, function(err,investorCreated){
                if(err){console.log('Error in creating investor'); return;}
                console.log('Investor Created:',investorCreated);
                return res.redirect('/');
            });
        }else{
            return res.redirect('back');
        }
    });
}

module.exports.createSession = function(request,response){
    if(request.user.email == "walter@example.com")
        return response.redirect('/investor_db');
    return response.redirect('/investor_db');
}

// ======= sign out ==============
module.exports.destroySession = function (req, res) {
    //req.logout() is used for logout
    req.logout(function (err) {
        if (err) { return next(err); }
    });
    return res.redirect('/');
}