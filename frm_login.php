<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>หน้าจอหลัก</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Chonburi&family=Kanit:wght@100;500;600&display=swap" rel="stylesheet">

</head>
<body>
<?php include 'header.php';?>
<div class="d-flex align-items-center min-vh-100">
    <div class="container-fluid">    
        <div class="row justify-content-center">
            <div class="col-lg-5">
                <div class="card shadow border-0">
                    <h3 class="card-header text-center"> Form Login </h3>
                    <div class="card-body px-4">
                        <form  class="form-signin" name="formlogin" action="" method="POST" id="login">
                            <div class="row g-3">
                                <div class="col-12">
                                    <div class="form-group">
                                            <label for="email-login" class="col-form-label" > Username Email</label>
                                            <input type="email" name="email" class="form-control" required placeholder="Email" />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                                <label class="col-form-label" id="pwd-login"> Password </label>
                                                <input type="password" for="pwd-login"  name="pwd-login" class="form-control" required placeholder="Password" />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group form-check">
                                                <input class="form-check-input" name="" type="checkbox" value="Remember me" autocomplete="off">
                                                <label class="col-form-label" for="exampleCheck1">Check me Out</label>
                                    </div>
                                    <div class="form-group text-center">
                                                <input type="reset" class="btn btn-danger btn-lg -block w-40 mx-auto" id="btn" value="Reset"></input> 
                                                <input type="submit" class="btn btn-primary btn-lg btn-block w-40 mx-auto" id="btn" value="Signin"></input> 
                                                <a href="index.php" class="btn-lg d-block mx-auto"> กลับหน้าหลัก </a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</div>


<?php include 'footer.php';?>

</body>
</html>