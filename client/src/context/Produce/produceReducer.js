
import {
    ORDER
} from "../types";

export default (state, action) => {
    switch (action.type) {
        case ORDER:
            return {
                ...state,
                order: action.payload
            }
        default:
            return state
    }

}