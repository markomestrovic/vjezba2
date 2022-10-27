import Header from '../components//header.js';
import Footer from '../components//Footer.js';
import Image from 'next/image';

import CTAImg from '../assets/grow_business.jpg';
import LogoImg from '../assets/logo.png';

// TBD: Refactor this
const width = 410;
const height = width / (508 / 440);

const Hello = () => {
    return (
        <>
        <Header/>

        <section className="pt-12">
            <main className="max-w-4xl mx-auto flex align-bottom">
                <div className="flex relative">
                    <Image
                        src={CTAImg}
                        layout="fixed"
                        width={width}
                        height={height}
                        alt="Grow business"
                    />
                </div>
                <div className="ml-8 flex flex-col justify-between">
                    <div>
                        <div>
                            <h2 className="capitalize text-4xl font-roboto-condensed font-bold text-gray-700">
                                Grow your business with us
                            </h2>
                            <h4 className="text-xl text-gray-400 mt-2">
                                Beautify your website and brand
                            </h4>
                        </div>
                        <p className="mt-4 leading-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                        <p className="mt-2 leading-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </div>
                    <button className="w-2/3 py-3 bg-red-700 hover:bg-red-800 shadow-md whitespace-nowrap text-xl text-white font-medium">
                        Book a meeting
                    </button>
                </div>
            </main>
        </section>

        <Testimonials/>

        <Footer />
        </>
    );
};

export default Hello;
