const a = [
  {
    id: 1,
    name: "Bánh dừa",
    type: "Chế biến sẵn",
    quantity: "50",
    price: "25000",
    img: "/img/spbanhdua.jpg",
    description:
      "Bánh dừa là món ăn truyền thống được làm từ dừa tươi và bột gạo, với vị ngọt nhẹ và mùi thơm đặc trưng của dừa. Bánh có kết cấu mềm mại và dẻo, thích hợp làm món ăn vặt hoặc dùng trong các dịp lễ hội.",
    information: {
      weight: "500g",
      dimensions: "5x5x5 cm",
    },
    tag: ["new", "sale"],
  },
  {
    id: 2,
    name: "Bánh mì đen",
    type: "Chế biến sẵn",
    quantity: "30",
    price: "15000",
    img: "/img/spbanhmiden.jpg",
    description:
      "Bánh mì đen được làm từ bột lúa mạch nguyên chất, giàu chất xơ và ít calo, là lựa chọn lý tưởng cho những ai muốn giảm cân hoặc duy trì vóc dáng. Bánh mì đen có vị đậm đà và thơm ngon, có thể dùng kèm với nhiều món ăn khác.",
    information: {
      weight: "300g",
      dimensions: "7x7x10 cm",
    },
    tag: ["sale"],
  },
  {
    id: 3,
    name: "Bánh mì nướng",
    type: "Chế biến sẵn",
    quantity: "20",
    price: "18000",
    img: "/img/spbanhminuong.jpg",
    description:
      "Bánh mì nướng giòn tan với lớp vỏ vàng ươm và bên trong mềm mại, rất phù hợp cho bữa sáng hoặc ăn nhẹ. Với hương vị giòn tan và dễ ăn, bánh mì nướng có thể kết hợp với nhiều loại mứt hoặc phô mai.",
    information: {
      weight: "200g",
      dimensions: "5x5x15 cm",
    },
    tag: ["top-rated"],
  },
  {
    id: 4,
    name: "Bánh mì phô mai",
    type: "Chế biến sẵn",
    quantity: "40",
    price: "30000",
    img: "/img/spbanhmiphomai.jpg",
    description:
      "Bánh mì phô mai là sự kết hợp tuyệt vời giữa lớp bánh mì mềm và lớp phô mai béo ngậy. Sản phẩm này mang đến hương vị thơm ngon, dễ ăn, và là lựa chọn hoàn hảo cho bữa sáng hoặc ăn nhẹ.",
    information: {
      weight: "250g",
      dimensions: "6x6x12 cm",
    },
    tag: ["new"],
  },
  {
    id: 5,
    name: "Cà chua",
    type: "Rau củ quả",
    quantity: "100",
    price: "10000",
    img: "/img/spcachua.jpg",
    description:
      "Cà chua là một nguồn cung cấp vitamin C tuyệt vời, giúp tăng cường hệ miễn dịch và bảo vệ làn da. Cà chua có thể ăn sống, làm nước ép hoặc chế biến thành các món salad, súp.",
    information: {
      weight: "1kg",
      dimensions: "10x10x10 cm",
    },
    tag: ["popular"],
  },
  {
    id: 6,
    name: "Cam",
    type: "Rau củ quả",
    quantity: "150",
    price: "12000",
    img: "/img/spcam.jpg",
    description:
      "Cam là loại quả giàu vitamin C, giúp tăng cường sức đề kháng và làm đẹp da. Cam có vị ngọt chua, dễ ăn, có thể dùng làm nước ép hoặc ăn trực tiếp.",
    information: {
      weight: "1kg",
      dimensions: "8x8x8 cm",
    },
    tag: ["popular"],
  },
  {
    id: 7,
    name: "Cà rốt",
    type: "Rau củ quả",
    quantity: "200",
    price: "8000",
    img: "/img/spcarot.jpg",
    description:
      "Cà rốt là nguồn cung cấp beta-carotene, giúp cải thiện thị lực và bảo vệ tế bào khỏi sự tổn thương. Cà rốt có thể ăn sống, nấu canh hoặc làm nước ép.",
    information: {
      weight: "1kg",
      dimensions: "7x7x20 cm",
    },
    tag: ["sale"],
  },
  {
    id: 8,
    name: "Chuối",
    type: "Rau củ quả",
    quantity: "80",
    price: "5000",
    img: "/img/spchuoi.jpg",
    description:
      "Chuối là loại quả giàu kali, vitamin B6 và vitamin C, giúp hỗ trợ sức khỏe tim mạch và làm giảm căng thẳng. Chuối có thể ăn trực tiếp hoặc kết hợp với các món sinh tố.",
    information: {
      weight: "1kg",
      dimensions: "15x15x15 cm",
    },
    tag: ["popular"],
  },
  {
    id: 9,
    name: "Đậu lu pin",
    type: "Rau củ quả",
    quantity: "60",
    price: "22000",
    img: "/img/spdaulupin.jpg",
    description:
      "Đậu lu pin là thực phẩm giàu protein và chất xơ, tốt cho hệ tiêu hóa và sức khỏe tim mạch. Đậu lục pin có thể chế biến thành các món xào, nấu canh hoặc làm salad.",
    information: {
      weight: "500g",
      dimensions: "8x8x8 cm",
    },
    tag: ["popular"],
  },
  {
    id: 10,
    name: "Đậu nướng",
    type: "Rau củ quả",
    quantity: "75",
    price: "18000",
    img: "/img/spdaunuong.jpg",
    description:
      "Đậu nướng có vị thơm ngon và giòn, là món ăn nhẹ lý tưởng cho bữa xế. Đậu nướng giàu protein và chất xơ, giúp tăng cường sức khỏe tiêu hóa và ổn định đường huyết.",
    information: {
      weight: "500g",
      dimensions: "8x8x8 cm",
    },
    tag: ["popular"],
  },
  {
    id: 11,
    name: "Dưa hấu",
    type: "Rau củ quả",
    quantity: "90",
    price: "20000",
    img: "/img/spduahau.jpg",
    description:
      "Dưa hấu là một loại trái cây mát lạnh, giàu vitamin A, C và lycopene, giúp cải thiện làn da và giảm viêm. Dưa hấu có thể ăn trực tiếp hoặc làm nước ép.",
    information: {
      weight: "1kg",
      dimensions: "15x15x15 cm",
    },
    tag: ["popular"],
  },
  {
    id: 12,
    name: "Gạo lứt",
    type: "Rau củ quả",
    quantity: "40",
    price: "30000",
    img: "/img/spgaolut.jpg",
    description:
      "Gạo lứt là loại gạo chưa qua tinh chế, chứa nhiều chất xơ và khoáng chất. Gạo lứt giúp hỗ trợ tiêu hóa, giảm cholesterol và kiểm soát cân nặng.",
    information: {
      weight: "1kg",
      dimensions: "10x10x10 cm",
    },
    tag: ["sale"],
  },
  {
    id: 13,
    name: "Gạo nếp",
    type: "Rau củ quả",
    quantity: "50",
    price: "28000",
    img: "/img/spgaonep.jpg",
    description:
      "Gạo nếp là loại gạo có độ dẻo và thơm, thường được dùng để làm các món xôi, bánh chưng, hoặc bánh dẻo. Gạo nếp giàu năng lượng và dễ tiêu hóa.",
    information: {
      weight: "1kg",
      dimensions: "10x10x10 cm",
    },
    tag: ["popular"],
  },
  {
    id: 14,
    name: "Hành",
    type: "Rau củ quả",
    quantity: "150",
    price: "5000",
    img: "/img/sphanh.jpg",
    description:
      "Hành là gia vị không thể thiếu trong các món ăn, giúp tăng hương vị và kích thích tiêu hóa. Hành còn có tác dụng chống viêm và tăng cường hệ miễn dịch.",
    information: {
      weight: "500g",
      dimensions: "5x5x10 cm",
    },
    tag: ["popular"],
  },
  {
    id: 15,
    name: "Hạt gai",
    type: "Rau củ quả",
    quantity: "60",
    price: "15000",
    img: "/img/sphatgai.jpg",
    description:
      "Hạt gai chứa nhiều chất chống oxy hóa và omega-3, giúp bảo vệ tim mạch và hỗ trợ chức năng não bộ. Hạt gai có thể ăn trực tiếp hoặc thêm vào các món salad, smoothie.",
    information: {
      weight: "250g",
      dimensions: "5x5x5 cm",
    },
    tag: ["sale"],
  },
  {
    id: 16,
    name: "Hạt lanh",
    type: "Rau củ quả",
    quantity: "70",
    price: "20000",
    img: "/img/sphatlanh.jpg",
    description:
      "Hạt lanh là nguồn cung cấp omega-3 dồi dào, giúp hỗ trợ sức khỏe tim mạch và cải thiện hệ tiêu hóa. Hạt lanh có thể thêm vào các món salad hoặc smoothie.",
    information: {
      weight: "250g",
      dimensions: "5x5x5 cm",
    },
    tag: ["sale"],
  },
  {
    id: 17,
    name: "Hoa chuối",
    type: "Rau củ quả",
    quantity: "40",
    price: "18000",
    img: "/img/sphoachuoi.jpg",
    description:
      "Hoa chuối là loại hạt giàu protein và chất xơ, giúp tăng cường sức khỏe tiêu hóa và hỗ trợ giảm cân. Hoa chuối có thể chế biến thành các món ăn nhẹ hoặc salad.",
    information: {
      weight: "100g",
      dimensions: "5x5x5 cm",
    },
    tag: ["popular"],
  },
  {
    id: 18,
    name: "Khoai tây",
    type: "Rau củ quả",
    quantity: "100",
    price: "10000",
    img: "/img/spkhoaitay.jpg",
    description:
      "Khoai tây là nguồn cung cấp carbohydrate, vitamin C và kali, giúp cung cấp năng lượng và cải thiện sức khỏe làn da. Khoai tây có thể chế biến thành các món chiên, luộc, nướng hoặc làm salad.",
    information: {
      weight: "1kg",
      dimensions: "10x10x10 cm",
    },
    tag: ["top-rated"],
  },
  {
    id: 19,
    name: "Lựu",
    type: "Rau củ quả",
    quantity: "120",
    price: "25000",
    img: "/img/spluu.jpg",
    description:
      "Lựu là loại trái cây giàu vitamin C và chất chống oxy hóa, giúp làm đẹp da và giảm viêm. Lựu có thể ăn trực tiếp hoặc dùng để làm nước ép.",
    information: {
      weight: "1kg",
      dimensions: "10x10x10 cm",
    },
    tag: ["top-rated"],
  },
  {
    id: 20,
    name: "Mít",
    type: "Rau củ quả",
    quantity: "70",
    price: "15000",
    img: "/img/spmit.jpg",
    description:
      "Mít là quả có hương vị ngọt ngào, giàu vitamin A và C, giúp tăng cường sức đề kháng và bảo vệ làn da. Mít có thể ăn trực tiếp hoặc làm sinh tố.",
    information: {
      weight: "500g",
      dimensions: "10x10x10 cm",
    },
    tag: ["popular"],
  },
  {
    id: 21,
    name: "Mứt táo",
    type: "Chế biến sẵn",
    quantity: "45",
    price: "20000",
    img: "/img/spmuttao.jpg",
    description:
      "Mứt táo là món ăn ngọt được làm từ táo và đường, thích hợp làm món ăn nhẹ hoặc món tráng miệng. Mứt táo có vị ngọt dịu và thơm ngon.",
    information: {
      weight: "250g",
      dimensions: "5x5x5 cm",
    },
    tag: ["new"],
  },
  {
    id: 22,
    name: "Ngô",
    type: "Rau củ quả",
    quantity: "200",
    price: "8000",
    img: "/img/spngo.jpg",
    description:
      "Ngô là nguồn cung cấp carbohydrate và chất xơ, giúp cung cấp năng lượng và cải thiện tiêu hóa. Ngô có thể ăn trực tiếp, làm món salad hoặc súp.",
    information: {
      weight: "500g",
      dimensions: "5x5x15 cm",
    },
    tag: ["popular"],
  },
  {
    id: 23,
    name: "Nước khoáng",
    type: "Đồ uống",
    quantity: "300",
    price: "5000",
    img: "/img/spnuoc.jpg",
    description:
      "Nước khoáng là loại nước uống tinh khiết, giàu khoáng chất, giúp bổ sung nước và dưỡng chất cho cơ thể. Nước khoáng có thể giúp duy trì sự cân bằng điện giải và tăng cường sức khỏe tổng thể.",
    information: {
      weight: "500ml",
      dimensions: "5x5x15 cm",
    },
    tag: ["sale"],
  },
  {
    id: 24,
    name: "Nước cam",
    type: "Đồ uống",
    quantity: "150",
    price: "10000",
    img: "/img/spnuoccam.jpg",
    description:
      "Nước khoáng là loại nước uống tinh khiết, giàu khoáng chất, giúp bổ sung nước và dưỡng chất cho cơ thể. Nước khoáng có thể giúp duy trì sự cân bằng điện giải và tăng cường sức khỏe tổng thể.",
    information: {
      weight: "300ml",
      dimensions: "6x6x15 cm",
    },
    tag: ["popular"],
  },
  {
    id: 25,
    name: "Nước cà rốt",
    type: "Đồ uống",
    quantity: "100",
    price: "12000",
    img: "/img/spnuoccarot.jpg",
    description:
      "Nước cà rốt là loại nước ép chứa nhiều vitamin A, giúp cải thiện thị lực và bảo vệ da khỏi tác hại của ánh nắng mặt trời.",
    information: {
      weight: "300ml",
      dimensions: "6x6x15 cm",
    },
    tag: ["sale"],
  },
  {
    id: 26,
    name: "Nước ép táo",
    type: "Đồ uống",
    quantity: "110",
    price: "10000",
    img: "/img/spnuoceptao.jpg",
    description:
      "Nước ép táo chứa nhiều vitamin C và chất chống oxy hóa, giúp làm đẹp da và cải thiện sức khỏe tổng thể. Nước ép táo có thể uống trực tiếp hoặc kết hợp với các loại trái cây khác.",
    information: {
      weight: "300ml",
      dimensions: "6x6x15 cm",
    },
    tag: ["popular"],
  },
  {
    id: 27,
    name: "Nước ép kiwi",
    type: "Đồ uống",
    quantity: "80",
    price: "15000",
    img: "/img/spnuockiwi.jpg",
    description:
      "Nước ép kiwi là thức uống giàu vitamin C và chất xơ, giúp hỗ trợ tiêu hóa và tăng cường sức đề kháng. Nước ép kiwi có vị chua ngọt, dễ uống và bổ dưỡng.",
    information: {
      weight: "300ml",
      dimensions: "6x6x15 cm",
    },
    tag: ["new", "top-rated"],
  },
  {
    id: 28,
    name: "Nước mận",
    type: "Đồ uống",
    quantity: "90",
    price: "12000",
    img: "/img/spnuocman.jpg",
    description:
      "Nước mận là loại nước ép chứa nhiều vitamin A và C, giúp tăng cường sức khỏe mắt và làm đẹp da. Nước mận có vị ngọt nhẹ và rất dễ uống.",
    information: {
      weight: "300ml",
      dimensions: "6x6x15 cm",
    },
    tag: ["sale"],
  },
  {
    id: 29,
    name: "Ổi",
    type: "Rau củ quả",
    quantity: "100",
    price: "8000",
    img: "/img/spot.jpg",
    description:
      "Ổi là loại trái cây giàu vitamin C và chất xơ, giúp tăng cường miễn dịch và hỗ trợ tiêu hóa. Ổi có thể ăn trực tiếp hoặc làm nước ép.",
    information: {
      weight: "1kg",
      dimensions: "10x10x10 cm",
    },
    tag: ["popular"],
  },
  {
    id: 30,
    name: "Phô mai",
    type: "Chế biến sẵn",
    quantity: "60",
    price: "30000",
    img: "/img/spphomai.jpg",
    description:
      "Phô mai là sản phẩm từ sữa, chứa nhiều protein và canxi, giúp tăng cường sức khỏe xương và răng miệng. Phô mai có thể ăn trực tiếp hoặc dùng trong các món ăn như pizza, pasta.",
    information: {
      weight: "200g",
      dimensions: "5x5x5 cm",
    },
    tag: ["popular"],
  },
  {
    id: 31,
    name: "Protein",
    type: "Thực phẩm bổ sung",
    quantity: "40",
    price: "150000",
    img: "/img/spprotein.jpg",
    description:
      "Protein là thực phẩm bổ sung giàu protein, giúp tăng cường cơ bắp và phục hồi sau luyện tập. Protein có thể dùng làm bữa ăn nhẹ hoặc trước và sau khi tập luyện.",
    information: {
      weight: "1kg",
      dimensions: "12x12x20 cm",
    },
    tag: ["new", "sale"],
  },
  {
    id: 32,
    name: "Sốt cà chua",
    type: "Chế biến sẵn",
    quantity: "130",
    price: "10000",
    img: "/img/spsotcachua.jpg",
    description:
      "Sốt cà chua là gia vị được làm từ cà chua tươi, giúp tăng hương vị cho các món ăn như pasta, pizza, hoặc sandwich. Sốt cà chua có thể dùng trực tiếp hoặc làm nguyên liệu trong nhiều công thức nấu ăn.",
    information: {
      weight: "250ml",
      dimensions: "5x5x10 cm",
    },
    tag: ["sale", "popular"],
  },
  {
    id: 33,
    name: "Sữa dừa",
    type: "Đồ uống",
    quantity: "90",
    price: "12000",
    img: "/img/spsuadua.jpg",
    description:
      "Sữa dừa là loại sữa được chiết xuất từ cùi dừa tươi, giàu chất béo lành mạnh và vitamin E. Sữa dừa có thể dùng trong các món tráng miệng, sinh tố hoặc các món ăn chay.",
    information: {
      weight: "300ml",
      dimensions: "6x6x15 cm",
    },
    tag: ["sale"],
  },
  {
    id: 34,
    name: "Sườn",
    type: "Động vật",
    quantity: "35",
    price: "80000",
    img: "/img/spsuon.jpg",
    description:
      "Sườn là phần thịt ngon từ lợn hoặc bò, có thể chế biến thành nhiều món ăn ngon như sườn nướng, sườn kho, hoặc sườn hầm. Sườn có vị ngọt, mềm, dễ chế biến và rất được yêu thích trong các bữa tiệc.",
    information: {
      weight: "500g",
      dimensions: "10x10x5 cm",
    },
    tag: ["top-rated"],
  },
  {
    id: 35,
    name: "Súp lơ",
    type: "Rau củ quả",
    quantity: "60",
    price: "18000",
    img: "/img/spsuplo.jpg",
    description:
      "Súp lơ là loại rau xanh giàu vitamin C và chất xơ, giúp cải thiện hệ tiêu hóa và tăng cường sức đề kháng. Súp lơ có thể luộc, xào hoặc chế biến thành các món salad.",
    information: {
      weight: "1kg",
      dimensions: "10x10x15 cm",
    },
    tag: ["popular"],
  },
  {
    id: 36,
    name: "Táo đỏ",
    type: "Rau củ quả",
    quantity: "120",
    price: "25000",
    img: "/img/sptao.jpg",
    description:
      "Táo đỏ là loại trái cây ngọt, giàu vitamin C và chất chống oxy hóa, giúp tăng cường sức khỏe tim mạch và bảo vệ làn da khỏi tác hại của môi trường.",
    information: {
      weight: "1kg",
      dimensions: "10x10x10 cm",
    },
    tag: ["popular"],
  },
  {
    id: 37,
    name: "Thịt bò",
    type: "Động vật",
    quantity: "50",
    price: "150000",
    img: "/img/spthitbo.jpg",
    description:
      "Thịt bò là nguồn cung cấp protein chất lượng cao, giúp phát triển cơ bắp và duy trì sức khỏe. Thịt bò có thể chế biến thành các món như steak, nướng, hoặc hầm.",
    information: {
      weight: "1kg",
      dimensions: "15x10x5 cm",
    },
    tag: ["new", "top-rated"],
  },
  {
    id: 38,
    name: "Thịt gà",
    type: "Động vật",
    quantity: "75",
    price: "80000",
    img: "/img/spthitga.jpg",
    description:
      "Thịt gà là thực phẩm giàu protein và ít chất béo, giúp xây dựng cơ bắp và duy trì sức khỏe. Thịt gà có thể chế biến thành các món nướng, luộc, xào hoặc làm canh.",
    information: {
      weight: "1kg",
      dimensions: "15x10x5 cm",
    },
    tag: ["popular", "sale"],
  },
  {
    id: 39,
    name: "Thịt lợn",
    type: "Động vật",
    quantity: "85",
    price: "70000",
    img: "/img/spthitlon.jpg",
    description:
      "Thịt lợn là nguồn cung cấp protein và vitamin B12, giúp tăng cường sức khỏe tim mạch và phát triển cơ bắp. Thịt lợn có thể chế biến thành các món xào, hầm, nướng hoặc nấu canh.",
    information: {
      weight: "1kg",
      dimensions: "15x10x5 cm",
    },
    tag: ["sale", "popular"],
  },
  {
    id: 40,
    name: "Trứng gà",
    type: "Động vật",
    quantity: "200",
    price: "5000",
    img: "/img/sptrung.jpg",
    description:
      "Trứng gà là thực phẩm giàu protein và vitamin D, giúp tăng cường sức khỏe xương và cơ bắp. Trứng gà có thể chế biến thành các món ốp la, trứng chiên, hoặc làm nguyên liệu cho các món bánh.",
    information: {
      weight: "50g",
      dimensions: "4x4x4 cm",
    },
    tag: ["popular"],
  },
  {
    id: 41,
    name: "Việt quất",
    type: "Rau củ quả",
    quantity: "65",
    price: "45000",
    img: "/img/spvietquat.jpg",
    description:
      "Việt quất là loại trái cây nhỏ, giàu vitamin C và chất chống oxy hóa, giúp cải thiện sức khỏe tim mạch và làm đẹp da. Việt quất có thể ăn trực tiếp hoặc dùng làm sinh tố, món tráng miệng.",
    information: {
      weight: "200g",
      dimensions: "5x5x5 cm",
    },
    tag: ["new", "top-rated"],
  },
];
localStorage.setItem("product", JSON.stringify(a));

const b = [
  {
    username: "admin",
    email: "admin@gmail.com",
    phone: "0967785311",
    pass: "1",
    role: "admin",
  },
  {
    username: "user",
    email: "user@gmail.com",
    phone: "0967785312",
    pass: "1",
    role: "user",
  },
  {
    username: "doducthuy",
    email: "doducthuy@gmail.com",
    phone: "0967785313",
    pass: "1",
    role: "user",
  },
  {
    username: "nguyenduytuan",
    email: "nguyenduytuan@gmail.com",
    phone: "0967785314",
    pass: "1",
    role: "user",
  },
  {
    username: "phamhoangvietanh",
    email: "phamhoangvietanh@gmail.com",
    phone: "0967785315",
    pass: "1",
    role: "user",
  },
  {
    username: "nguyenquocanh",
    email: "nguyenquocanh@gmail.com",
    phone: "0967785316",
    pass: "1",
    role: "user",
  },
];
localStorage.setItem("account", JSON.stringify(b));

const c = [
  {
    username: "user",
    cart: ["11", "23", "13", "34", "25"],
  },
  {
    username: "nguyenduytuan",
    cart: ["11", "23", "13", "34", "25"],
  },
  {
    username: "doducthuy",
    cart: ["15", "21", "33", "19", "7"],
  },
  {
    username: "phamhoangvietanh",
    cart: ["10", "30", "25", "8", "17"],
  },
  {
    username: "nguyenquocanh",
    cart: ["9", "26", "14", "3", "40"],
  },
];
localStorage.setItem("session", JSON.stringify(c));
