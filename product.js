// Câu 1: Constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// Câu 2: Khởi tạo mảng products (ít nhất 6 sản phẩm, ≥ 2 danh mục)
const products = [
  new Product(1, "iPhone 15 Pro", 35000000, 5, "Electronics", true),
  new Product(2, "Samsung Galaxy S24", 28000000, 10, "Electronics", true),
  new Product(3, "MacBook Pro M3", 52000000, 3, "Electronics", true),
  new Product(4, "AirPods Pro", 6500000, 0, "Accessories", true),
  new Product(5, "Magic Mouse", 2500000, 8, "Accessories", true),
  new Product(6, "Laptop Bag", 1200000, 15, "Accessories", false),
];

// Câu 3: Tạo mảng mới chỉ chứa name, price
const namePriceList = products.map(p => ({
  name: p.name,
  price: p.price
}));
console.log("Câu 3 - Name & Price:", namePriceList);

// Câu 4: Lọc sản phẩm còn hàng (quantity > 0)
const inStockProducts = products.filter(p => p.quantity > 0);
console.log("Câu 4 - Sản phẩm còn hàng:", inStockProducts);

// Câu 5: Kiểm tra có ít nhất 1 sản phẩm giá > 30.000.000
const hasExpensiveProduct = products.some(p => p.price > 30000000);
console.log("Câu 5 - Có sản phẩm > 30 triệu:", hasExpensiveProduct);

// Câu 6: Kiểm tra tất cả sản phẩm Accessories có đang bán hay không
const accessoriesAvailable = products
  .filter(p => p.category === "Accessories")
  .every(p => p.isAvailable === true);

console.log("Câu 6 - Accessories đều đang bán:", accessoriesAvailable);

// Câu 7: Tính tổng giá trị kho hàng
const totalInventoryValue = products.reduce(
  (total, p) => total + p.price * p.quantity,
  0
);
console.log("Câu 7 - Tổng giá trị kho:", totalInventoryValue);

// Câu 8: for...of duyệt mảng và in thông tin
console.log("Câu 8 - Danh sách sản phẩm:");
for (const p of products) {
  const status = p.isAvailable ? "Đang bán" : "Ngừng bán";
  console.log(`${p.name} - ${p.category} - ${status}`);
}

// Câu 9: for...in in tên thuộc tính và giá trị
console.log("Câu 9 - Thuộc tính của sản phẩm đầu tiên:");
for (const key in products[0]) {
  console.log(`${key}: ${products[0][key]}`);
}

// Câu 10: Danh sách tên sản phẩm đang bán và còn hàng
const sellingAndInStock = products
  .filter(p => p.isAvailable && p.quantity > 0)
  .map(p => p.name);

console.log("Câu 10 - Sản phẩm đang bán & còn hàng:", sellingAndInStock);
