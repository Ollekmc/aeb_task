exports.getPostMessage = (req, res) => {
    console.log(req.body)
    res.send(req.body)
    }

exports.getMessage = (req,res) => {
    res.render('message', {pageTitle: 'Post Message', path: '/post-message'})
}