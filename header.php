
    <!-- การสร้าง Menu -->
    <nav class="navbar navbar-expand-sm navbar-dark bg-info">
    <div class="container">
        <a href="index.php" class="navbar-brand">ระบบ E-services</a>
        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar1">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div id="navbar1" class="collapse navbar-collapse">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a href="index.php" class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                    <a href="#service" class="nav-link">บริการ</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">ระบบเลือกฉลาก</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">ระบบจับฉลาก</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">รายงาน</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">admin</a>
                </li>
                <li class="nav-item">
                    <a href="frm_login.php" class="nav-link">login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="modal" data-bs-target="#modal_contact">ติดต่อผู้พัฒนา</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
    <!-- การสร้าง Slider -->
<section id="Slider">
    <div class="carousel Slide" data-bs-ride="carousel" id="myslide">
        <!-- การสร้าง Bar ด้านล่างรูป -->
        <ol class="carousel-indicators">
            <button data-bs-target="#myslide" data-bs-Slide-to="0"class="active"></button>
            <button data-bs-target="#myslide" data-bs-Slide-to="1"></button>
            <button data-bs-target="#myslide" data-bs-Slide-to="2"></button>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item carousel-image-1 active">
                <div class="container">
                    <div class="carousel-caption d-none d-sm-block">
                        <h1 class="display-3">ระบบสมาชิก</h1>
                        <p>Loremfsddddddddddddddddddddddddddddddddda</p>
                    </div>
                </div>
            </div>
            <div class="carousel-item carousel-image-2 ">
                <div class="container">
                    <div class="carousel-caption d-none d-sm-block">
                        <h1 class="display-3">ระบบเลือกฉลาก</h1>
                        <p>Loremfsddddddddddddddddddddddddddddddddda</p>
                    </div>
                </div>           
            </div>
            <div class="carousel-item carousel-image-3 ">
                <div class="container">
                    <div class="carousel-caption d-none d-sm-block">
                        <h1 class="display-3">ระบบจับฉลาก</h1>
                        <p>Loremfsddddddddddddddddddddddddddddddddda</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" data-bs-target="#myslide" data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>  
            </button>
            <button class="carousel-control-next" data-bs-target="#myslide" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>  
            </button>
        </div>
    </div>
</section>