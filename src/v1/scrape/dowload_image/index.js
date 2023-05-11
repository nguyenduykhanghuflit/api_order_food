const https = require('https');
const fs = require('fs');
const path = require('path');

function downloadImage(url, folder) {
  // Lấy tên file từ URL
  const fileName = path.basename(url);

  // Tạo đường dẫn đầy đủ cho file
  const filePath = path.join(folder, fileName);

  // Tạo một stream để ghi dữ liệu vào file
  const file = fs.createWriteStream(filePath);

  // Tải hình ảnh từ URL và ghi vào stream
  https.get(url, (response) => {
    response.pipe(file);
  });

  // Trả về tên file
  return fileName;
}
const folder = './images';
const raw = [
  {
    name: 'Okinawa Milk Foam Smoothie',
    categoriesId: '644a300ee9681884f25e510b',
    description:
      'Thức uống đã bao gồm kem sữa & trân châu đen, vui lòng không\n              đổi topping có sẵn',
    price: 71000,
    image: [
      'https://images.foody.vn/res/g10/96530/s120x120/09418ce6-4008-4690-1814-e19c8c1453d3.jpg',
    ],
  },
  {
    name: 'Trà Đen Sữa Tươi Sương Sáo',
    categoriesId: '644a300ee9681884f25e510b',
    description: 'Mức đá cố định: 50%',
    price: 51000,
    image: [
      'https://images.foody.vn/res/g10/96530/s120x120/7af5defc-f881-4ae8-fb47-b5426c8eb48c.jpg',
    ],
  },
  {
    name: 'Trà sữa Okinawa',
    categoriesId: '644a300ee9681884f25e510b',
    description:
      'Thức uống đã bao gồm trân châu đen, vui lòng không đổi topping có\n              sẵn',
    price: 65000,
    image: [
      'https://images.foody.vn/res/g10/96530/s120x120/a1049ba2-b586-4401-9a8b-2bd2dd3eaa7c.jpg',
    ],
  },
  {
    name: 'Sữa tươi Okinawa',
    categoriesId: '644a300ee9681884f25e510b',
    description:
      'Thức uống đã bao gồm trân châu đen, vui lòng không đổi topping có\n              sẵn',
    price: 59000,
    image: [
      'https://images.foody.vn/res/g10/96530/s120x120/6f6ab024-657f-439f-728d-72f8b44a51d3.jpg',
    ],
  },
  {
    name: 'Okinawa Latte',
    categoriesId: '644a300ee9681884f25e510b',
    description:
      'Thức uống đã bao gồm trân châu đen, vui lòng không đổi topping có\n              sẵn',
    price: 65000,
    image: [
      'https://images.foody.vn/res/g10/96530/s120x120/6df2f3fe-8009-4f12-f375-0d121594712d.jpg',
    ],
  },
  {
    name: 'Trà xanh Gong Cha',
    categoriesId: '644a300ee9681884f25e510b',
    description:
      'Thức uống đã bao gồm kem sữa, vui lòng không đổi topping có sẵn',
    price: 55000,
    image: [
      'https://images.foody.vn/res/g10/96530/s120x120/c0faa0c1-4afe-43e9-c694-bc9d3fb27d47.jpg',
    ],
  },
  {
    name: 'Trà Alisan Gong Cha',
    categoriesId: '644a300ee9681884f25e510b',
    description:
      'Thức uống đã bao gồm kem sữa, vui lòng không đổi topping có sẵn',
    price: 59000,
    image: [
      'https://images.foody.vn/res/g10/96530/s120x120/1bc3813f-df46-4d2b-262c-967027a71acc.jpg',
    ],
  },
  {
    name: 'Trà Đen Gong Cha',
    categoriesId: '644a300ee9681884f25e510b',
    description:
      'Thức uống đã bao gồm kem sữa, vui lòng không đổi topping có sẵn',
    price: 55000,
    image: [
      'https://images.foody.vn/res/g10/96530/s120x120/82dcb95b-4a66-46fb-031f-66e01e791f6e.jpg',
    ],
  },
  {
    name: 'Trà Bí Đao Gong Cha',
    categoriesId: '644a300ee9681884f25e510b',
    description:
      'Thức uống đã bao gồm kem sữa, vui lòng không đổi topping có sẵn',
    price: 59000,
    image: [
      'https://images.foody.vn/res/g10/96530/s120x120/60a0a706-cd94-4087-cab1-03a009193027.jpg',
    ],
  },
  {
    name: 'Trà Oolong Gong Cha',
    categoriesId: '644a300ee9681884f25e510b',
    description:
      'Thức uống đã bao gồm kem sữa, vui lòng không đổi topping có sẵn',
    price: 59000,
    image: [
      'https://images.foody.vn/res/g10/96530/s120x120/cac9299b-7b50-4452-0816-d1d0b840ca03.jpg',
    ],
  },
  {
    name: 'Trà xanh',
    categoriesId: '644a300ee9681884f25e510b',
    description: 'Trà xanh',
    price: 45000,
    image: [
      'https://images.foody.vn/res/g10/96530/s120x120/733adbea-1798-474a-01de-f0a7b249200d.jpg',
    ],
  },
  {
    name: 'Trà đen',
    categoriesId: '644a300ee9681884f25e510b',
    description: 'Trà đen',
    price: 45000,
    image: [
      'https://images.foody.vn/res/g10/96530/s120x120/f80e3e6e-4075-4a61-f958-b8a6d4f219c5.jpg',
    ],
  },
  {
    name: 'Trà Alisan',
    categoriesId: '644a300ee9681884f25e510b',
    description: 'Trà Alisan',
    price: 48000,
    image: [
      'https://images.foody.vn/res/g10/96530/s120x120/93f44953-84a9-44f9-f31e-38b227fe5b07.jpg',
    ],
  },
  {
    name: 'Trà Oolong',
    categoriesId: '644a300ee9681884f25e510b',
    description: 'Trà Oolong',
    price: 48000,
    image: [
      'https://images.foody.vn/res/g10/96530/s120x120/891c1d79-5cf9-49e5-e655-f3aa771a8837.jpg',
    ],
  },
  {
    name: 'Trà Bí Đao Alisan',
    categoriesId: '644a300ee9681884f25e510b',
    description: 'Trà Bí Đao Alisan',
    price: 48000,
    image: [
      'https://images.foody.vn/res/g10/96530/s120x120/8ef37600-96e7-4dbe-431b-dd4377c83621.jpg',
    ],
  },
  {
    name: 'Trà Bí Đao',
    categoriesId: '644a300ee9681884f25e510b',
    description: 'Trà Bí Đao',
    price: 48000,
    image: [
      'https://images.foody.vn/res/g10/96530/s120x120/44ffcc6a-6dd0-46ba-a0f6-01c4eeb9-0f7242c6-230424105246.jpeg',
    ],
  },
];

raw.forEach((item) => {
  const imgUrl = item.image[0];
  const newUrl = downloadImage(imgUrl, folder);
  item.image[0] = '/images/' + newUrl;
});

const dataFile = 'data.json';

fs.writeFile(dataFile, JSON.stringify(raw), (err) => {
  if (err) throw err;
  console.log('Dữ liệu đã được lưu vào file');
});

// var check = [];

// for (let i = 0; i < raw.length; i++) {
//   let run = true;
//   if (!check.includes(raw[i].name)) {
//     check.push(raw[i].name);
//     run = false;
//   }

//   if (run) {
//     if (check.includes(raw[i].name)) console.log(raw[i]);
//   }
// }
