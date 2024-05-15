function postItem(item, callback) {
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
        .then(data => callback(null, data))
        .catch(error => callback(error, null));
    }, 1000); // Simulating delay
}


// Example usage
const newItem = {
    name: "Item from Callback",
    description: "This is a description of the sample item.",
    price: 19.99
};


// Example usage
postItem(newItem, (error, data) => {
    if (error) {
        return console.error('Error:', error);
    }
    console.log('Item created:', data);
});