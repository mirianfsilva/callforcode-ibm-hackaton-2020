import React from 'react';
import Menu from '../../components/Navbar'
import FooterPage from '../../components/Footer';
import HowItWorks from '../../components/HowItWorks';

function About() {
    return (
        <div style={{ background: "#fcfdf4" }}>
            <Menu />
            <HowItWorks>
            </HowItWorks>
            <FooterPage/>
        </div>
    );
}

export default About;