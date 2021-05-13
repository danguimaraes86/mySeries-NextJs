
export function handleAllowedMethod(httpMethod, allowed, handler, response) {
  if(httpMethod === allowed){
    handler()
  } else {
    return response.status(405).end()
  }
}
