exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        const { payload } = JSON.parse(event.body),
        console.log(payload)
    };
}
