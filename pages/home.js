import Header from '../components//header.js';
import Footer from '../components//Footer.js';
import Image from 'next/image';

import CTAImg from '../assets/grow_business.jpg';
import LogoImg from '../assets/logo.png';

// TBD: Refactor this

const Hello = () => {
    return (
        <>
        <Header/>

        <CTA />

        <Testimonials/>

        <Footer />
        </>
    );
};

export default Hello;
