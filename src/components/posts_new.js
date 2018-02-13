import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderTitleField(field) {
        return (
            <div>
                <input
                    type='text'
                    {...field.input}
                    // this syntax prevents us from needing to input multiple onChange functions
                />
            </div>
        )
    }

    render() {
        return (
            <form>
                <Field
                    name='title'
                    component={this.renderTitleField}
                />
            </form>
            // so field functions similarly to 'input' in plain HTML?
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);