import { Tweet } from "./tweet";

export class TwitterClient {

    public getRecentTweets(accessToken: string): Tweet[] {

        console.log('Getting recent Tweets');

        return [new Tweet('Title 1'), new Tweet('Title 2')];

    }
}