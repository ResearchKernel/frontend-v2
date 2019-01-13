import React from 'react';
import './AdvanceSearchOptions.scss';

export default class AdvanceSearchOptions extends React.Component {
    render() {
        return (
            <div className="adv-options">
                <div>
                    <h5>Select Year</h5>
                    <div>
                        <input type="checkbox" name="year" value="2011" />
                        <label for="year">2011</label>
                    </div>
                    <div>
                        <input type="checkbox" name="year" value="2012" />
                        <label for="year">2012</label>
                    </div>

                    <div>
                        <input type="checkbox" name="year" value="2013" />
                        <label for="year">2013</label>
                    </div>

                    <div>
                        <input type="checkbox" name="year" value="2014" />
                        <label for="year">2014</label>
                    </div>
                </div>

                <div>
                    <h5>Select Paper</h5>
                    <div>
                        <input type="radio" name="paper" value="data-science" />
                        <label for="paper">Data Science</label>
                    </div>
                    <div>
                        <input type="radio" name="paper" value="ml" />
                        <label for="paper">Machine Learning</label>
                    </div>

                    <div>
                        <input type="radio" name="paper" value="dl" />
                        <label for="paper">Deep Learning</label>
                    </div>

                    <div>
                        <input type="radio" name="paper" value="ai" />
                        <label for="paper">AI</label>
                    </div>
                </div>

                <div>
                    <h5>Select Year</h5>
                    <div>
                        <input type="checkbox" name="year" value="2011" />
                        <label for="year">2011</label>
                    </div>
                    <div>
                        <input type="checkbox" name="year" value="2012" />
                        <label for="year">2012</label>
                    </div>

                    <div>
                        <input type="checkbox" name="year" value="2013" />
                        <label for="year">2013</label>
                    </div>

                    <div>
                        <input type="checkbox" name="year" value="2014" />
                        <label for="year">2014</label>
                    </div>
                </div>
            </div>
        );
    }
}