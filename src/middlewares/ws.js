import {wsConnected, wsDisconnected} from '../actions/ws';
import {WS_ROOT} from '../const/global';

const SOCKET_STATES = {
  CONNECTING: 0,
  OPEN: 1,
  CLOSING: 2,
  CLOSED: 3
};

const wsMiddleware = ({dispatch}) => next => {
  const websocket = new WebSocket(WS_ROOT);

  Object.assign(websocket, {
    onopen() {
      active = true;
      dispatch(wsConnected())
    },
    onclose() {
      active = false;
      dispatch(wsDisconnected())
    },
    onerror(error) {
      console.log(`WS Error: ${ error.data }`);
    },
    onmessage(event) {
      dispatch(JSON.parse(event.data));
    }
  });

  return action => {
    if (websocket.readyState === SOCKET_STATES.OPEN &&
        action.meta &&
        action.meta.websocket) {
      // Remove action metadata before sending
      const cleanAction = Object.assign({}, action, {
        meta: undefined
      });
      websocket.send(JSON.stringify(cleanAction));
    }
    next(action);
  };
};

export default wsMiddleware;