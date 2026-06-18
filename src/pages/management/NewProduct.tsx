import React, { useState } from "react";

function NewProduct() {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [stock, setStock] = useState<number>();
  const [photo, setPhoto] = useState<string>("");

  return (
    <div>
      <main className="product-management">
        <article>
          <form>
            <h2>New Product</h2>
            <div>
              <label>Name</label>
              <input type="text" placeholder="Name" />
            </div>
          </form>
        </article>
      </main>
    </div>
  );
}

export default NewProduct;
