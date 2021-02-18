exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        console.log(JSON.stringify(context))
    };
}
