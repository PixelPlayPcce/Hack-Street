document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.querySelector('.product-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const sellForm = document.getElementById('sell-form');

    let products = [
        { name: 'Bebinca', description: 'Traditional Goan layered dessert', price: 250, category: 'foods', image: 'https://ychef.files.bbci.co.uk/1280x720/p0gjfcls.jpg' },
        { name: 'Goan Fish Curry', description: 'Spicy coconut-based fish curry', price: 300, category: 'foods', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUjs-iG0OmqX1ZzXuzWWy_PLkj0rc8G-0sNg&s' },
        { name: 'Feni', description: 'Traditional Goan cashew spirit', price: 500, category: 'foods', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3-KJ2B7jnUbGhDkCahhMQM8E1stI4Cxhwng&s' },
        { name: 'Kunbi Saree', description: 'Handwoven with intricate designs', price: 2000, category: 'textile', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaG9nVgvWs5yB--DdBF2oQW-_hUpVOlxuTJw&s' },
        { name: 'Goan Challis', description: 'Lightweight, soft fabric with floral prints', price: 800, category: 'textile', image: 'https://cdn.shopify.com/s/files/1/1150/2764/files/History_76_1024x1024.jpg?v=1660891343' },
        { name: 'Goan Batik Prints', description: 'Vibrant batik printed fabrics', price: 600, category: 'textile', image: 'https://images.jdmagicbox.com/quickquotes/images_main/batik-print-dress-material-2226675421-t77nm7wa.jpg' },
        { name: 'Coconut Bowl', description: 'Handmade bowls by skilled artisans from Goa', price: 500, category: 'goods', image: 'https://content.jdmagicbox.com/rep/b2b/coconut-shell-bowl/coconut-shell-bowl-1.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit' },
        { name: 'Handwoven Baskets', description: 'Durable cane baskets with intricate designs', price: 350, category: 'goods', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBZO-A-rU6v9ikBkVwuSJusIwZZ04gWDuWHw&s' },
        { name: 'Goan Wall hanging', description: 'Intricate wooden wall hangings', price: 1200, category: 'goods', image: 'https://www.giheritage.com/uploads/product/tribal-dance-wall-hanging-h.jpg' }
    ];

    function createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>₹${product.price}</p>
            <button onclick="window.location.href='buybebinca.html'">Buy Now</button>
        `;
        return card;
    }

    function displayProducts(productsToDisplay) {
        productGrid.innerHTML = '';
        productsToDisplay.forEach(product => {
            productGrid.appendChild(createProductCard(product));
        });
    }

    function filterProducts(category) {
        if (category === 'all') {
            displayProducts(products);
        } else {
            const filteredProducts = products.filter(product => product.category === category);
            displayProducts(filteredProducts);
        }
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterProducts(button.dataset.filter);
        });
    });

    sellForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = sellForm.querySelector('input[placeholder="Product Name"]').value;
        const description = sellForm.querySelector('textarea').value;
        const price = parseFloat(sellForm.querySelector('input[placeholder="Price (₹)"]').value);
        const category = sellForm.querySelector('select').value;
        const imageFile = sellForm.querySelector('input[type="file"]').files[0];

        const newProduct = {
            name,
            description,
            price,
            category,
            image: URL.createObjectURL(imageFile) 
        };

        products.push(newProduct);

        displayProducts(products);

        sellForm.reset();

        alert('Product added successfully!');

        document.querySelector('#marketplace').scrollIntoView({ behavior: 'smooth' });
    });

    displayProducts(products);
});