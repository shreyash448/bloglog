import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`)
    const navigate = useNavigate()
    const handleClick = () =>{
        fetch(`http://localhost:8000/blogs/${blog.id}` , {
            method: 'DELETE'
        }).then(() =>{
            navigate('/')
        })
    }
    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}

            <article>
                <h2> {blog && blog.title} </h2>
                <p> Written by {blog && blog.author} </p>
                <div> {blog && blog.body} </div>
                <button onClick={handleClick}>delete blog</button>

            </article>

            
        </div>
    );
}

export default BlogDetails;