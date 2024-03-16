export const initialState ={
    ships: [],
    loading: false,
    error: null
}

const shipsReducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_SHIPS_REQUEST':
            return {...state, loading: true, error: null};
        case 'FETCH_SHIPS_SUCCESS':
            return {...state, loading: false, ships: action.payload };
        case 'FETCH_SHIPS_FAILURE':
            return {...state, loading: true, error: false};
    }
    
}

export default shipsReducer;