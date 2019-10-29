
const IndexController = function(req, res) {
    
    res.render('index', { title: 'graphql22' });
};

module.exports = IndexController;