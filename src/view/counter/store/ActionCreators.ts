export interface INCREMENT_ACTION {
    type: INCREMENT;
}

export interface DECREMENT_ACTION {
    type: DECREMENT;
}

export type ModifyAction = INCREMENT_ACTION | DECREMENT_ACTION;

export const increment = (): INCREMENT_ACTION => ({
    type: INCREMENT
})

export const decrement = (): DECREMENT_ACTION => ({
    type: DECREMENT
})

/* + */
export const INCREMENT = "INCREMENT";
export type INCREMENT = typeof INCREMENT;
/* - */
export const DECREMENT = "DECREMENT";
export type DECREMENT = typeof DECREMENT;