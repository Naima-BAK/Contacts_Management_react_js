import React from 'react'
import classnames from 'classnames';

export default function InputGroup(props) {
    const { label, name, type, value, onChange, errors } = props;
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            {/* evenement  onChage pour modifier la valeur de input */}
            <input className={classnames('form-control', {
                'is-invalid': errors
            })}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
            />
            <div className="invalid-feedback">{errors}</div>

        </div >
    )
}
