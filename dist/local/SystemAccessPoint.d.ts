import { ClientConfiguration } from "freeathome-api/dist/lib/Configuration";
import { Subscriber } from "freeathome-api/dist/lib/Subscriber";
import { Logger } from "freeathome-api/dist/lib/Logger";
export declare class SystemAccessPoint {
    private configuration;
    private readonly subscriber;
    private client;
    private messageBuilder;
    private crypto;
    private online;
    private settings;
    private connectedAs;
    private user;
    private keepAliveMessageId;
    private keepAliveTimer;
    private deviceData;
    private subscribed;
    private axios;
    private logger;
    private readonly _protocol1;
    private readonly _protocol2;
    private _port;
    private readonly _path2api;
    private _uuid;
    private readonly _minversionAP;
    constructor(configuration: ClientConfiguration, subscriber: Subscriber, logger: Logger | null);
    private createClient;
    private getSettings;
    private getDeviceConfiguration;
    private registerHandlers;
    private handleEvent;
    private unwrapEventData;
    private sendMessage;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    private sendKeepAliveMessage;
    private sendKeepAliveMessages;
    private disableKeepAliveMessages;
    private applyIncrementalUpdate;
    setDatapoint(serialNo: string, channel: string, datapoint: string, value: string): Promise<void>;
    getDeviceData(): any;
}
