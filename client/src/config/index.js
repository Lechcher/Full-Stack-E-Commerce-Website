export const registerFormControls = [
  {
    name: "userName",
    label: "Tên người dùng",
    placeholder: "Nhập tên người dùng",
    componentType: "input",
    type: "text"
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Nhập email",
    componentType: "input",
    type: "email"
  },
  {
    name: "password",
    label: "Mật khẩu",
    placeholder: "Nhập mật khẩu",
    componentType: "input",
    type: "password"
  }
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Nhập email",
    componentType: "input",
    type: "email"
  },
  {
    name: "password",
    label: "Mật khẩu",
    placeholder: "Nhập mật khẩu",
    componentType: "input",
    type: "password"
  }
];

export const addProductFormElements = [
  {
    label: "Tiêu đề",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Nhập tiêu đề sản phẩm"
  },
  {
    label: "Mô tả",
    name: "description",
    componentType: "textarea",
    placeholder: "Nhập mô tả sản phẩm"
  },
  {
    label: "Danh mục",
    name: "category",
    componentType: "select",
    options: [
      { id: "men", label: "Đàn ông" },
      { id: "women", label: "Phụ nữ" },
      { id: "kids", label: "Trẻ em" },
      { id: "accessories", label: "Phụ kiện" },
      { id: "footwear", label: "Giày dép" }
    ]
  },
  {
    label: "Nhãn hiệu",
    name: "brand",
    componentType: "select",
    options: [
      { id: "nike", label: "Nike" },
      { id: "adidas", label: "Adidas" },
      { id: "puma", label: "Puma" },
      { id: "levi", label: "Levi's" },
      { id: "zara", label: "Zara" },
      { id: "h&m", label: "H&M" }
    ]
  },
  {
    label: "Giá",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Nhập giá sản phẩm"
  },
  {
    label: "Giá bán",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Nhập giá bán (tùy chọn)"
  },
  {
    label: "Tổng số hàng tồn kho",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Nhập số lượng hàng tồn kho"
  }
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Trang chủ",
    path: "/shop/home"
  },
  {
    id: "products",
    label: "Sản phẩm",
    path: "/shop/listing"
  },
  {
    id: "men",
    label: "Đàn ông",
    path: "/shop/listing"
  },
  {
    id: "women",
    label: "Phụ nữ",
    path: "/shop/listing"
  },
  {
    id: "kids",
    label: "Trẻ em",
    path: "/shop/listing"
  },
  {
    id: "footwear",
    label: "Giày dép",
    path: "/shop/listing"
  },
  {
    id: "accessories",
    label: "Phụ kiện",
    path: "/shop/listing"
  },
  {
    id: "search",
    label: "Tìm kiếm",
    path: "/shop/search"
  }
];

export const categoryOptionsMap = {
  men: "Đàn ông",
  women: "Phụ nữ",
  kids: "Trẻ em",
  accessories: "Phụ kiện",
  footwear: "Giày dép"
};

export const brandOptionsMap = {
  nike: "Nike",
  adidas: "Adidas",
  puma: "Puma",
  levi: "Levi",
  zara: "Zara",
  "h&m": "H&M"
};

export const filterOptions = {
  "Hạng mục": [
    { id: "men", label: "Đàn ông" },
    { id: "women", label: "Phụ nữ" },
    { id: "kids", label: "Trẻ em" },
    { id: "accessories", label: "Phụ kiện" },
    { id: "footwear", label: "Giày dép" }
  ],
  "Nhãn hiệu": [
    { id: "nike", label: "Nike" },
    { id: "adidas", label: "Adidas" },
    { id: "puma", label: "Puma" },
    { id: "levi", label: "Levi's" },
    { id: "zara", label: "Zara" },
    { id: "h&m", label: "H&M" }
  ]
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Giá: Từ thấp tới cao" },
  { id: "price-hightolow", label: "Giá: Từ cao tới thấp" },
  { id: "title-atoz", label: "Tiêu đề: A đến Z" },
  { id: "title-ztoa", label: "Tiêu đề: Z đến A" }
];

export const addressFormControls = [
  {
    label: "Địa chỉ",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Nhập địa chỉ"
  },
  {
    label: "Thành phố",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "NHập tên thành phố"
  },
  {
    label: "Mã bưu điện",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Nhập mã bưu điện"
  },
  {
    label: "Số điện thoại",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Nhập số điện thoại"
  },
  {
    label: "Ghi chú",
    name: "notes",
    componentType: "textarea",
    placeholder: "Nhập ghi chú thêm"
  }
];
