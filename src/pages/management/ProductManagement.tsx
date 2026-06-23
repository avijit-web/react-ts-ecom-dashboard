import { useState, type ChangeEvent } from "react";

function ProductManagement() {
  const [name, setName] = useState<string>("Shoes");
  const [price, setPrice] = useState<number>(2000);
  const [stock, setStock] = useState<number>(1);
  const [photo, setPhoto] = useState<string>("");

  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    const reader: FileReader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") setPhoto(reader.result);
      };
    }
  };
  const submitHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({
      name,
      price,
      stock,
      photo,
    });
  };

  return (
    <div>
      <main className="product-management">
        <section>
          <strong>ID - ASDASDASDSA</strong>
          <img src={photo} alt="Product" />

          <p>{name}</p>

          {stock > 0 ? (
            <span className="green"> {stock} Available</span>
          ) : (
            <span className="red">Not Available</span>
          )}

          <h3>${price}</h3>
        </section>
        <article>
          <form onSubmit={submitHandler}>
            <h2>New Product</h2>
            <div>
              <label>Name</label>
              <input
                type="text"
                placeholder="Name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label>Price</label>
              <input
                type="number"
                placeholder="Price"
                value={price}
                required
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Stock</label>
              <input
                type="number"
                placeholder="Stock"
                value={stock}
                required
                onChange={(e) => setStock(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Photo</label>
              <input
                type="file"
                placeholder="Stock"
                required
                onChange={changeImageHandler}
              />

              {photo && <img src={photo} alt="New Image" />}
            </div>
            <button type="submit">Create</button>
          </form>
        </article>
      </main>
    </div>
  );
}

export default ProductManagement;
