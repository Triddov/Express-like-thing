export default (baseUrl) => (req, res) => {
    const parseUrl = new URL(req.url, baseUrl)

    req.pathname = parseUrl.pathname
}