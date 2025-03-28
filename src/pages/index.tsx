import { useRouter } from 'next/router';
import { useEffect } from 'react';
import React from 'react';
import { ProductProvider } from '@/context/ProductContext';
import { ProductForm } from '@/components/products/ProductForm';
import Head from 'next/head';


export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/login');
  }, [router]);

  return (
    <>
      <Head>
        <title>Wholesale Order Management</title>
        <meta name="description" content="Wholesale Order Management System" />
      </Head>
      <ProductProvider>
        <div className="container">
          <h1>Wholesale Order Management</h1>
          <div className="dashboard">
            <section className="product-section">
              <h2>Add New Product</h2>
              <ProductForm />
            </section>
            {/* Additional dashboard sections can be added here */}
          </div>
        </div>
      </ProductProvider>
    </>
  );
}