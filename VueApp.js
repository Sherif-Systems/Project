
new Vue({
    el: '#app',
    data() {
      return {
        blogs: [],
        newBlog: {
          title: '',
          content: ''
        }
      };
    },
    mounted() {
      // Fetch existing blogs from the JSON file
      this.fetchBlogs();
    },
    methods: {
      fetchBlogs() {
        // Simulating AJAX call to fetch blogs from JSON file
        fetch('blogs.json')
          .then(response => response.json())
          .then(data => {
            this.blogs = data;
          });
      },
      addBlog() {
        // Add new blog to the array and save to JSON file
        this.blogs.push(this.newBlog);

        fetch('blogs.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.blogs)
        })
          .then(() => {
            this.newBlog = {
              title: '',
              content: ''
            };
          });
      },
      deleteBlog(index) {
        // Remove blog from the array and save to JSON file
        this.blogs.splice(index, 1);

    
        fetch('blogs.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.blogs)
        });
      }
    }
  })
