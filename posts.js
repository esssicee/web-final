document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('postsContainer');
    
    // Replace XX with last two digits of your NIM
    fetch(`https://jsonplaceholder.typicode.com/posts/XX`)
        .then(response => response.json())
        .then(post => {
            postsContainer.innerHTML = `
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h2 class="text-2xl font-bold mb-4">Post Details</h2>
                    <p><strong>ID:</strong> ${post.id}</p>
                    <p><strong>Title:</strong> ${post.title}</p>
                    <p><strong>Body:</strong> ${post.body}</p>
                </div>
            `;
        })
        .catch(error => {
            postsContainer.innerHTML = 'Error loading posts';
        });
});