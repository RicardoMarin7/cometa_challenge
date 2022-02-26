const fetcher = async (url) => await (await fetch(url)).json()

export default fetcher