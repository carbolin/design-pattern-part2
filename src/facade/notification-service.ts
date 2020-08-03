import { NotificationServer } from "./notification-server";
import { AuthToken } from "./auth-token";
import { Message } from "./message";

export class NotificationService {


    send(message: string, target: string): void {

        const server = new NotificationServer();
        const connection = server.connect('ip');
        const authToken = server.authenticate('appId', 'key');
        server.send(authToken, new Message(message), target);
        connection.disconnect();
    }

}
