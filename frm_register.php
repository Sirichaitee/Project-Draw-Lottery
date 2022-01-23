<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
</head>
<body>
<div class="container">
  <div class="row">
    <div class="col-md-12">
    <h3 align="center"> Form สมัครสมาชิก </h3>
      <form action="" method="POST" name="register"  id="register">
        <table width="70%" border="0" align="center" cellpadding="0" cellspacing="0">
          <tr>
            <td width="18%" align="right"> Username &nbsp;</td>
            <td width="31%"><input name="Username" type="text" id="Username" class="form-control" placeholder="ภาษาอังกฤษหรือตัวเลข" required> <span id="msg2"></span> </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td align="right"> Password &nbsp;</td>
            <td><input name="Password" type="password" id="Password" class="form-control" placeholder="อย่างน้อย 8 ตัว"  required></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td align="right"> Comfirm&nbsp; Password&nbsp;</td>
            <td>
            <input name="Password2" type="password" id="Password2" placeholder="คอนเฟิร์ม Password " class="form-control"  required >        
</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td align="right"> ชื่อ &nbsp;</td>
            <td colspan="2">
            <input name="Fname" type="text" id="Fname"  class="form-control" placeholder="ภาษาไทยหรืออังกฤษ" required></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td align="right"> นามสกุล &nbsp;</td>
            <td colspan="2">
            <input name="Lname" type="text" id="Lname" size="50" class="form-control" placeholder="ภาษาไทยหรืออังกฤษ" required></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td align="right"> E-mail &nbsp; </td>
            <td><input name="Email" type="email" id="Email" class="form-control" placeholder="เช่น abc@gmail.com " required></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td align="right">เบอร์โทรศัพท์ &nbsp; </td>
            <td><input name="Phone" type="text" id="Phone" class="form-control" placeholder="เช่น 091 999 9999" required></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td align="center">&nbsp;</td>
            <td colspan="3" align="center">
            </td>
          </tr>
          <tr>
            <td align="center">&nbsp;</td>
            <td colspan="3" align="left">
            <input type="submit" name="regis" id="regis" class="btn btn-info btn-sm" value="สมัครสมาชิก" >
            
            </td>
          </tr>
        </table>
      </form>
      </div>
    </div>
  </div>
      
<!--start footer-->      
<p align="center"> Template by devbanban.com modify from bootstrap </p>
<!--end footer-->

</body>
</html>