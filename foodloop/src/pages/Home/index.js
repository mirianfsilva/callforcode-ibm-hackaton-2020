import React from 'react';
import Menu from '../../components/Navbar'
import FooterPage from '../../components/Footer';
import OurProposal from '../../components/Proposal';
import Opening from '../../components/Opening';
import PlansSection from '../../components/PlansSection';

function Home() {
    return (
        <div style={{ background: "#fcfdf4" }}>
            <Menu />
            <Opening></Opening>
            <OurProposal />
            <PlansSection />
            <FooterPage />
        </div>
    );
}

export default Home;