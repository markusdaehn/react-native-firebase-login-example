export const ActionTypes = Object.freeze({
    OPEN_MAIN_DRAWER: 'OPEN_MAIN_DRAWER',
    CLOSE_MAIN_DRAWER: 'CLOSE_MAIN_DRAWER',
    LOGOUT: 'LOGOUT',
    LOGIN: 'LOGIN'
});

export type Action =
    { type: ActionTypes.OPEN_MAIN_DRAWER }
  | { type: ActionTypes.CLOSE_MAIN_DRAWER }
  | { type: ActionTypes.LOGOUT }
  | { type: ActionTypes.LOGIN };

export type Dispatch = (action:Action | Array<Action>) => any;
export type GetState = () => Object;
export type PromiseAction = Promise<Action>;
