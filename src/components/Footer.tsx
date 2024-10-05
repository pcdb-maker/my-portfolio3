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
            paddingTop: '30px'
        }}>
            {/* Banner animation */}
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
                <div style={{ padding: '0 20px' }}>
                    <h3 style={{ color: '#D7C3A4' }}>Chloe Osborne Designs</h3>
                    <p>Design with <em>purpose.</em> <br />Ideas with<em> impact.</em></p>
                </div>

                <div style={{ padding: '0 20px' }}>
                    <h3 style={{ color: '#D7C3A4' }}>Email me:</h3>
                    <p style={{ fontSize: '1.5rem', color: '#ffffff' }}>cosborne.career@outlook.com</p>
                </div>

                <div style={{ padding: '0 20px' }}>
                    <h3 style={{ color: '#D7C3A4' }}>Social Media</h3>
                    <p>Instagram <br /> Behance <br /> LinkedIn</p>
                </div>

                <div style={{ padding: '0 20px' }}>
                    <h3 style={{ color: '#D7C3A4' }}>Other Links</h3>
                    <p>Portfolio <br /> Services <br /> About</p>
                </div>
            </div>

            {/* Footer Bottom */}
            <div style={{ 
                backgroundColor: '#28282F', 
                color: '#fffff', 
                textAlign: 'center', 
                padding: '20px 0', 
                width: '100%', 
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px' }}>
                    <span>© 2024 by Chloe Osborne</span>
                    <span>All Rights Reserved</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
