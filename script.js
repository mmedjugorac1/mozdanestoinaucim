
document.addEventListener("DOMContentLoaded", () => {
  const productsContainer = document.getElementById("products");
  const errorElement = document.getElementById("error");

  
  fetch("https://fakestoreapi.com/products")
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP greška: " + response.status);
      }
      return response.json();
    })
    .then((products) => {
      
      products.forEach((product) => {
        
        const card = document.createElement("article");
        card.classList.add("product-card");

       
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("image-wrapper");

        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.title;
        img.loading = "auto";

        imageWrapper.appendChild(img);

        
        const body = document.createElement("div");
        body.classList.add("product-body");

        const title = document.createElement("h2");
        title.classList.add("product-title");
        title.textContent = product.title; 

        const category = document.createElement("p");
        category.classList.add("product-category");
        category.textContent = product.category; 

        const description = document.createElement("p");
        description.classList.add("product-description");
        description.textContent = product.description; 

        
        const footer = document.createElement("div");
        footer.classList.add("product-footer");

        const price = document.createElement("span");
        price.classList.add("product-price");
        price.textContent = "$ " + Number(product.price).toFixed(2); 

        const detailsBtn = document.createElement("button");
        detailsBtn.classList.add("btn-details");
        detailsBtn.textContent = "Detalji";

        detailsBtn.addEventListener("click", () => {
          alert(product.title + "\n\n" + product.description);
        });

        footer.appendChild(price);
        footer.appendChild(detailsBtn);

        body.appendChild(title);
        body.appendChild(category);
        body.appendChild(description);
        body.appendChild(footer);

        card.appendChild(imageWrapper);
        card.appendChild(body);

        productsContainer.appendChild(card);
      });
    })
    .catch((error) => {
      console.error(error);
      errorElement.textContent = "Ups, dogodila se greška.";
      errorElement.style.display = "block";
    });
});