import { OAuth } from "./oauth"
import { TwitterClient } from "./twitter-client";
import { Tweet } from "./tweet";

export class TwitterService {

    constructor(private appKey: string, private appId: string) { }

    public gettingRecentTweets(): Tweet[] {


        const client = new TwitterClient();

        return client.getRecentTweets(this.getAccessToken());
    }

    private getAccessToken(): string {

        const oauth = new OAuth();
        const reqToken = oauth.getRequestToken('appKey', 'appId');
        return oauth.getAccessToken(reqToken);

    }

}


