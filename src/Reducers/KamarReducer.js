const INITIAL_STATE = { id: 0, nomorkamar: "", categoryid: "", harga: "", image: "" };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_ALL_KAMAR":
            return state = action.payload;
        default:
            return state;
    }
}