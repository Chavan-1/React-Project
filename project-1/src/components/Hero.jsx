const HeroSection = () => {
    return(
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE'ER HERE TO HELP YO WITH OUR SHOES. 
                   YOUR FEET DESERVE THE BEST AND WE'ER HERE TO HELP YO WITH OUR SHOES 
                </p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>
                <div className="shopping">
                    <p>Also Available On</p>
                    <div className="brand-icons">
                        <img src="/images/amazon.png" alt="amazon-logo" />
                        <img src="/images/flipkart.png" alt="flipkart-logo" />
                    </div>
                </div>
            </div>
            
            <div className="hero-img">
                <img src="/images/shoe_image.png" alt="amazon-logo" />
            </div>
        </main>
    );
};

export default HeroSection;