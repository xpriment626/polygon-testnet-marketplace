import "../styles/globals.css";
import Link from "next/link";
import Particles from "react-tsparticles";

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <nav className="border-b p-6 bg-black">
                <Link href="/">
                    <p className="text-4xl text-white font-bold hover:cursor-pointer">
                        Meta Gallery
                    </p>
                </Link>
                <div className="flex justify-center mt-4">
                    <Link href="/">
                        <a className="mr-4 text-green-300 hover:underline">
                            Home
                        </a>
                    </Link>
                    <Link href="create-nft">
                        <a className="mr-4 text-green-300 hover:underline">
                            Sell NFT
                        </a>
                    </Link>
                    <Link href="my-nfts">
                        <a className="mr-4 text-green-300 hover:underline">
                            My Collection
                        </a>
                    </Link>
                    <Link href="creator-dashboard">
                        <a className="mr-4 text-green-300 hover:underline">
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
