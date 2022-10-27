import Image from 'next/image';

const TestimonialListItem = ({ src, ext, text }) => (
    <div className="h-96 border hover:cursor-pointer">
        <div className="h-4/5 bg-gray-100 relative">
            <Image src={`/${src}.${ext}`} 
            layout="fill" 
            alt="Grow business" />
        </div>
        <div className="h-1/5 bg-gray-300 flex items-center justify-center relative">
            <p className="capitalize font-roboto-condensed text-xl text-hci-lila">
                {text}
            </p>
            <div className="absolute right-4 h-full flex items-center">
                <Image
                    src={'/right.svg'}
                    layout="fixed"
                    width={15}
                    height={15}
                    alt="Right icon"
                />
            </div>
        </div>
    </div>
);

export default TestimonialListItem;