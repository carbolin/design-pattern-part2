import { EmailProvider } from "./email-provider";

export class EmailClient {

    private providers: EmailProvider[] = [];

    add(provider: EmailProvider) {

        this.providers.push(provider);
    }

    getEmails() {

        for (const provider of this.providers)
            provider.downloadEmails();
    }
}