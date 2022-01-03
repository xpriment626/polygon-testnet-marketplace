import "../styles/globals.css";
import Link from "next/link";
import Particles from "react-tsparticles";

function MyApp({ Component, pageProps }) {
    const particlesInit = (main) => {
        console.log(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const ParticleConfig = {
        particles: {
            number: {
                value: 300,
                density: {
                    enable: true,
                    value_area: 552.4033491425909,
                },
            },
            color: {
                value: "#ffffff",
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000",
                },
                polygon: {
                    nb_sides: 5,
                },
            },
            opacity: {
                value: 1,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0,
                    sync: false,
                },
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 4,
                    size_min: 0.3,
                    sync: false,
                },
            },
            line_linked: {
                enable: false,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 0.5,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 600,
                },
            },
        },
        retina_detect: true,
    };

    return (
        <div>
            <Particles
                className="particles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={ParticleConfig}
            />
            <nav className="border-b p-6 bg-black">
                <Link href="/">
                    <p className="text-4xl text-white font-bold hover:cursor-pointer">
                        Meta Gallery
                    </p>
                </Link>
                <div className="flex justify-center mt-4">
                    <Link href="/">
                        <a className="mr-4 text-pink-500 hover:underline">
                            Home
                        </a>
                    </Link>
                    <Link href="create-nft">
                        <a className="mr-4 text-pink-500 hover:underline">
                            Sell NFT
                        </a>
                    </Link>
                    <Link href="my-nfts">
                        <a className="mr-4 text-pink-500 hover:underline">
                            My Collection
                        </a>
                    </Link>
                    <Link href="creator-dashboard">
                        <a className="mr-4 text-pink-500 hover:underline">
                            Dashboard
                        </a>
                    </Link>
                </div>
            </nav>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
