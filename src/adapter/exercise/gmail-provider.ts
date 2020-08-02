import { EmailProvider } from "./email-provider";
import { GmailClient } from "./gmail/gmail-client";

export class GmailProvider implements EmailProvider {

    constructor(private client: GmailClient) {}

    downloadEmails(): void {

        this.client.connect();

        this.client.getEmails();

        this.client.disconnect();
    }

    
}