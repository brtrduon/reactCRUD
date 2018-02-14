import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        return (
            <div className='form-group'>
            <label>{field.label}</label>
                <input
                className='form-control'
                    type='text'
                    {...field.input}
                    // this syntax prevents us from needing to input multiple onChange functions
                />
                {field.meta.error}
            </div>
        );
    }

    render() {
        return (
            <form>
                <Field
                    label='Title'
                    name='title'
                    component={this.renderField}
                />
                <Field
                    label='Categories'
                    name='categories'
                    component={this.renderField}
                />
                <Field
                    label='Post Content'
                    name='content'
                    component={this.renderField}
                />
            </form>
            // so field functions similarly to 'input' in plain HTML?
        );
    }
}

function validate(values) {
    const errors = {};

    // validate the inputs from 'values'
    if (!values.title || values.title.length < 3) {
        errors.title = 'Title needs to be at least 3 characters';
    }
    if (!values.categories) {
        errors.title = 'Enter some categories';
    }
    if (!values.content) {
        errors.content = 'Enter some content';
    }

    // if errors is empty, the form is fine to submit
    // if errors has ANY properties, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);