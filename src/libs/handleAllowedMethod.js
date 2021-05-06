
export function handleAllowedMethod(httpMethod, allowed, callback, res) {
  if(httpMethod === allowed){
    callback()
  } else {
    res.status(405).end()
  }
}
