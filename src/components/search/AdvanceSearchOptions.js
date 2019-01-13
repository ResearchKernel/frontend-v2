import React from 'react';
import './AdvanceSearchOptions.scss';

export default class AdvanceSearchOptions extends React.Component {
    render() {
        return (
            <div className="adv-options">
                <section>
                    <div className="section-header">Lorem Ipsum</div>
                    <Radio 
                        id="2017"
                        name="year"
                        value="2017"
                        label_text="this is a label text"
                    />
                    <Radio 
                        id="2018"
                        name="year"
                        value="2018"
                        label_text="this is a label text"
                    />
                </section>
                <section>
                    <div className="section-header">Lorem Ipsum</div>
                    <Radio 
                        id="2019"
                        name="year"
                        value="207"
                        label_text="this is a label text"
                    />
                    <Radio 
                        id="2020"
                        name="year"
                        value="2018"
                        label_text="this is a label text"
                    />
                </section>
                <section>
                    <div className="section-header">Lorem Ipsum</div>
                    <Radio 
                        id="2021"
                        name="year"
                        value="2017"
                        label_text="this is a label text"
                    />
                    <Radio 
                        id="2022"
                        name="year"
                        value="2018"
                        label_text="this is a label text"
                    />
                </section>
                <section>
                    <div className="section-header">Lorem Ipsum</div>
                    <Radio 
                        id="2023"
                        name="year"
                        value="2017"
                        label_text="this is a label text"
                    />
                    <Radio 
                        id="2024"
                        name="year"
                        value="2018"
                        label_text="this is a label text"
                    />
                </section>
                <section>
                    <div className="section-header">Lorem Ipsum</div>
                    <Radio 
                        id="2025"
                        name="year"
                        value="2017"
                        label_text="this is a label text"
                    />
                    <Radio 
                        id="2026"
                        name="year"
                        value="2018"
                        label_text="this is a label text"
                    />
                </section>
            </div>
        );
    }
}

/**
 * Radio
 * @param {props} - accepts props from parent component
 */

const Radio = props => {
    return(
        <div className="form-check">
            <input className="form-check-input" type="radio" name={props.name} value={props.value} id={props.id} />
            <label className="form-check-label" htmlFor={props.id}>
                {props.label_text}
            </label>
        </div>
    );
}