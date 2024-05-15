function postItem(item) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch('http://localhost:3000/api/items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
        }, 1000); // Simulating delay
    });
}

// Example usage
const newItem = {
    name: "Eggs",
    description: "This is a description of the sample item.",
    price: 19.99
};

postItem(newItem).then(data => {
    console.log('Item created:', data);
}).catch(error => {
    console.error('Error:', error);
});
