import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    // componentDidMount will automatically be called by react immediatelyb after this component is called by the DOM
    // ^will not be called if there is a typo i.e. the function MUST be spelled exactly as it is (including case-sensitivity)

    render() {
        return (
            <div>
                Posts index 
            </div>
        );
    }
}

export default connect(null, { fetchPosts })(PostsIndex);
// We can simply type { fetchPosts } rather than { fetchPosts: fetchPosts } because the key and value are identical
// i.e. we can do this in ES6