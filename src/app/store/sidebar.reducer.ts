import { Action } from '@ngrx/store';

export function sidebarReducer(state: boolean = false, action: Action) {
    switch (action.type) {
        case 'CHANGE_SIDEBAR_STATE':
            return !state;
        default:
            return state;
    }
}