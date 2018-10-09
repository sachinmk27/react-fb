import { TestSelectors } from '../actions';


const testSelector = (state = TestSelectors.TEXT_ONLY, action) => {
    switch(action.type) {
        case 'SET_TEST_SELECTOR':
            return action.selector;
        default:
            return state
    }
}

export default testSelector