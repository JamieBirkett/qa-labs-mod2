import Card from "./Card";


function BlogList(props) {
      const blogList = props.blogs.map(blog =>{
    return (
      <Card key={blog.id}>
        <div><b>Title: </b>{blog.title}</div>
        <div><b>Author: </b>{blog.author}</div>
        <div><b>Body: </b>{blog.body}</div>
        <button onClick={() => props.deleteBlog(blog.id)}>Delete</button>
      </Card>
    )
  });
  return blogList;
}

export default BlogList;