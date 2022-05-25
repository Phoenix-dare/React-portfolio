import React from 'react';
import { motion } from 'framer-motion';
const zoomIn = {
	increase: {
		opacity: 0
	}
};

function Projects() {
	return (
		<div id="works" className="projects">
			<h1>My recent Projects</h1>

			<motion.div
				initial={{ scale: 0.5 }}
				animate={{ scale: 1 }}
				transition={{ easein: [0.17, 0.67, 0.83, 0.67] }}
				className="project_container"
			>
				<h4>Youtube Clone</h4>
				<img className="img_thumbnail" src="/Youtube clone.png" />
				<span>
					<button
						className="btn btn-dark"
						onClick={e => {
							e.preventDefault();
							window.location.href = 'https://yt-clone-delta.vercel.app/';
						}}
					>
						View Live
					</button>
					<button
						className="btn btn-dark"
						onClick={e => {
							e.preventDefault();
							window.location.href = 'https://github.com/Phoenix-dare/YtClone';
						}}
					>
						View Code
					</button>
				</span>
				<div className="tools_container">
					<div className="tools">React.js </div>
					<div className="tools">HTML</div>
					<div className="tools">CSS</div>
					<div className="tools">Youtube Data API</div>
					<div className="tools">MaterialUI Icons</div>
				</div>
			</motion.div>
			<motion.div
				initial={{ scale: 0.5 }}
				animate={{ scale: 1 }}
				transition={{ easein: [0.42, 0.0, 1.0, 1.0] }}
				className="project_container"
			>
				<h4>Simple Mindfulness App</h4>
				<img className="img_thumbnail" src="/Mindfull.png" />
				<span>
					<button
						className="btn btn-dark"
						onClick={e => {
							e.preventDefault();
							window.location.href =
								'https://phoenix-dare.github.io/Mindfulness/';
						}}
					>
						View Live
					</button>
					<button
						className="btn btn-dark"
						onClick={e => {
							e.preventDefault();
							window.location.href =
								'https://github.com/Phoenix-dare/Mindfulness';
						}}
					>
						View Code
					</button>
				</span>
				<div className="tools_container">
					<div className="tools">HTML</div>
					<div className="tools">CSS</div>
					<div className="tools">Javascript</div>
					</div>
			</motion.div>
      
			<motion.div
				initial={{ scale: 0.5 }}
				animate={{ scale: 1 }}
				transition={{ easein: [0.42, 0.0, 1.0, 1.0] }}
				className="project_container">
				<h4>Drum Machine</h4>
				<img className="img_thumbnail" src="/DrumMachine.png" />
				<span>
					<button
						className="btn btn-dark"
						onClick={e => {
							e.preventDefault();
							window.location.href = 'https://drum-machine-fawn.vercel.app/';
						}}
					>
						View Live
					</button>
					<button
						className="btn btn-dark"
						onClick={e => {
							e.preventDefault();
							window.location.href =
								'https://github.com/Phoenix-dare/Drum-Machine';
						}}
					>
						View Code
					</button>
				</span>
				<div className="tools_container">
					<div className="tools">React.js </div>
					<div className="tools">HTML </div>
					<div className="tools">CSS </div>
          </div>
        </motion.div>      
			<motion.div
				initial={{ scale: 0.5 }}
				animate={{ scale: 1 }}
				transition={{ easein: [0.42, 0.0, 1.0, 1.0] }}
				className="project_container"
			>
				<h4>Markdown Previewer </h4>
				<img className="img_thumbnail" src="/Markdown.png" />
				<span>
					<button
						className="btn btn-dark"
						type="button"
						onClick={e => {
							e.preventDefault();
							window.location.href =
								'https://markdown-previewer-rho.vercel.app/';
						}}
					>
						View Live
					</button>
					<button
						className="btn btn-dark"
						onClick={e => {
							e.preventDefault();
							window.location.href =
								'https://github.com/Phoenix-dare/Markdown-Previewer';
						}}
					>
						View Code
					</button>
				</span>
				<div className="tools_container">
					<div className="tools">React.js </div>
					<div className="tools">HTML</div>
					<div className="tools">CSS</div>
				</div>	
			</motion.div>
			<motion.div
				initial={{ scale: 0.5 }}
				animate={{ scale: 1 }}
				transition={{ easein: [0.42, 0.0, 1.0, 1.0] }}
				className="project_container"
			>
				<h4>To Do App</h4>
				<img className="img_thumbnail" src="/To do.png" />
				<span>
					<button
						className="btn btn-dark"
						onClick={e => {
							e.preventDefault();
							window.location.href = 'https://phoenix-dare.github.io/To_do-/';
						}}
					>
						View Live
					</button>
					<button
						className="btn btn-dark"
						onClick={e => {
							e.preventDefault();
							window.location.href = 'https://github.com/Phoenix-dare/To_do-';
						}}
					>
						View Code
					</button>
				</span>
				<div className="tools_container">
					<div className="tools">HTML </div>
					<div className="tools">CSS </div>
					<div className="tools">Javascript</div>
					<div className="tools">Bootstrap</div>
				</div>
			</motion.div>
			<motion.div
				initial={{ scale: 0.5 }}
				animate={{ scale: 1 }}
				transition={{ easein: [0.42, 0.0, 1.0, 1.0] }}
				className="project_container"
			>
				<h4>Random Quotes</h4>
				<img className="img_thumbnail" src="Quotes.png" />
				<span>
					<button
						className="btn btn-dark"
						onClick={e => {
							e.preventDefault();
							window.location.href =
								'https://random-quote-machine-lilac.vercel.app/';
						}}
					>
						View Live
					</button>
					<button
						className="btn btn-dark"
						onClick={e => {
							e.preventDefault();
							window.location.href =
								'https://github.com/Phoenix-dare/RandomQuoteMachine';
						}}
					>
						View Code
					</button>
				</span>
				<div className="tools_container">
					<div className="tools">React.js</div>
					<div className="tools">HTML</div>
					<div className="tools">CSS</div>
					<div className="tools">Quotable API</div>
				</div>
			</motion.div>

			<footer>
				And finally
				<span className="this">this.portfolio;</span>
			</footer>
		</div>
	);
}
export default Projects;
