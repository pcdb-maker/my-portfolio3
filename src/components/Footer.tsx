import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    let scrollAmount = 0;

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        let scrollSpeed = 1.5;

        const handleResize = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth < 768) {
                scrollSpeed = 1.7; // Slow down for mobile devices
            } else if (screenWidth < 1200) {
                scrollSpeed = 1.7; // Moderate speed for tablets
            } else {
                scrollSpeed = 1.7; // Default speed for desktop
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Set initial speed

        if (scrollContainer) {
            const scroll = () => {
                if (scrollContainer) {

                if (Math.abs(scrollAmount) >= scrollContainer.scrollWidth / 2) {
                    scrollAmount = 0;
                }
                requestAnimationFrame(scroll);
            };

            requestAnimationFrame(scroll);
        }
        };
    }, []);

    return (
        <FooterContainer id="footer">
            {/* Banner animation */}
            <ScrollContainer>
                <ScrollContent ref={scrollContainerRef}>
                    {[...Array(8)].map((_, index) => (
                        <span key={index} className="scroll-item">
                          <span>Let's work <span className="italic">together</span></span>
                          <span className="diamond"> ♦ </span>
                        </span>
                    ))}
                </ScrollContent>
            </ScrollContainer>

            {/* Fixed white underline */}
            <Underline />

            {/* Footer content */}
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
                            <li>Behance</li>
                            <li>LinkedIn</li>
                        </ul>
                    </FooterLinks>
                </FooterRow>
            </FooterContent>

            {/* Footer Bottom */}
            <FooterBottom>
                <FooterBottomContent>
                    <span>© 2024 by Chloe Osborne</span>
                    <span>PI 02743210227</span>
                </FooterBottomContent>
                <PrivacyLinks>
                    <span>Privacy Policy</span> | <span>Cookie Policy</span>
                </PrivacyLinks>
            </FooterBottom>
        </FooterContainer>
    );
};

export default Footer;

// Styled-components for better responsiveness and animations
const FooterContainer = styled.div`
    background-color: #E5574E; // Use the preferred blue color
    font-family: 'Playfair Display', serif;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

const ScrollContent = styled.div`
    font-size: 5rem;
    white-space: nowrap;
    display: inline-flex;
    justify-content: center;
    width: max-content;
    font-style: italic;
    margin: 20px;
    gap: 10px;
    
    @media (max-width: 768px) {
        font-size: 4rem;
        margin: 10px;
        gap: 50px;
    }

    @media (max-width: 500px) {
        font-size: 3rem;
        margin: 40px;
        gap: 90px;
    }

    @media (max-width: 400px) {
        font-size: 2rem;
        margin: 30px;
        gap: 1px;
    }

    .scroll-item {
        display: inline-flex;

        .italic {
            font-style: italic;
        }

        .diamond {
            color: #EFE1B9;
            margin: 0 20px;
        }
    }
`;

const Underline = styled.div`
    width: 100%;
    height: 2px;
    background-color: white;
    position: relative;
    margin-top: -30px;

    @media (max-width: 480px) {
        margin-top: -15px;
    }
`;

const FooterContent = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FooterRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1200px;
    width: 100%;
    margin-top: 20px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 40px;

    @media (max-width: 768px) {
        margin-right: 0;
        margin-bottom: 20px;
        align-items: center;
    }
`;

const LogoSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 768px) {
        align-items: center;
    }
`;

const LogoText = styled.h2`
    font-size: 2rem;
    color: #ffffff;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }

    @media (max-width: 375px) {
        font-size: 2rem;
    }
`;

const LogoSubText = styled.span`
    font-size: 1.5rem;
    color: #EFE1B9;
    font-style: italic;

    @media (max-width: 375px) {
        font-size: 0.9rem;
    }
`;

const FooterTagline = styled.div`
    font-size: 2rem;
    margin-top: 5px;

    p {
        margin: 5px 0;
    }

    .highlight {
        color: #EFE0B8; // Highlight color
    }

    @media (max-width: 375px) {
        font-size: 1.2rem;
        text-align: center;
    }
`;

const ContactSection = styled.div`
    margin-right: 40px;
    font-size: 1rem;

    .contact-title {
        font-size: 1.2rem;
        color: #D7C3A4;
        margin-bottom: 5px;
    }

    .email-link {
        font-size: 1rem;
        color: #ffffff;
        text-decoration: none;

        @media (max-width: 768px) {
            font-size: 0.9rem;
        }

        @media (max-width: 375px) {
            font-size: 0.8rem;
        }
    }

    @media (max-width: 768px) {
        margin-right: 0;
        margin-bottom: 20px;
        align-items: center;
        text-align: center;
    }

    @media (max-width: 375px) {
        font-size: 0.8rem;
    }
`;

const FooterLinks = styled.div`
    margin-right: 40px;
    text-align: center;

    h4 {
        font-size: 1.5rem;
        color: #D7C3A4;
        margin-bottom: 10px;
    }

    ul {
        list-style: none;
        padding: 0;

        li {
            font-size: 1rem;
            margin-bottom: 5px;
            color: #ffffff;
        }
    }

    @media (max-width: 768px) {
        margin-right: 0;
        margin-bottom: 20px;
        text-align: center; /* Center align content on mobile */
        align-items: center;
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 375px) {
        h4 {
            font-size: 1rem;
        }

        li {
            font-size: 1rem;
        }
    }
`;

const FooterBottom = styled.div`
    background-color: #28282F;
    color: #ffffff;
    text-align: center;
    padding: 20px 0;
    width: 100%;

    @media (max-width: 375px) {
        padding: 15px 0;
    }
`;

const FooterBottomContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        padding: 10px;
    }

    @media (max-width: 375px) {
        padding: 0 10px;
    }
`;

const PrivacyLinks = styled.div`
    margin-top: 10px;
    font-size: 0.9rem;

    span {
        margin: 0 5px;
    }

    @media (max-width: 375px) {
        font-size: 0.9rem;
    }
`;
