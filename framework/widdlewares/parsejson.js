export default (req, res) => {
    res.writeHead(200, {
        'content-type': 'application/json; charset=utf-8'
    })

    res.send = (data) => {
        res.end(JSON.stringify(data))
    }
}
