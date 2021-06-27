/// <reference types="node" />
import Transport from '@ledgerhq/hw-transport';
import Client from 'ledger-web-client';
export default class TransportLedgerWeb extends Transport {
    client: Client;
    constructor(client: Client);
    send: (cla: number, ins: number, p1: number, p2: number, _data?: Buffer, _statusList?: number[]) => Promise<Buffer>;
    setScrambleKey(): void;
}
