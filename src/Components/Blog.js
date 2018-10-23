import React, { Component } from 'react';
import axios from 'axios';

import TopMenu from './TopMenu';
import Footer from './Footer';
import RecentBlog from './RecentBlog';
import BlogPosts from './BlogPosts';

export default class Blog extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get( 'https://jsonplaceholder.typicode.com/posts' )
            .then( response => {
                const posts = response.data.slice(0, 3);
                this.setState({ posts: posts});
            });
    }

    render() {
        const posts = this.state.posts.map(post => {
            return  <BlogPosts key={post.id} title={post.title} body={post.body}/>
        });
        return(
            <div>
                <TopMenu />
                <div>{posts}</div>
                <RecentBlog />
                <Footer />
            </div>
        );
    };
}