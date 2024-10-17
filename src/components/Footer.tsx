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
            <div style={{ 
                position: 'relative', 
                width: '100%', 
                overflow: 'hidden',  // Ensure no scrolling elements overflow
            }}>
                <div
                    ref={scrollContainerRef}
                    style={{
                        fontSize: '6rem',
                        whiteSpace: 'nowrap',
                        display: 'inline-flex',
                        justifyContent: 'center',
                        width: 'max-content', // Prevents clipping of the text
                        fontStyle: 'italic',
                        margin: '20px',
                    }}
                >
                    {/* Scrolling content */}
                    <span>Let's work <span style={{ fontStyle: 'italic' }}>together</span></span> {/* Italicize 'together' */}
                    <span style={{ margin: '0 50px', color:'#EFE1B9' }}>♦</span>
                    <span>Let's work <span style={{ fontStyle: 'italic' }}>together</span></span> {/* Italicize 'together' */}
                    <span style={{ margin: '0 50px', color:'#EFE1B9' }}>♦</span>
                    <span>Let's work <span style={{ fontStyle: 'italic' }}>together</span></span> {/* Italicize 'together' */}
                    <span style={{ margin: '0 50px', color:'#EFE1B9' }}>♦</span>
                    <span>Let's work <span style={{ fontStyle: 'italic' }}>together</span></span> {/* Italicize 'together' */}
                    <span style={{ margin: '0 50px', color:'#EFE1B9' }}>♦</span>

                    {/* Duplicated content for seamless effect */}
                    <span style={{ marginLeft: '40px' }}>Let's work <span style={{ fontStyle: 'italic' }}>together</span></span> {/* Italicize 'together' */}
                    <span style={{ margin: '0 20px', fontStyle: 'italic' }}>♦</span>
                    <span style={{ marginLeft: '40px' }}>Let's work <span style={{ fontStyle: 'italic' }}>together</span></span> {/* Italicize 'together' */}
                    <span style={{ margin: '0 20px', fontStyle: 'italic' }}>♦</span>
                    <span style={{ marginLeft: '40px' }}>Let's work <span style={{ fontStyle: 'italic' }}>together</span></span> {/* Italicize 'together' */}
                    <span style={{ margin: '0 20px', fontStyle: 'italic' }}>♦</span>
                    <span style={{ marginLeft: '40px' }}>Let's work <span style={{ fontStyle: 'italic' }}>together</span></span> {/* Italicize 'together' */}
                    <span style={{ margin: '0 20px', fontStyle: 'italic' }}>♦</span>

                   
                </div>
            </div>

            {/* Fixed white underline - placed outside of scrolling area */}
            <div style={{
                width: '100%', 
                height: '2px', 
                backgroundColor: 'white', 
                position: 'relative',  // Independent of the scrollable banner
                marginTop: '-30px', // Space above the white line
            }}></div>

            {/* Footer content */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                padding: '10px 10px', // Reduced padding from 40px to 20px
                fontSize: '1.1rem',
                textAlign: 'left',
            }}>
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

// Styled-components for better responsiveness and animations
    min-height: 85vh;
    position: relative;
    padding-top: 30px;

    @media (max-width: 768px) {
        min-height: 60vh;
        padding-top: 20px;
    }

    @media (max-width: 480px) {
        min-height: 50vh;
        padding-top: 10px;
    }
`;

const ScrollContainer = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
`;


    @media (max-width: 375px) {
        font-size: 0.9rem;
    }
`;
