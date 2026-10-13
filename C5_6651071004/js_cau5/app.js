const { createApp } = Vue;

createApp({
  data() {
    return {
      tuKhoa: '', 
      cart: [],   
      products: [
        { id: 1, ten: 'Ốp lưng xanh điện', gia: 250000, anh: '../images_cau5/op-lung-xanh.svg', moTa: 'Silicon mềm, chống sốc.' },
        { id: 2, ten: 'Ốp lưng trắng trong', gia: 220000, anh: '../images_cau5/op-lung-trang.svg', moTa: 'Mỏng nhẹ, không ố vàng.' },
        { id: 3, ten: 'Ốp lưng đen nhám', gia: 230000, anh: '../images_cau5/op-lung-den.svg', moTa: 'Chống vân tay, cầm chắc tay.' },
        { id: 4, ten: 'Đế sạc không dây', gia: 350000, anh: '../images_cau5/sac-khong-day.svg', moTa: 'Sạc nhanh 15W chuẩn Qi.' },
        { id: 5, ten: 'Tai nghe TWS', gia: 590000, anh: '../images_cau5/tai-nghe-tws.svg', moTa: 'Bluetooth 5.3, pin 24 giờ.' },
        { id: 6, ten: 'Cáp sạc Type-C', gia: 120000, anh: '../images_cau5/cap-sac-c.svg', moTa: 'Bọc dù 1m, sạc nhanh 60W.' },
        { id: 7, ten: 'Củ sạc nhanh 30W', gia: 280000, anh: '../images_cau5/cu-sac-nhanh.svg', moTa: 'Nhỏ gọn, 2 cổng sạc.' },
        { id: 8, ten: 'Pin dự phòng 10.000mAh', gia: 450000, anh: '../images_cau5/pin-du-phong.svg', moTa: 'Mỏng nhẹ, sạc được 2 máy.' }
      ]
    };
  },

  computed: {
    cartCount() { return this.cart.length; },

    tongTien() { return this.cart.reduce((tong, sp) => tong + sp.gia, 0); },

    danhSachLoc() {
      const k = this.tuKhoa.trim().toLowerCase();
      return this.products.filter(sp => sp.ten.toLowerCase().includes(k));
    }
  },

  methods: {
    themVaoGio(sanPham) { this.cart.push(sanPham); },

    xoaKhoiGio(index) { this.cart.splice(index, 1); },

    formatGia(so) { return so.toLocaleString('vi-VN') + 'đ'; }
  }
}).mount('#app'); 
