<?php
// Define website title and other constants
define('SITE_TITLE', 'Prashant Gupta - UI/UX Designer');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo SITE_TITLE; ?></title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">
    <!-- Font Awesome for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>
<body>
    <?php include 'includes/header.php'; ?>
    
    <main>
        <?php include 'includes/hero.php'; ?>
        <?php include 'includes/about.php'; ?>
        <?php include 'includes/education.php'; ?>
        <?php include 'includes/projects.php'; ?>
        <?php include 'includes/contact.php'; ?>
    </main>
    
    <?php include 'includes/footer.php'; ?>
    
    <script src="js/main.js"></script>
</body>
</html>