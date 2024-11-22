package io.bookitnow.backend.v1.service;

import org.springframework.stereotype.Service;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Content;
import com.sendgrid.helpers.mail.objects.Email;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.AddressException;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import com.sendgrid.*;

@Service
public class MailService {

    public void sendEmail (String to, String subject, String body) {
        Email from = new Email("habib@tidstrend.se");

        Email toEmail = new Email(to);
        Content content = new Content("text/plain", body);
        Mail mail = new Mail(from, subject, toEmail, content);
        SendGrid sendGrid = new SendGrid("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");
        Request request = new Request();
        try {
            request.setMethod(Method.POST);
            request.setEndpoint("mail/send");
            request.setBody(mail.build());
            Response response = sendGrid.api(request);
            System.out.println(response.getStatusCode());
        } catch (Exception ex) {
            ex.printStackTrace();
            System.err.println("Error sending email");
        }
    }
    

}
