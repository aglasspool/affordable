exports.handler = function(event, context, callback) {
  const data = JSON.parse(event.body)
  console.log(data)
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(data.name),
  })
}
