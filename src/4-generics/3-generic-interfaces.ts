// http://mywebsite.com/users
// http://mywebsite.com/products

// comment due to compilation failing since 'url' not used in fetch function
/*
interface Result<T> {
  data: T | null;
  error: string | null;
}

interface User {
  username: string;
  password: string;
}

interface Product {
  title: string;
  description: string;
}

function fetch<T>(url: string): Result<T> {
  return { data: null, error: null };
}

const result1 = fetch<User>("/users");
console.log(result1.data?.username);

const result2 = fetch<Product>("/products");
console.log(result2.data?.title);
*/
