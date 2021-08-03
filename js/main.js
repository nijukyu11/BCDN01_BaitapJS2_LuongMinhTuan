
/**
 * Bài 1
 * Khối 1: Input
 * wage: lương theo ngày
 * days: số ngày làm việc
 * 
 * Khối 2: Các bước xử lý
 * B1: tạo và gán giá trị cho lương theo ngày
 * B2: tạo biến số ngày làm việc cho người dùng nhập vào
 * B3: xây dựng công thức
 * salary = wage*days
 * b4: xuất giá trị salary
 * Khối 3: Output
 * salary: tiền lương nhân viên
 * 
 */
document.getElementById("btnLuong").onclick = function(){
    var wage = 100000;
    console.log("Lương/ngày: " + wage);
    var days = document.getElementById("inputLuong").value;
    console.log("Số ngày làm việc: " + days);
    var salary = wage * days;
    console.log("Tiền lương phải trả: " + salary);
    document.getElementById("txtLuong").innerHTML = "Tiền lương phải trả: " + salary;
} 

/**
 * Bài 2
 * Khối 1: input
 * num1 - num5
 * kiểu dữ liệu number(float)
 * 
 * Khối 2:
 * B1: tạo và gán giá trị cho các biến num1 -> num5 và avg
 * B2:  xây dựng công thức 
 * average = (num1 + num2 + num3 + num4 + num5)/5
 * B3: xuất giá trị average
 * 
 * Khối 3: output
 * 
 */
document.getElementById("btnAvg").onclick = function(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);
    var num4 = parseFloat(document.getElementById("num4").value);
    var num5 = parseFloat(document.getElementById("num5").value);
    
    var avg = (num1 + num2 + num3 + num4 + num5)/5;
    console.log("Average: "+avg);
    document.getElementById("txtAvg").innerHTML = avg;
}

/**
 * Bài 3
 * Khối 1: input
 * 1usd = 23500vnd
 * 
 * Khối 2:
 * b1: tạo biến số tiền cần quy đổi là usd,
 * số tiền quy đổi là vnd,
 * rate = 23500
 * b2 xây dựng côgn thức
 * vnd = usd * rate
 * B3: xuất giá trị
 * 
 * B3 output
 * 
 */

document.getElementById("btnCur").onclick = function(){
    var rate = 23500;
    var usd = parseFloat(document.getElementById("inputCur").value);
    console.log("Số tiền cần đổi: "+usd+"usd");
    var vnd = usd*rate;
    console.log("Số tiền quy đổi: "+vnd+"vnd");
    document.getElementById("txtCur").innerHTML = vnd
}

/**
 * Bài 4
 * Khối 1: input
 * chiều dài
 * chiều rộng
 * 
 * Khối 2:
 * B1: tạo biến chiều dài "d"
 * chiều rộng "r"
 * diện tích "s"
 * chu vi "p"
 * B2: xấy dựng công thức
 * s = d*r
 * p = (d+r)*2
 * b3: xuất giá trị
 * 
 * Khối 3: ouput
 * s,p
 *
 */
document.getElementById("btnHcn").onclick = function(){
    var d = parseFloat(document.getElementById("d").value);
    var r = parseFloat(document.getElementById("r").value);
    var s = d*r;
    console.log("Diện tích: "+s);
    document.getElementById("txtS").innerHTML = s
    var p = (d + r)*2;
    document.getElementById("txtP").innerHTML = p
    console.log("Chu vi: "+p);
}

/**
 * Bài 5
 * Khối 1: input
 * số có 2 chữ số
 * 
 * Khối 2:
 * B1: khai báo biến số nhập vào "num",
 * số hàng đơn vị "unit",
 * số hàng chục "dozen",
 * B2: xây dựng công thức
 * tách số hàng đơn vị:
 * unit = num%10
 * tách số hàng chục:
 * dozen = Math.floor(num/10)
 * tính tổng unit và dozen
 * B3: xuất kết quả
 * 
 * Khối 3: output
 * tổng cần tìm "sum"
 */

 document.getElementById("btnNum").onclick = function(){
     var num = parseFloat(document.getElementById("inputNum").value);
     console.log("Số có 2 chữ số: "+num);
     var unit = num%10
     console.log("Số đơn vị: "+unit);
     var dozen = Math.floor(num/10);
     console.log("Số hàng chục: "+dozen);
     var sum = unit+dozen;
     console.log("Tổng cần tìm: "+sum);
    if(dozen < 10){
        document.getElementById("txtNum").innerHTML = "Tổng 2 ký số là: "+ sum;
    }else{
        document.getElementById("txtNum").innerHTML = "Vui lòng nhập số có 2 chữ số";
    }
 }