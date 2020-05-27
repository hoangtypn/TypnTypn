/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 type="text/javascript" 
    function xlDangNhap(ten, mkhau)
        {
        if (ten.toLowerCase()=="hoangbd")
        if (mkhau=="hoang")
            {
                alert('Đăng Nhập thành công');
                alert('Xin Chào hoang');
                window.open("MarvelDC.html");
            }
        else{
        alert('Sai mật khẩu');
        }
        else
        alert('Không có user này');
        }
  

