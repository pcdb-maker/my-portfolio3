import React, { useEffect, useRef } from 'react';

const Footer = () => {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    let scrollAmount = 0;

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            const scrollSpeed = 1.5;

            const scroll = () => {
                scrollAmount -= scrollSpeed;
                scrollContainer.style.transform = `translateX(${scrollAmount}px)`;

                if (Math.abs(scrollAmount) >= scrollContainer.scrollWidth / 2) {
                    scrollAmount = 0;
                }
                requestAnimationFrame(scroll);
            };

            requestAnimationFrame(scroll);
        }
    }, []);

    return (
        <div style={{ 
            backgroundColor: '#E7594F', 
            fontFamily: 'Playfair Display',
            color: '#ffffff', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between', 
            minHeight: '85vh', 
            position: 'relative',
            {/* Banner animation */}
            <motion.div
                style={{
                    fontSize: '3rem', // Increased size
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                }}
                initial={{ x: '100%' }}
                animate={{ x: '-100%' }}
                transition={{
                    ease: "linear",
                    duration: 20, // Slowed down
                    repeat: Infinity
                }}
            >
                {/* Duplicated content for seamless looping */}
                <span>Let's work together</span>
                <span style={{ margin: '0 20px', fontStyle: 'italic' }}>♦</span>
                <span>一緒に働こう</span>
                <span style={{ margin: '0 20px', fontStyle: 'italic' }}>♦</span>
                <span>Lavoriamo insieme</span>
                <span style={{ margin: '0 20px', fontStyle: 'italic' }}>♦</span>
                <span>Trabajemos juntos</span>
                <span style={{ margin: '0 20px', fontStyle: 'italic' }}>♦</span>
                {/* Repeat the text for seamless effect */}
                <span>Let's work together</span>
                <span style={{ margin: '0 20px', fontStyle: 'italic' }}>♦</span>
                <span>一緒に働こう</span>
                <span style={{ margin: '0 20px', fontStyle: 'italic' }}>♦</span>
                <span>Lavoriamo insieme</span>
                <span style={{ margin: '0 20px', fontStyle: 'italic' }}>♦</span>
                <span>Trabajemos juntos</span>
            </motion.div>

            {/* Footer content */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                paddingTop: '40px',
                fontSize: '1.1rem',
                textAlign: 'left',
                gap: '40px', // Increased horizontal space
            }}>
                <div style={{ flex: 1, padding: '0 20px' }}>
                    <h3 style={{ color: '#D79922', marginBottom: '10px' }}>Astrid Design</h3>
                    <p style={{ marginBottom: '10px' }}>The power of <em>design.</em></p>
                    <p>The beauty of <em>ideas.</em></p>
                </div>

                <div style={{ flex: 1, padding: '0 20px' }}>
                    <h3 style={{ color: '#D79922', marginBottom: '10px' }}>Drop me a line</h3>
                    <p style={{ fontSize: '1.5rem', color: '#F13C20' }}>hello@astridmottes.com</p>
                </div>

                <div style={{ flex: 1, padding: '0 20px' }}>
                    <h3 style={{ color: '#D79922', marginBottom: '10px' }}>Social Media</h3>
                    <p style={{ marginBottom: '10px' }}>Instagram</p>
                    <p style={{ marginBottom: '10px' }}>Behance</p>
                    <p>LinkedIn</p>
                </div>

                <div style={{ flex: 1, padding: '0 20px' }}>
                    <h3 style={{ color: '#D79922', marginBottom: '10px' }}>Other Links</h3>
                    <p style={{ marginBottom: '10px' }}>Portfolio</p>
                    <p style={{ marginBottom: '10px' }}>Services</p>
                    <p>About</p>
                </div>
            </div>

            {/* Footer Bottom */}
            <div style={{ backgroundColor: '#000', color: '#EFE2BA', textAlign: 'center', padding: '20px 0', marginTop: '30px' }}>
                <p>© 2024 by Astrid Mottes | All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Footer;
