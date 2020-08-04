import { Device } from "./device";

export class SamsungTv implements Device {

    turnOn(): void {
        console.log('Device Samsung turning on');
    }

    turnOff(): void {
        console.log('Device Samsung turning off');
    }

    setChannel(channel: number): void {

        console.log('Samsung watching channel', channel);
    }

    
}