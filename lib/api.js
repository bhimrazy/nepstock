export async function getdata() {
    const res = await fetch(`https://newweb.nepalstock.com/api/nots/nepse-index`)
    const data = await res.json()
    return data
}