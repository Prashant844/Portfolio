<section class="contact-section" id="contact">
    <div class="container">
        <div class="section-title">
            <h2>Let's <span class="highlight">Talk</span></h2>
            <p>Have a project in mind? Let's make it happen!</p>
        </div>
        
        <div class="contact-container">
            <div class="contact-form-container">
                <h3>Get in Touch</h3>
                
                <form action="process_form.php" method="POST" id="contact-form">
                    <div class="form-group">
                        <label for="fullname">Full Name</label>
                        <input type="text" id="fullname" name="fullname" placeholder="John Doe" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="phone">Your Phone</label>
                        <input type="tel" id="phone" name="phone" placeholder="+91 12345 67890">
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Your Email</label>
                        <input type="email" id="email" name="email" placeholder="example123@gmail.com" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Your Message</label>
                        <textarea id="message" name="message" placeholder="Leave a message..." required></textarea>
                    </div>
                    
                    <button type="submit" class="btn primary-btn">Send Message</button>
                </form>
            </div>
            
            <div class="contact-illustration">
                <img src="assets/images/contact-illustration.png" alt="Contact Illustration">
            </div>
        </div>
    </div>
</section>