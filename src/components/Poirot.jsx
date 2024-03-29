import poirot from "../assets/poirot.svg";
import megportrait2 from "../assets/megportrait2.png";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
const Hero = () => {
	return (
		<section className="bg-indigo-100 py-24  ">
			<div className=" mx-auto max-w-7xl  px-8  grid  md:grid-cols-2 items-center gap-8">
				<article>
					<h1 className="text-7xl font-bold tracking-wider">Meg Sharma</h1>
					<p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
						Software Engineer
					</p>
					<p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
						Data-driven, software-based healthcare solutions
					</p>
					<div className="flex gap-x-4 mt-4">
						<a href="#">
							<FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
						</a>
						<a href="https://www.linkedin.com/in/meg21/">
							<FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
						</a>
						<a href="#">
							<FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
						</a>
						<a href="#">
							<FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
						</a>
					</div>
				</article>

				<article className="hidden md:block ">
					{/*<img src={poirot} className="h-80 lg:h-96" /> */}
					<img src={megportrait2} />
				</article>
			</div>
		</section>
	);
};
export default Hero;
