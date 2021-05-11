
export function handleAllowedMethod(httpMethod, allowed, callback, res) {
  if(httpMethod === allowed){
    callback()
  } else {
    return res.status(405).end()
  }
}
