/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';

interface UserCardProps {
  id: string;
  userId: number;
  title: string;
  email?: string; // Optional property
}

export default function ListItem() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load products:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div>
      <h1> API Data Example : </h1>
      <ul>
        {products.map((prod: UserCardProps) => (
          <div>
            <li>{prod.id}</li>
            <li>{prod.title}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}
