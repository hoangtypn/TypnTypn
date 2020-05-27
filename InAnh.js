/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
type = "text/javascript"
 function run()
{
    var s = "";
    s += "<table>";
    s += "<tr>";
    for (i = 0; i < tenFileAnh.length; i++)
    {

        s += "<td onclick='chuyen("+i+")'><img src='image\\" + tenFileAnh[i] + "'/></td>";

    }
    s += "</tr>";s += "</table>";
     s += "<table>";
    s += "<tr>";
    for (i = 0; i < tenAnh.length; i++)
    {
        
        s += "<td class='zoom1'  ><h2 onclick='chuyen("+i+")'>" + tenAnh[i] + "</h2></td>";
    }
    s += "</tr>";
    s += "</table>";
    document.getElementById("noichuathongtin").innerHTML = s;
}
    
    function chuyen(j){
        document.getElementById("noideloaddulieu1").innerHTML = "";
         var s1 = "";
        for (i = j; i < tenPhanAnh.length; i++){
        s1 += "<table style='height:450px;width:1450px;background-color:black;'>";
        s1 += "<tr>";
        s1 += "<td class='zoomnghieng'><img src='image\\" + tenPhanAnh[i] + "' style='width: 100%'/></td>";
        s1 += "<td style='float:left;margin-left:20px;'><h2 style='color: red'>" + tenPhan[i] + "</h2><h4 style='color:#FFC;'>" + gioithieu[i]+"</h4></td>";
         s1 += "</tr>";
        s1 += "<tr  class='examp2'>";
        s1 += "<td>" + noidungphim[0]+" <h4 style='color:#dacb46'>" + noidung[i] + "</h4></td>";
        s1 += "</tr>";
        s1 += "</table>";
    }
    document.getElementById("noideloaddulieu1").style.height="1900px";
    document.getElementById("noideloaddulieu1").innerHTML = s1;
}
tenFileAnh = ["mt0.jpg",
    "mt1.jpg",
    "mt2.jpg",
    "mt3.jpg",
    "mt4.jpg",
    "mt5.jpg"];
tenAnh = ["Avenger",
    "IronMan",
    "Thor",
    "Captain America",
    "Spider-Man",
    "Black Panther"];
tenPhanAnh=["av1.jpg",
    "av2.jpg",
    "av3.jpg",
    "av4.jpg"]
tenPhan=["BIỆT ĐỘI SIÊU ANH HÙNG:The Avengers (2012)","Biệt Đội Siêu Anh Hùng 2: Đế chế Ultron","Biệt Đội Siêu Anh Hùng 3: Cuộc Chiến Vô Cực","Biệt Đội Siêu Anh Hùng 4: Tàn Cuộc"];
gioithieu=["Trạng thái:Hoàn tất<br> Điểm IMDb:8.2<br>Đạo diễn:Joss Whedon<br> Quốc gia:Mỹ<br>Năm:2012<br>Thời lượng:143 phút<br>Chất lượng:Bản đẹp<br>Độ phân giải:FullHD<br>Ngôn ngữ:Phụ đề việt + Thuyết minh<br>Thể loại:Phim viễn tưởng<br>Công ty SX:Marvel Studios<br>Lượt xem: 5,409,020",
 "Đạo diễn:Joss Whedon<br> Quốc gia:Mỹ<br> Năm:2015<br> Ngày ra rạp:24/4/2015<br> Thời lượng:150 phút<br> Chất lượng:Bản đẹp<br> Độ phân giải:Full HD<br> Ngôn ngữ:Phụ đề việt + Thuyết minh<br> Thể loại:Phim viễn tưởng,Phim chiếu rạp<br> Công ty SX:Marvel Studios<br> Lượt xem: 15,239,425<br>",   
 "Đạo diễn:Joss Whedon<br> Quốc gia:Mỹ<br> Năm:2015<br> Ngày ra rạp:24/4/2015<br> Thời lượng:150 phút<br> Chất lượng:Bản đẹp<br> Độ phân giải:Full HD<br> Ngôn ngữ:Phụ đề việt + Thuyết minh<br> Thể loại:Phim viễn tưởng,Phim chiếu rạp<br> Công ty SX:Marvel Studios<br> Lượt xem: 15,239,425<br>",   
 "Đạo diễn:Joss Whedon<br> Quốc gia:Mỹ<br> Năm:2015<br> Ngày ra rạp:24/4/2015<br> Thời lượng:150 phút<br> Chất lượng:Bản đẹp<br> Độ phân giải:Full HD<br> Ngôn ngữ:Phụ đề việt + Thuyết minh<br> Thể loại:Phim viễn tưởng,Phim chiếu rạp<br> Công ty SX:Marvel Studios<br> Lượt xem: 15,239,425<br>",   
];
noidung=[" Marvel’s The Avengers là bộ phim giả tưởng kể về một nhóm siêu anh hùng với những khả năng đặc biệt, họ bao gồm: Người Sắt, Thor, Captain America,<br> và Người Khổng Lồ được gọi chung với cái tên SHIELD. Mục đích của SHIELD là nhằm bảo vệ Trái đất khỏi âm mưu hủy hoại của những thế lực xấu từ ngoài địa cầu mà <br> kẻ cầm đầu là Loki. Marvel’s The Avengers Là một trong những phim được mong đợi nhất hè 2012, phim quy tụ dàn diễn viên đẹp với những cảnh quay sống động đã mang <br>về cho nhà sản xuất hơn 1 tỷ USD. Nếu bạn đã từng là Fan của những siêu phẩm như: Spider-Man, Batman thì Marvel’s The Avengers quả là một bộ phim khó có thể bỏ qua.<br>",
    "  Trong phần này, biệt đội siêu anh hùng của chúng ta sẽ phải chiến đấu với binh đoàn robot được biết đến với cái tên là Ultron.<br>Ultron với ý định muốn hủy diệt thế giới để tạo ra 1 thế gới mới với sự hòa bình mãi mãi.<br>",
  "Sau chuyến hành trình độc nhất vô nhị không ngừng mở rộng và phát triển vụ trũ điện ảnh Marvel, bộ phim <br>Avengers: Cuộc Chiến Vô Cực sẽ mang đến màn ảnh trận chiến cuối cùng khốc liệt nhất mọi thời đại. Biệt <br>đội Avengers và các đồng minh siêu anh hùng của họ phải chấp nhận hy sinh tất cả để có thể chống lại kẻ <br>thù hùng mạnh Thanos trước tham vọng hủy diệt toàn bộ vũ trụ của hắn.<br>",   
  "Sau chuyến hành trình độc nhất vô nhị không ngừng mở rộng và phát triển vụ trũ điện ảnh Marvel, bộ phim <br>Avengers: Cuộc Chiến Vô Cực sẽ mang đến màn ảnh trận chiến cuối cùng khốc liệt nhất mọi thời đại. Biệt <br>đội Avengers và các đồng minh siêu anh hùng của họ phải chấp nhận hy sinh tất cả để có thể chống lại kẻ <br>thù hùng mạnh Thanos trước tham vọng hủy diệt toàn bộ vũ trụ của hắn.<br>",   

];
noidungphim=["<h3 style='color:#dacb46'>&nbsp;&nbsp;&nbsp;&nbsp;NỘI DUNG PHIM</h3>"]