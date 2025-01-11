"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEraser } from '@fortawesome/free-solid-svg-icons';
import Card from '../../components/Card/Card';
import { Form, Formik } from 'formik';
import TextField from '../../components/TextField';
import { ChangeEvent, useState } from 'react';

export default function HomePage({ products }: { products: any[] }) {
     const [filteredProducts, setFilteredProducts] = useState(products); // สินค้าหลังกรอง
     const [activeFilter, setActiveFilter] = useState("All"); // ตัวกรองที่เลือก

     const handleFilter = (category: string) => {
          setActiveFilter(category);
          const filteredByCategory =
               category === "All"
                    ? products
                    : products.filter(
                         (product) => product.category === category.toLowerCase()
                    );

          setFilteredProducts(filteredByCategory);
     };

     return (
          <main className="p-6">
               <h1 className="text-2xl font-bold mb-4">Explore Products</h1>
               <Formik
                    enableReinitialize
                    initialValues={{
                         search: "",
                    }}
                    onSubmit={(values) => {
                         const searchQuery = values.search.toLowerCase();
                         setFilteredProducts(
                              products.filter((product) =>
                                   product.name.toLowerCase().includes(searchQuery)
                              )
                         );
                    }}
               >
                    {({ setFieldValue, values }) => (
                         <Form>
                              <div className="w-topbar">
                                   {/* Input ค้นหา */}
                                   <div className="flex-1">
                                        <label htmlFor="search">ค้นหาชื่อผู้ฝากขาย</label>
                                        <TextField
                                             name="search"
                                             placeholder="ค้นหา..."
                                             value={values.search}
                                             onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                  setFieldValue("search", e.target.value)
                                             }
                                             className="border border-gray-300 p-2 rounded-lg w-full mb-4"
                                        />
                                   </div>
                                   <div className="group-btn">
                                        {/* ปุ่มค้นหา */}
                                        <button
                                             type="submit"
                                             className="btn-submit"
                                        >
                                             <FontAwesomeIcon icon={faSearch} />
                                             ค้นหา
                                        </button>

                                        {/* ปุ่มล้างค่า */}
                                        <button
                                             type="reset"
                                             className="btn-reset"
                                             onClick={() => {
                                                  setFilteredProducts(products); // รีเซ็ตสินค้าทั้งหมด
                                                  setActiveFilter("All"); // รีเซ็ตตัวกรอง
                                             }}
                                        >
                                             <FontAwesomeIcon icon={faEraser} /> ล้างค่า
                                        </button>
                                   </div>
                              </div>

                              {/* ปุ่ม Filter */}
                              <div className="flex gap-4 mb-6 mt-3">
                                   <button
                                        type="button"
                                        className={`px-4 py-2 rounded-lg ${activeFilter === "All" ? "bg-black text-white" : "bg-gray-200 text-black"
                                             }`}
                                        onClick={() => handleFilter("All")}
                                   >
                                        All
                                   </button>
                                   <button
                                        type="button"
                                        className={`px-4 py-2 rounded-lg ${activeFilter === "Vegetables" ? "bg-black text-white" : "bg-gray-200 text-black"
                                             }`}
                                        onClick={() => handleFilter("Vegetables")}
                                   >
                                        Vegetables
                                   </button>
                                   <button
                                        type="button"
                                        className={`px-4 py-2 rounded-lg ${activeFilter === "Fruits" ? "bg-black text-white" : "bg-gray-200 text-black"
                                             }`}
                                        onClick={() => handleFilter("Fruits")}
                                   >
                                        Fruits
                                   </button>
                              </div>

                              {/* Product Grid */}
                              <section>
                                   <h2 className="text-xl font-semibold mb-4">Products ({filteredProducts.length})</h2>
                                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                        {filteredProducts.map((product) => (
                                             <div
                                                  key={product.id}
                                                  className="transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg rounded-lg"
                                             >
                                                  <Card name={product.name} image={product.image} />
                                             </div>
                                        ))}
                                   </div>
                              </section>
                         </Form>
                    )}
               </Formik>

               {/* Pagination Section */}
               <div className="mt-6 text-center">
                    <button className="px-4 py-2 bg-gray-200 rounded-lg mr-2">&larr; Previous</button>
                    <span className="px-4">Page 1 of 5</span>
                    <button className="px-4 py-2 bg-gray-200 rounded-lg ml-2">Next &rarr;</button>
               </div>
          </main>
     );
}
