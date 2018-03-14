const WS_CONNECTED = 'WS_CONNECTED';
const WS_DISCONNECTED = 'WS_DISCONNECTED';

export const wsConnected = () => (
    {
      type: WS_CONNECTED
    }
);

export const wsDisconnected = () => (
    {
      type: WS_DISCONNECTED
    }
);