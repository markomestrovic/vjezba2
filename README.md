# HCI-vježbe-2022-2023

## Vježba 2

U ovoj vježbi cilj je pokazat kako raditi s komponentama i kako ih stilizirati koristeći **Tailwind**.
Počinjemo na projektu kojeg smo zajedno pripremili prefesor i ja.
Kad pogledamo kod vidimo neobične CSS klase na komponentama, ali ne i CSS kod. To je ono što radi Tailwind.  
Više na službenoj stranici https://tailwindcss.com/

Vježba se sastoji od 4 koraka.  
Sljedimo upute u nastavku.

> ℹ️ **Vježbe će biti razbijene u korake na način da je svaki korak jedan commit**: Želimo da se upoznate s Gitom 🙂

### Commit 1: Extract Footer component

U `pages/home.js` vidimo da je sav kod stranice "nabijen" u isti file. To anti-pattern React-a stoga će nam prvi korak biti razbiti taj _monolitni_ file na **React components**.

1. U components folderu stvorimo novi file s nazivom `Footer.js`
    > ℹ️ **Naming konvencija je da nazivi komponenti budu velikim slovom pa onda tako nazivamo i njihove fileove**
2. Pišemo kod za koponentu, pazimo na import i export
 <details><summary>If in doubt spread me out</summary>

```jsx
import Image from 'next/image';
import LogoImg from '../assets/logo.png';

const Footer = () => (
    <section className="py-12 bg-hci-lila-dark text-hci-lila-light">
        <main className="max-w-4xl flex flex-col mx-auto">
            <div className="flex items-start justify-between">
                <div>
                    <Image
                        src={LogoImg}
                        layout="fixed"
                        width={50}
                        height={50}
                        alt="Design logo"
                    />
                    <div className="mt-8">
                        <div className="flex items-center">
                            <Image
                                src={'/phone.svg'}
                                layout="fixed"
                                width={15}
                                height={15}
                                alt="Phone icon"
                            />
                            <p className="ml-4">+385 123 0000</p>
                        </div>
                        <div className="flex items-center">
                            <Image
                                src={'/email.svg'}
                                layout="fixed"
                                width={15}
                                height={15}
                                alt="Email icon"
                            />
                            <p className="ml-4">design@fesb.hr</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="capitalize text-3xl font-roboto-condensed font-bold text-white">
                        Contact us
                    </h3>
                    <h4 className="text-xl">Drop us a quick message</h4>
                    <div className="mt-2 flex flex-col text-hci-lila-dark">
                        <input
                            className="mt-4 p-2 w-4/5 opacity-80"
                            placeholder="Your Name"
                            type="text"
                        />
                        <input
                            className="mt-4 p-2 w-4/5 opacity-80"
                            placeholder="Your E-mail"
                            type="text"
                        />
                        <textarea
                            className="mt-4 p-2 resize-none opacity-80"
                            placeholder="Your Message"
                            cols="30"
                            rows="8"
                        ></textarea>
                    </div>
                </div>

                <div>
                    <h3 className="capitalize text-3xl font-roboto-condensed font-bold text-white">
                        Sitemap
                    </h3>
                    <h4 className="text-xl">Explore our pages</h4>
                    <ul className="mt-4 list-none font-medium text-white">
                        <li className="whitespace-nowrap cursor-pointer">Home</li>
                        <li className="whitespace-nowrap cursor-pointer mt-1">
                            About us
                        </li>
                        <li className="whitespace-nowrap cursor-pointer mt-1">
                            Products
                        </li>
                        <li className="whitespace-nowrap cursor-pointer mt-1">
                            Blog
                        </li>
                        <li className="whitespace-nowrap cursor-pointer mt-1">
                            Contact us
                        </li>
                        <li className="whitespace-nowrap cursor-pointer mt-1">
                            Private
                        </li>
                    </ul>
                </div>
            </div>
            <p className="mt-12">Copyright @ 2021 FESB. All rights reserved.</p>
        </main>
    </section>
);

export default Footer;
```

</details>

3. Nakon što stvorimo komponentu trebamo je importati nazad u `pages/home.js`: `<Footer />` uz odgovarjući import.

Done!  
`git add .`  
`git commit -m "Vjezba 2: Extract Footer component"`

### Commit 2: Extract CTA component

Isto ali za CTA (call to action).

> ⚠️ **Ako samo kopiramo kod vjerovatno ćemo imat error. Pogedajmo poruku i pokušajmo shvatiti što nedostaje**

Hint: Treba kopirati još nešto

`git add .`  
`git commit -m "Vjezba 2: Extract CTA component"`

### Commit 3: Extract Testimonials

Isto kao i prije

### Commit 4: Extract TestimonialListItem

Ovdje dolazimo na zanimljiv dio. Unutar `Testimonals.js` filea vidimo da se jedan dio koda ponavlja:

```jsx
<div className="h-96 border hover:cursor-pointer">
    <div className="h-4/5 bg-gray-100 relative">
        <Image
            src={'/design-system.jpg'}
            layout="fill"
            objectFit="cover"
            alt="Grow business"
        />
    </div>
    <div className="h-1/5 bg-gray-300 flex items-center justify-center relative">
        <p className="capitalize font-roboto-condensed text-xl text-hci-lila">
            New design system
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
```

Taj dio koda može biti komponenta. Primetimo da se `<Image src` attribut mijenja.  
Taj attribut može biti prop (tj. argument funkcije). Prisjetimo se `.map()` funkcije! Za početak stvorimo niz svih `src` atributa koji se pojavljuju.

`const srces = ['design-system', 'from-scratch', 'brand', 'book-cover']`

Stvaramo novi file `TestimonialsListItem.js`. To je funkcija koja ovaj put prima jedan parametar. Taj parametar je image src (budući da se on mijenja).

<details>
<summary>Peek-a-boo</summary>

```jsx
import Image from 'next/image';

const TestimonialListItem = ({ src }) => (
    <div className="h-96 border hover:cursor-pointer">
        <div className="h-4/5 bg-gray-100 relative">
            <Image src={`/${src}.jpg`} layout="fill" alt="Grow business" />
        </div>
        <div className="h-1/5 bg-gray-300 flex items-center justify-center relative">
            <p className="capitalize font-roboto-condensed text-xl text-hci-lila">
                Book cover design
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
```

```jsx
import TestimonialListItem from './TestimonialListItem';

const srces = ['design-system', 'from-scratch', 'brand', 'book-cover'];

const Testimonials = () => (
    <section className="mt-12 py-12 bg-gray-50">
        <main className="max-w-4xl flex flex-col mx-auto">
            <div>
                <h2 className="capitalize text-4xl font-roboto-condensed font-bold text-gray-700">
                    What our customers are saying
                </h2>
                <h4 className="text-xl text-gray-400 mt-2">
                    Read case studies of our happy customers
                </h4>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-4">
                {srces.map((src) => (
                    <TestimonialListItem key={src} src={src} />
                ))}
            </div>
            <button className="capitalize mt-12 mb-12 mx-auto w-1/3 py-3 border shadow-md whitespace-nowrap text-xl text-hci-lila font-medium hover:bg-gray-100">
                View showcase
            </button>
        </main>
    </section>
);

export default Testimonials;
```

</details>

Imamo dva problema:

1. Jedna slika se ne vidi
2. Sav CTA tekst je isti (Book Cover Design) 😱

Budući da se držimo Clean Commit pristupa, nema commitanja pokvarenog koda. Popravimo ovo.  
Razlog zašto se slika ne radi je file.ext (jpg / png).  
Razlog zašto se tekst ponavlja je još jednostavniji: kopirali smo samo jedan te isti text u novu koponentu.

Fix:

1. Šaljemo cijeli path za sliku (ili novi prop, što je zanimljivije riješenje pa ćemo tako)
2. Šaljemo i text u komponentu

```jsx
const TestimonialListItem = ({ src, ext, text }) => ...
```

```jsx
import TestimonialListItem from './TestimonialListItem';

const testimonials = [
    { src: 'design-system', ext: 'jpg', txt: 'New design system' },
    { src: 'from-scratch', ext: 'jpg', txt: 'From scratch' },
    { src: 'brand', ext: 'jpg', txt: 'Brand transformation' },
    { src: 'book-cover', ext: 'jpg', txt: 'Book cover design' },
];

const Testimonials = () => (
    <section className="mt-12 py-12 bg-gray-50">
        <main className="max-w-4xl flex flex-col mx-auto">
            <div>
                <h2 className="capitalize text-4xl font-roboto-condensed font-bold text-gray-700">
                    What our customers are saying
                </h2>
                <h4 className="text-xl text-gray-400 mt-2">
                    Read case studies of our happy customers
                </h4>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-4">
                {testimonials.map((testimonial) => (
                    <TestimonialListItem
                        key={testimonial.src}
                        src={testimonial.src}
                        ext={testimonial.ext}
                        text={testimonial.txt}
                    />
                ))}
            </div>
            <button className="capitalize mt-12 mb-12 mx-auto w-1/3 py-3 border shadow-md whitespace-nowrap text-xl text-hci-lila font-medium hover:bg-gray-100">
                View showcase
            </button>
        </main>
    </section>
);

export default Testimonials;
```

`git add .`  
`git commit -m "Vjezba 2: Extract TestimonialsListItem"`
