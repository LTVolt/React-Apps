import { useParams } from 'react-router-dom';
import * as data from '../data/data.js'


const Post = () => {
    const postParams = useParams();

    const currentPost = data.posts.find(post => {
            return postParams.postID === post.id
    });

    return ( 
    <>
        <p className='text-center'>{currentPost ? currentPost.title : "Post not found"}</p>
        <p className='text-center mt-4'>{currentPost ? currentPost.content : "Content not found"}</p>
    </> );
}
 
export default Post;