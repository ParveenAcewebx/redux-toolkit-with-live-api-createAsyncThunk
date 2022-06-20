import { useSelector, useDispatch } from "react-redux";
import { allBlog, getBlogStatus, getBlogError, getAllBlog } from "./store/blogSlice";
import { useEffect } from "react";

const BlogListing = () => {
     const dispatch = useDispatch();

    const posts = useSelector(allBlog);
    const postStatus = useSelector(getBlogStatus);
    const error = useSelector(getBlogError);

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(getAllBlog())
        }
    }, [postStatus, dispatch]) 

  
    return (
        <section>
            <h2>All Blog</h2>
            <ul>
            { posts.map(post => {
                return <li key={post.id}>{post.title}</li>
            })}
            </ul>
        </section>
    )
}
export default BlogListing