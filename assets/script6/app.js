const productList = {
  products: [
    {
      title: "A Pillo",
      imageUrl:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2F54M4LhnKwqo%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D54M4LhnKwqo&tbnid=0V6t_adWRdSfIM&vet=12ahUKEwi96bH5zaP6AhWRAqYKHQPNDGkQMygIegQIARAy..i&docid=NWq-k1RSlFFK-M&w=1280&h=720&q=%EC%82%AC%EB%9E%91%ED%95%98%EB%8A%94%20%EC%B9%9C%EA%B5%AC%EC%99%80%20%EB%A7%A4%EC%9D%BC%EA%B0%99%EC%9D%B4%20%EB%AA%A8%EC%97%AC%EC%84%9C%20%EB%A6%B4%EC%8A%A4&ved=2ahUKEwi96bH5zaP6AhWRAqYKHQPNDGkQMygIegQIARAy",
      price: 19.99,
      description: "A soft pillow",
    },
    {
      title: "A Carpet",
      imageUrl:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fhelpx.adobe.com%2Fcontent%2Fdam%2Fhelp%2Fen%2Fphotoshop%2Fusing%2Fquick-actions%2Fremove-background-before-qa1.png&imgrefurl=https%3A%2F%2Fhelpx.adobe.com%2Fkr%2Fphotoshop%2Fusing%2Fquick-actions%2Fremove-background.html&tbnid=iaxN8zLm7TYajM&vet=12ahUKEwisqdiozqP6AhW1NaYKHV3IBJQQMygBegUIARC9AQ..i&docid=C6FJRaouy0cijM&w=800&h=551&q=%EC%9D%B4%EB%AF%B8%EC%A7%80&ved=2ahUKEwisqdiozqP6AhW1NaYKHV3IBJQQMygBegUIARC9AQ",
      price: 89.99,
      description: "A carpet which you might like - or not.",
    },
  ],
  render() {
    const renderHook = document.getAnimations("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
        <div>
            <img src="${prod.imageUrl}" alt="${prod.title}">
            <div class="product-item__content">
                <h2>${prod.title}</h2>
                <h3>\$${prod.price}</h3>
                <p>${prod.description}</p>
                <button>Add to Cart</button>
            </div>
        </div>
        `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render()
