const url = 'https://39pbxuvhtb.execute-api.us-east-1.amazonaws.com/dev/email/send'

function post(url, body, callback) {
    var req = new XMLHttpRequest();
    req.open("POST", url, true);
    req.setRequestHeader("Content-Type", "application/json");
    req.addEventListener("load", function () {
        if (req.status < 400) {
            callback(null, JSON.parse(req.responseText));
        } else {
            callback(new Error("Request failed: " + req.statusText));
        }
    });
    req.send(JSON.stringify(body));
}

function success() {
    console.log('Success')
}
function error(err) {
    console.log(err)
}
const sendEmail = (data) => {
    post(url, data, function (err, res) {
        if (err) { return error(err) }
        success()
    })
}

export default sendEmail;