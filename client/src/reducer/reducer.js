const initialState = {
    data: [],
    categories: '',
    dataGame: [],
    score: [],
    name: '',
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case 'GET_DATA':
            return {
                ...state,
                data: payload
            }
        case 'SELECT_CATEGORIES':
            return {
                ...state,
                categories: payload
            }
        case 'DATA_CATEGORIES':
            let dataFilter = state.data.find(item => item.title === state.categories);
            return {
                ...state,
                dataGame: dataFilter
            }
        case 'GET_SCORE':
            let sortScore = payload.sort((a, b) => b.score - a.score).slice(0,5);
            return {
                ...state,
                score: sortScore
            }
        case 'SAVE_NAME':
            return {
                ...state,
                name: payload
            }
        default: 
            return state
    }
};

export default rootReducer;