function getMessages(req, res) {
    res.json({ message: 'This is the messages endpoint' });
}

function postMessages(req, res) {
    res.json({ message: 'Message received' });
}


module.exports = {
    getMessages, 
    postMessages
}