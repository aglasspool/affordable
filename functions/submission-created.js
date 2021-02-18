exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        const email = JSON.parse(event.body).payload.email
        console.log(`Recieved a submission: ${email}`)
    };
}
