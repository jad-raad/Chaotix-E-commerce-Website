import ProductGallery from "../components/ProductGallery"; 

function Products() {
    return (
      <div className= 'ProductsLayout'>
        <h1>Our Products</h1>
        <p>Explore our range of high-quality products, crafted for those who live without limits.</p>
        <ProductGallery/>
      </div>
    );
  }
  
  export default Products;