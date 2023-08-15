# Website quản lý thú cưng

**GitHub:** https://github.com/ductrong1507/pet_management

**Deloy:** https://ductrong1507.github.io/pet_management/

## Tổng quan dự án

Ứng dụng dùng để quản lý thú cưng, có các tính năng thêm, xóa, sửa; lọc thú cưng theo giống, loại, tên. Đồng thời ứng dụng có các tính năng quản lý giống, xuất/nhập dữ liệu từ file.

#### Trang chủ (_Index_):

- **Đường dẫn:** "/index.html".
- **Feature:** Trang hiển thị danh sách thú cưng, đồng thời có form thêm thú cưng, lọc ra danh sách thú cưng khỏe mạnh, tính BMI
- **Thành phần:**
  - Sidebar
  - Form thêm thông tin thú cưng
  - Danh sách thú cưng
    ![Trang chủ](https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FPRF192x%2FASM_Image%2FPRF192x_ASM2_H%C6%B0%E1%BB%9Bng%20d%E1%BA%ABn%20d%E1%BB%B1%20%C3%A1n_H%C3%ACnh%201.png?alt=media&token=ebd63225-ea42-468a-bc39-6f36847e3a7a)

#### Trang Edit (_Edit_):

- **Đường dẫn:** "/edit.html".
- **Feature:** Tính năng chỉnh sửa thông tin thú cưng.
- **Thành phần:**
  - Sidebar
  - Form sửa thông tin thú cưng
  - Danh sách thú cưng
    ![Chỉnh sửa](https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FPRF192x%2FASM_Image%2FPRF192x_ASM2_H%C6%B0%E1%BB%9Bng%20d%E1%BA%ABn%20d%E1%BB%B1%20%C3%A1n_H%C3%ACnh%207.png?alt=media&token=ec02e855-969f-4a3b-8247-13b0ea5eea34)

#### Trang tìm kiếm (_Search_):

- **Đường dẫn:** "/search.html".
- **Feature:** Tính năng tìm kiếm thú cưng theo những tiêu chí: _name, type, breed, tiêm chủng_
- **Thành phần:**
  - Sidebar
  - Form các thông tin tìm kiếm
  - Danh sách kết quả tìm kiếm
    ![Search page](https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FPRF192x%2FASM_Image%2FPRF192x_ASM2_H%C6%B0%E1%BB%9Bng%20d%E1%BA%ABn%20d%E1%BB%B1%20%C3%A1n_H%C3%ACnh%209.png?alt=media&token=482fde27-f83f-49e0-853c-5f1639e84c24)

#### Trang quản lý giống (_Breed_):

- **Đường dẫn:** "/breed.html".
- **Feature:** chức năng quản lý các Breed : _tên giống, loại (chó hoặc mèo)_
- **Thành phần:**
  - Sidebar
  - Form thêm Breed
  - Danh sách Breed
    ![Breed page](https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FPRF192x%2FASM_Image%2FPRF192x_ASM2_H%C6%B0%E1%BB%9Bng%20d%E1%BA%ABn%20d%E1%BB%B1%20%C3%A1n_H%C3%ACnh%203.png?alt=media&token=266d309c-2be6-41e6-89ee-1afcfdd38b81)

#### Trang Import/Export dữ liệu (_Data_):

- **Đường dẫn:** "/data.html".
- **Feature:** chức năng Import/Export dữ liệu thú cưng để có thể dễ dàng quản lý dữ liệu dạng file hơn.
- **Thành phần:**
  - Sidebar
  - Form Import/Export
    ![Data page](https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FPRF192x%2FASM_Image%2FPRF192x_ASM2_H%C6%B0%E1%BB%9Bng%20d%E1%BA%ABn%20d%E1%BB%B1%20%C3%A1n_H%C3%ACnh%2013.png?alt=media&token=e191c53d-1d01-48ab-8377-d11be2ba805a)
