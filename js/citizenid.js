
//Script สุ่มเลขประจำตัวประชาชน จาก DOE System
function genCitizenId() {
	var id12 = "";
	for(var i = 0; i < 12; i++){
		id12 += parseInt(Math.random()*10);
	}
	document.getElementById("rslt").innerHTML = id12 + finddigit(id12);
	document.getElementById("cpyRslt").innerHTML='';
}
function finddigit(id) {
	var base = 100000000000; //สร้างตัวแปร เพื่อสำหรับให้หารเพื่อเอาหลักที่ต้องการ
      		var basenow; //สร้างตัวแปรเพื่อเก็บค่าประจำหลัก
      		var sum = 0; //สร้างตัวแปรเริ่มตัวผลบวกให้เท่ากับ 0
     			 for(var i = 13; i > 1; i--) { //วนรอบตั้งแต่ 13 ลงมาจนถึง 2
          			basenow = Math.floor(id/base); //หาค่าประจำตำแหน่งนั้น ๆ
          			id = id - basenow*base; //ลดค่า id ลงทีละหลัก
          			sum += basenow*i; //บวกค่า sum ไปเรื่อย ๆ ทีละหลัก
          			base = base/10; //ตัดค่าที่ใช้สำหรับการหาเลขแต่ละหลัก
      		}
      		var checkbit = (11 - (sum%11))%10; //คำนวณค่า checkbit
	return checkbit;
}

//copy the selected text
function cpyText() {
	document.getElementById("cpyRslt").innerHTML='คัดลอกเลขประจำตัวประชาชนแล้ว';//set indication message 
	var copyText = document.getElementById("rslt");
	var textArea = document.createElement("textarea"); //create temp textarea to cpoy from
	document.body.appendChild(textArea);
	textArea.value = copyText.textContent;
	textArea.select();
	document.execCommand("copy");
	textArea.remove(); //remove temp textarea
}

