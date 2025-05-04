<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $fullname = isset($_POST['fullname']) ? htmlspecialchars(trim($_POST['fullname'])) : '';
    $phone = isset($_POST['phone']) ? htmlspecialchars(trim($_POST['phone'])) : '';
    $email = isset($_POST['email']) ? htmlspecialchars(trim($_POST['email'])) : '';
    $message = isset($_POST['message']) ? htmlspecialchars(trim($_POST['message'])) : '';
    
    // Validate form data
    $errors = [];
    
    if (empty($fullname)) {
        $errors[] = "Full name is required";
    }
    
    if (empty($email)) {
        $errors[] = "Email is required";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format";
    }
    
    if (empty($message)) {
        $errors[] = "Message is required";
    }
    
    // If there are no errors, process the form
    if (empty($errors)) {
        // Email recipient (change this to your email)
        $to = "prashant.official62@gmail.com;
        
        // Email subject
        $subject = "New Contact Form Submission from $fullname";
        
        // Email content
        $email_content = "Name: $fullname\n";
        $email_content .= "Email: $email\n";
        
        if (!empty($phone)) {
            $email_content .= "Phone: $phone\n";
        }
        
        $email_content .= "Message:\n$message\n";
        
        // Email headers
        $headers = "From: $email\r\n";
        
        // Send email
        $mail_sent = mail($to, $subject, $email_content, $headers);
        
        // Optionally, you can also save the form data to a database
        
        // Redirect with success message
        if ($mail_sent) {
            // Set session message if using sessions
            // session_start();
            // $_SESSION['success_message'] = "Thank you for your message. We'll get back to you soon!";
            
            // Redirect using GET parameter instead
            header("Location: index.php?status=success#contact");
            exit;
        } else {
            // Redirect with error
            header("Location: index.php?status=error#contact");
            exit;
        }
    } else {
        // Redirect with errors
        $error_string = implode(',', $errors);
        header("Location: index.php?status=error&message=" . urlencode($error_string) . "#contact");
        exit;
    }
} else {
    // If the form was not submitted, redirect to the homepage
    header("Location: index.php");
    exit;
}
?>