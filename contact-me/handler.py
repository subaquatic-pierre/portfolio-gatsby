import boto3
import os
import json
from botocore.exceptions import ClientError

# This address must be verified with Amazon SES.
SENDER = os.environ.get('EMAIL')
# Send to
RECIPIENT = os.environ.get('EMAIL')
AWS_REGION = "us-east-1"
SUBJECT = "Contact Me"
CHARSET = "UTF-8"


def send_email(data, context):
    # Create a new SES resource and specify a region.
    client = boto3.client('ses', region_name=AWS_REGION)
    name = data['name']
    email = data['email']
    message = data['message']

    BODY_HTML = f"""
            <html>
            <head></head>
            <body>
                <h1>Contact Me</h1>
                <hr style="width:20%; margin-right:auto;">
                <h3>Name: {name}<h3>
                <h3>Email: {email}<h3>
                <hr style="width:20%; margin-right:auto;">
                <h3>Message: <h3>
                <p>{message}</p>
            </body>
            </html>
        """

    # The email body for recipients with non-HTML email clients.
    BODY_TEXT = f"""
            Contact us ! \n
            Name: {name} \n
            Email: {email} \n
            Message: {message} \n
        """

    # Try to send the email.
    try:
        # Provide the contents of the email.
        response = client.send_email(
            Destination={
                'ToAddresses': [
                    RECIPIENT,
                ],
            },
            Message={
                'Body': {
                    'Html': {
                        'Charset': CHARSET,
                        'Data': BODY_HTML,
                    },
                    'Text': {
                        'Charset': CHARSET,
                        'Data': BODY_TEXT,
                    },
                },
                'Subject': {
                    'Charset': CHARSET,
                    'Data': SUBJECT,
                },
            },
            Source=SENDER,
        )
    # Display an error if something goes wrong.
    except ClientError as e:
        print(e.response['Error']['Message'])
    else:
        print("Email sent! Message ID:"),
        print(response['MessageId'])
        return ({
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            },
            'body': json.dumps('Successsful email send!')
        })
