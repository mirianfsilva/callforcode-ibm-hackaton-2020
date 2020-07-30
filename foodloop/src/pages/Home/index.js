import React from 'react';
import Menu from '../../components/Navbar'
import FooterPage from '../../components/Footer';
import OurProposal from '../../components/Proposal';

function Home() {
    return (
        <div style={{ background: "#fcfdf4" }}>
            <Menu />
            <OurProposal />
            <FooterPage />
        </div>
    );
}

export default Home;