import { Device } from "./device";

export class SonyTv implements Device {

    turnOn(): void {
        console.log('Device Sony turning on');
    }

    turnOff(): void {
        console.log('Device Sony turning off');
    }

    setChannel(channel: number): void {

        console.log('Sony watching channel', channel);
    }
    
}
