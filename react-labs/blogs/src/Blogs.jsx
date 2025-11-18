import allBlogs from './blogsData.json'
import BlogList from './BlogList'
import { useEffect, useState } from 'react';

function Blogs(){
  const [blogs, setBlogs] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      fetch('http://localhost:4000/blogs')
          .then(res => {
              return res.json();
          }).then(data => {
              setBlogs(data);
              setError(null);
              setIsLoading(false);
          }).catch (err => {
            setError(err.message);
            setIsLoading(false);
          })
  }, []);

  function deleteBlog(id) {
    setBlogs(blogs.filter(item => item.id !== id));
  }

  return (
    <>
      {blogs && <BlogList blogs={blogs} deleteBlog={deleteBlog} />}
    </>
  );
}

export default Blogs;