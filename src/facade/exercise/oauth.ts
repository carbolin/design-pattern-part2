export class OAuth {

    public getRequestToken(appKey: string, appId: string): string {

        console.log('Generating request Token');

        return 'request Token';
        
    }

    public getAccessToken(requestToken: string) {

        console.log('Getting access Token');

        return 'access Token';
    }

}
