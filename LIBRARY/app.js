window.onload = () => {
  fetchProducts();
};

function fetchProducts() {
  fetch("products.json")
    .then(res => res.json())
    .then(data => {
      renderCards(data);
    })
    .catch(error => {
      console.error("Error loading products:", error);
    });
}

function renderCards(products) {
  const container = document.getElementById("cardContainer");

  products.forEach(product => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const cardPic = document.createElement("div");
    cardPic.classList.add("card_pic");
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.title;
    cardPic.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card_body");

    const cardTitle = document.createElement("div");
    cardTitle.classList.add("card_title");
    const h1 = document.createElement("h1");
    h1.textContent = product.title;
    cardTitle.appendChild(h1);

    const paragraph = document.createElement("div");
    paragraph.classList.add("paragraph");
    paragraph.textContent = product.description;

    const priceReview = document.createElement("div");
    priceReview.classList.add("price_review");
    priceReview.innerHTML = `Review: ${product.review}<br>Price: ${product.price}`;

    const btnSection = document.createElement("div");
    btnSection.classList.add("btn_section");

    const btn1 = document.createElement("button");
    btn1.type = "button";
    btn1.textContent = "E-BOOK";

    const btn2 = document.createElement("button");
    btn2.type = "button";
    btn2.textContent = "BUY NOW";

    btnSection.appendChild(btn1);
    btnSection.appendChild(btn2);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(paragraph);
    cardBody.appendChild(priceReview);
    cardBody.appendChild(btnSection);

    cardDiv.appendChild(cardPic);
    cardDiv.appendChild(cardBody);

    container.appendChild(cardDiv);
  });
}
