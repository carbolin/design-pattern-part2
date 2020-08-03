import { Connection } from "./connection";
import { AuthToken } from "./auth-token";
import { Message } from "./message";

export class NotificationServer {

    connect(ip: string): Connection {

        console.log('Connectiong to server');

        return new Connection();

    }

    authenticate(appId: string, key: string): AuthToken {

        return new AuthToken();
    }

    send(authtoken: AuthToken, message: Message, target: string): void {

        console.log('Sending message');

    }

}