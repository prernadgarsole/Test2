import asana
import smtplib
import os
import sys

# Fetch task details from Asana and send email to assignee
def send_email():
    task_title = sys.argv[1]
    assignee_email = sys.argv[2]

    # Connect to Asana using the ASANA_ACCESS_TOKEN environment variable
    client = asana.Client.access_token(os.environ['1/1204760161937729:b3bcc2c3e471c304b84924c4d1290a59''])

    # Prepare the email content
    subject = 'New Task Created in Asana'
    body = f'A new task "{task_title}" has been created in Asana.'
    message = f'Subject: {subject}\n\n{body}'

    # Send the email using an SMTP server
    with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
        smtp.starttls()
        smtp.login(os.environ['prernagarsole@gmail.com'], os.environ['Prerna@1994'])
        smtp.sendmail(os.environ['FROM_EMAIL'], assignee_email, message)

send_email()
