import React from 'react';
import { connect } from "react-redux";

import { TestSelectors, setTestSelector } from "../actions";

export const TestSelector = ({dispatch}) => {
    return (
        <div>
            <select
                onChange={(e) => dispatch(setTestSelector(e.target.value))}
            >
                {Object.values(TestSelectors).map(selector => 
                    <option 
                        key={selector} 
                        value={selector}>
                        {selector}
                    </option>)}
            </select>
        </div>
    );
}

export default connect()(TestSelector);