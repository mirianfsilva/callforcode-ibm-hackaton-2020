import React from 'react';
import Menu from '../../components/Navbar'
import FooterPage from '../../components/Footer';
import OurProposal from '../../components/Proposal';
import image1 from './../../assets/img/img1.png';
import image2 from './../../assets/img/img2.png';
import image3 from './../../assets/img/img3.png';

function Home() {
    return (
        <div style={{ background: "#fcfdf4" }}>
            <Menu />
            <OurProposal img={image2}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type.
            </OurProposal>
        
            <FooterPage />
        </div>
    );
}

export default Home;