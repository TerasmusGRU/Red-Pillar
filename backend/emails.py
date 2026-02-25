from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
import os
from typing import Optional

class EmailDeliveryError(Exception):
    pass

def send_email(to: str, subject: str, content: str, content_type: str = "html"):
    """
    Send email via SendGrid
    
    Args:
        to: Recipient email address
        subject: Email subject line
        content: Email content (HTML or plain text)
        content_type: "html" or "plain"
    """
    sender_email = os.getenv('SENDER_EMAIL', 'noreply@redpillar.co.za')
    
    message = Mail(
        from_email=sender_email,
        to_emails=to,
        subject=subject,
        html_content=content if content_type == "html" else None,
        plain_text_content=content if content_type == "plain" else None
    )
    
    try:
        sg = SendGridAPIClient(os.getenv('SENDGRID_API_KEY'))
        response = sg.send(message)
        return response.status_code == 202
    except Exception as e:
        raise EmailDeliveryError(f"Failed to send email: {str(e)}")

def send_contact_form_email(form_data: dict):
    """
    Send email notification for contact form submission
    """
    recipient_email = "info@redpillar.co.za"
    subject = f"New Contact Form Submission from {form_data.get('firstName', 'Unknown')}"
    
    html_content = f"""
    <html>
        <body style="font-family: Arial, sans-serif; color: #333;">
            <h2 style="color: #dc2626;">New Contact Form Submission</h2>
            <p><strong>From:</strong> {form_data.get('firstName', '')} {form_data.get('lastName', '')}</p>
            <p><strong>Email:</strong> {form_data.get('email', 'Not provided')}</p>
            <p><strong>Phone:</strong> {form_data.get('phone', 'Not provided')}</p>
            <p><strong>Company:</strong> {form_data.get('company', 'Not provided')}</p>
            
            <div style="border: 1px solid #ccc; padding: 15px; margin: 10px 0; background-color: #f9f9f9;">
                <h3 style="color: #dc2626;">Message:</h3>
                <p>{form_data.get('message', 'No message provided')}</p>
            </div>
            
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 12px;">
                <em>This email was sent from the RedPillar Compliance website contact form.</em>
            </p>
        </body>
    </html>
    """
    
    return send_email(recipient_email, subject, html_content, "html")

def send_callback_request_email(callback_data: dict):
    """
    Send email notification for callback request
    """
    recipient_email = "info@redpillar.co.za"
    subject = f"Callback Request from {callback_data.get('name', 'Unknown')}"
    
    html_content = f"""
    <html>
        <body style="font-family: Arial, sans-serif; color: #333;">
            <h2 style="color: #dc2626;">New Callback Request</h2>
            <p><strong>Name:</strong> {callback_data.get('name', 'Not provided')}</p>
            <p><strong>Phone:</strong> {callback_data.get('phone', 'Not provided')}</p>
            <p><strong>Email:</strong> {callback_data.get('email', 'Not provided')}</p>
            <p><strong>Reason:</strong> {callback_data.get('reason', 'Not specified')}</p>
            <p><strong>Preferred Time:</strong> {callback_data.get('preferredTime', 'Not specified')}</p>
            
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 12px;">
                <em>This email was sent from the RedPillar Compliance website callback request.</em>
            </p>
        </body>
    </html>
    """
    
    return send_email(recipient_email, subject, html_content, "html")
