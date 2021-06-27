import Transport from '@ledgerhq/hw-transport';
import Client from 'ledger-web-client';

export default class TransportLedgerWeb extends Transport {
  client: Client;

  constructor(client: Client) {
    super();
    this.client = client;
  }

  send = async (cla: number, ins: number, p1: number, p2: number, _data?: Buffer, _statusList?: number[]) => {
    const statusList = _statusList || [0x9000];
    const data = _data?.toString('hex');

    const res = await this.client.request('devices', 'send', [cla, ins, p1, p2, data, statusList]);

    return Buffer.from(res, 'hex');
  };

  // eslint-disable-next-line
  setScrambleKey() {}
}
