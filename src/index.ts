import { Shape } from "./composite/shape";
import { Group } from "./composite/group";
import { HumanResource } from "./composite/exercise/human-resource";
import { Truck } from "./composite/exercise/truck";
import { Team } from "./composite/exercise/team";
import { Image } from "./adapter/image";
import { ImageView } from "./adapter/image-view";
import { VividFilter } from "./adapter/vivid-filter";
import { CaramelFilter } from "./adapter/avaFilter/caramel-filter";
import { CaramelAdapter } from "./adapter/caramel-adapter";
import { EmailClient } from "./adapter/exercise/email-client";
import { YahooProvider } from "./adapter/exercise/yahoo-provider";
import { GmailProvider } from "./adapter/exercise/gmail-provider";
import { GmailClient } from "./adapter/exercise/gmail/gmail-client";
import { Stream } from './decorator/stream';
import { CloudSTream } from "./decorator/cloud-stream";
import { Encryptor } from "./decorator/encryptor";
import { Compressor } from "./decorator/compressor";
import { Editor } from "./decorator/exercise/editor";
import { NotificationService } from "./facade/notification-service";
import { TwitterService } from "./facade/exercise/twitter-service";
import { PointService } from "./flyweight/point-service";
import { PointIconFactory } from "./flyweight/point-icon-factory";
import { SonyTv } from "./bridge/sony-tv";
import { AdvancedRemoteControl } from "./bridge/advanced-remote-control";
import { SamsungTv } from "./bridge/samsung-tv";



// Bridge Pattern


const sonyTv = new SonyTv();
const samsungTv = new SamsungTv();
const control = new AdvancedRemoteControl(samsungTv);
control.turnOn();
control.setChannel(2);
control.setChannel(5);
control.turnOff();


// Flyweight Pattern Exercise


// Flyweight Pattern

// const factory = new PointIconFactory();
// const service = new PointService(factory);
// const points = service.getPoints();

// for (const point of points)
//     point.draw();


// Facade Pattern Exercise

// const service = new TwitterService('myApp', 'abc123');
// const tweets = service.gettingRecentTweets();
// console.log(tweets);


// Facade Pattern

// const service = new NotificationService();
// service.send('Hello World', 'target');


// Decorator Pattern Exercise

// const editor = new Editor();
// editor.openProject();


// Decorator Pattern

// function storeCreditCard(stream: Stream) {

//     stream.write('1234-1234-1234-1234');
// }

// storeCreditCard(new CloudSTream());
// storeCreditCard(new Compressor(new CloudSTream()));
// storeCreditCard(new Encryptor(new CloudSTream()));


// Adapter Pattern Exercise

// const emailClient = new EmailClient();
// const yahoo = new YahooProvider();
// const gmail = new GmailProvider(new GmailClient());
// emailClient.add(yahoo);
// emailClient.add(gmail)
// emailClient.getEmails();


// Adapter Pattern

// const image = new Image();
// const vividFilter = new VividFilter();
// const camelFilter = new CaramelFilter();
// const camelAdapter = new CaramelAdapter(camelFilter);

// const imageView = new ImageView(image);
// imageView.previewImage(camelAdapter);


// Composite Pattern Exercise

// const human1 = new HumanResource();
// const human2 = new HumanResource();
// const truck1 = new Truck();
// const subTeam1 = new Team();
// subTeam1.add(human1);
// subTeam1.add(human2);
// subTeam1.add(truck1);

// const human3 = new HumanResource();
// const human4 = new HumanResource();
// const truck2 = new Truck();
// const subTeam2 = new Team();
// subTeam2.add(human3);
// subTeam2.add(human4);
// subTeam2.add(truck2);

// const team = new Team();

// team.add(subTeam1);
// team.add(subTeam2);
// team.deploy();


// Composite Pattern

// const group1 = new Group();
// const shape1 = new Shape();
// const shape2 = new Shape();

// group1.add(shape1);
// group1.add(shape2);

// const group2 = new Group();
// group2.add(group1);
// group2.render();