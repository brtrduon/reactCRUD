import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// note: Link is nearly identical in function to an anchor tag
// Link prevents the browser from making another HTTP request
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    // componentDidMount will automatically be called by react immediatelyb after this component is called by the DOM
    // ^will not be called if there is a typo i.e. the function MUST be spelled exactly as it is (including case-sensitivity)

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className='list-group-item'>
                    {post.title}
                </li>
            );
        });
    }

    render() {
        console.log(this.props.posts);
        return (
            <div>
                <div className='text-xs-right'>
                    <Link className='btn btn-primary' to='/posts/new'>
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className='list-group'>
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
// We can simply type { fetchPosts } rather than { fetchPosts: fetchPosts } because the key and value are identical
// i.e. we can do this in ES6