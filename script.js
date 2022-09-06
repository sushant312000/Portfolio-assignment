function myfunc() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
//   console.log(blogs);

  let blog = data[Math.random() * data.length];
  console.log(blog);
}

myfunc();
