export async function fetchProducts(category: string) {
  // Mock Data
  const allProducts = [
    { id: 1, name: "แตงโม", image: "https://s.isanook.com/he/0/ud/7/36857/istock-576740438_re.jpg", category: "fruits" },
    { id: 2, name: "มะม่วง", image: "https://www.pasudafood.com/wp-content/uploads/2023/01/Mango.png", category: "fruits" },
    { id: 3, name: "ทุเรียน", image: "https://assets.brandinside.asia/uploads/2023/05/shutterstock_1726591720.jpeg", category: "fruits" },
    { id: 4, name: "มังคุด", image: "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa4u0hKx275doyyZlbPwrAvWFrn9efT6LSOpUYHDMCV468rT1cVvD.webp", category: "fruits" },
    { id: 5, name: "แก้วมังกร", image: "https://s.isanook.com/he/0/ud/2/13057/13057-thumbnail.jpg", category: "fruits" },
    { id: 6, name: "ลำไย", image: "https://www.simummuangmarket.com/uploads/image-1718611493696.jpg", category: "fruits" },

    // Vegetables
    { id: 7, name: "ผักกาดขาว", image: "https://adeq.or.th/wp-content/uploads/2019/04/%E0%B8%9C%E0%B8%B1%E0%B8%81%E0%B8%81%E0%B8%B2%E0%B8%94%E0%B8%82%E0%B8%B2%E0%B8%A701.jpg", category: "vegetables" },
    { id: 8, name: "คะน้า", image: "https://www.sgethai.com/wp-content/uploads/2021/09/chinese-broccoli-white-space-600x424.jpg", category: "vegetables" },
    { id: 9, name: "กะหล่ำปลี", image: "https://res.cloudinary.com/dk0z4ums3/image/upload/v1640169761/attached_image_th/cabbageandcuttedcabbageonwooden.jpg", category: "vegetables" },
    { id: 10, name: "พริกหวาน", image: "https://www.gourmetandcuisine.com/Images/editor_upload/_editor20220114032316_original.jpg", category: "vegetables" },
    { id: 11, name: "แครอท", image: "https://www.buzzpetsfood.com/wp-content/uploads/2020/04/pet-parent-mock-02.jpg", category: "vegetables" },
    { id: 12, name: "ถั่วฝักยาว", image: "https://www.sodyim.com/cdn/shop/files/DSC_0051.jpg?v=1692606878&width=1946", category: "vegetables" },
  ];

  if (category === "all") return allProducts;
  return allProducts.filter((product) => product.category === category);
}
