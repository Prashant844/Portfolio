<section class="projects-section" id="projects">
    <div class="container">
        <div class="section-title">
            <h2>My <span class="highlight">Projects</span></h2>
            <p>Innovative Solutions and Designs</p>
        </div>
        
        <div class="project-filters">
            <button class="filter-btn active" data-filter="all">All Work</button>
            <button class="filter-btn" data-filter="figma">Figma Designs</button>
            <button class="filter-btn" data-filter="wordpress">Wordpress Designs</button>
            <button class="filter-btn" data-filter="photoshop">Photoshop Designs</button>
        </div>
        
        <div class="projects-grid">
            <?php
            // Project data - in a real application, this could come from a database
            $projects = [
                [
                    'id' => 1,
                    'title' => 'Foodie Mobile App',
                    'category' => 'figma',
                    'image' => 'assets/images/project1.jpg',
                    'url' => '#'
                ],
                [
                    'id' => 2,
                    'title' => 'Dark Theme Portfolio',
                    'category' => 'figma wordpress',
                    'image' => 'assets/images/project2.jpg',
                    'url' => '#'
                ],
                [
                    'id' => 3,
                    'title' => 'Business Website',
                    'category' => 'wordpress photoshop',
                    'image' => 'assets/images/project3.jpg',
                    'url' => '#'
                ]
            ];
            
            // Display projects
            foreach ($projects as $project): 
            ?>
                <div class="project-item" data-categories="<?php echo $project['category']; ?>">
                    <div class="project-img">
                        <img src="<?php echo $project['image']; ?>" alt="<?php echo $project['title']; ?>">
                        <div class="project-overlay">
                            <a href="<?php echo $project['url']; ?>" class="view-project">
                                <i class="fas fa-eye"></i>
                            </a>
                        </div>
                    </div>
                    <div class="project-info">
                        <h4><?php echo $project['title']; ?></h4>
                        <p><?php echo ucwords(str_replace(' ', ', ', $project['category'])); ?></p>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>