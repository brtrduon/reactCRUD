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
                    label='Tags'
                    name='tags'
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

export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);