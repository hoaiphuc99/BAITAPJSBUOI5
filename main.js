// BÀI TẬP JS BUỔI 5
// BÀI 1--------------------------------------------
function quanly() {
    var diemchuan = document.getElementById("so_0").value * 1;
    var diem1 = document.getElementById("so_1").value * 1;
    var diem2 = document.getElementById("so_2").value * 1;
    var diem3 = document.getElementById("so_3").value * 1;
    var khuvuc = document.getElementById("so_4").value * 1;
    var doituong = document.getElementById("so_5").value * 1;
    var result = "";
    console.log(diemchuan, diem1, diem2, diem3, khuvuc, doituong)
    if (diem1 == 0 || diem2 == 0 || diem3 == 0) {
        result = " Rớtttttttt";
    }
    else {
        var tongdiem = diem1 + diem2 + diem3 + khuvuc + doituong;
        if (tongdiem >= diemchuan) {
            result = "tổng điểm: " + tongdiem + "<br>" + "chúc mừng bạn đã đậu!";
        }
        else {
            result = " Rớtttttttt";
        }
    }
    document.getElementById("ketqua").innerHTML = result;
}
// ---------------------------------------------------------------------------
// BÀI 2
function tinhtien() {
    var tenkh = document.getElementById("so_6").value;
    var soluongdien = document.getElementById("so_7").value * 1;
    var tiendien = "";
    var kq = "";
    if (soluongdien <= 50) {
        tiendien = soluongdien * 500;
    }
    else if (soluongdien > 50 && soluongdien <= 100) {
        tiendien = 50 * 500 + (soluongdien - 50) * 650;
    }
    else if (soluongdien > 100 && soluongdien <= 200) {
        tiendien = 50 * 500 + 50 * 650 + (soluongdien - 100) * 850;
    }
    else if (soluongdien > 200 && soluongdien <= 350) {
        tiendien = 50 * 500 + 50 * 650 + 100 * 850 + (soluongdien - 200) * 1100;
    }
    else {
        tiendien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soluongdien - 350) * 1300;
    }
    kq = "khách hàng : " + tenkh + "<br>" + "tiền điện của quý khách là: " + tiendien + "VND";
    document.getElementById("tiendien").innerHTML = kq;
}