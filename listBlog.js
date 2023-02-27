const ListBlogs=()=>{
    const [blogs,setBlogs]=React.useState([]);
    React.useEffect(()=>{
    fetch("https://buka-dev.onrender.com/api/v1/blogs")
    .then(res=>{
        return res.json()})
    .then(
        data=>{
        setBlogs(data)
        console.log(data)
    })
    },[])
    console.log(blogs)
    return (
        blogs.map((element)=>{
         
            const linked=element._id
            return (
            <div key={element._id.toString()}>
            <img className="blog-image"src={element.picture} alt=""/>
          
         <h3 onClick={()=>{window.location.href=`./blog.html?id=${linked}`}}>{element.title}</h3>
          <p onClick={()=>{window.location.href=`./blog.html?id=${linked}`}}>{element.summary}</p>
     
         <span id="likinG">{element.likes}
         <div id={element._id} className="icony"onClick={ (_id) =>{
                 fetch(`https://buka-dev.onrender.com/api/v1/blogs/${element._id}/likes`,{method:"POST"})
                 .then(response=>{return response.json()})
                .then(data=>{console.log(data)
                     window.location.reload()
         })}}>
              <img src="./like.svg" alt=""/>
          </div>
  </span>
</div>)
        })
    )
}
ReactDOM.render(<ListBlogs/> , document.getElementById("group"))