export default (baseUrl) => (req, res) => {
    const parseUrl = new URL(req.url, baseUrl)

    const params ={}

    parseUrl.searchParams.forEach((value, param) => { params[param] = value })

    req.pathname = parseUrl.pathname
    req.params = params
}