import { EmailProvider } from "./email-provider";

export class YahooProvider implements EmailProvider {

    downloadEmails(): void {

        console.log('Downloading Emails from yahoo');

    }

}
