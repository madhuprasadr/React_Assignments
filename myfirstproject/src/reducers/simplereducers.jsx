export function reducer(state, action) {
    switch (action.type) {
        case "incrementing-count":
            return { ...state, count: state.count + 1 };
        case "decrementing-count":
            return { ...state, count: state.count - 1 };
        case "changing_name":
            return { ...state,  name: action.payload};
        case "status_change":
            return {  ...state, isSubmitted: !state.isSubmitted };
        default:
            return state;
    }
}

export const INITIAL_STATE = {
        count: 0,
        name: "",
        isSubmitted: false,
};