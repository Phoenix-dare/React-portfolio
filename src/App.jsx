import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { motion } from "framer-motion";
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Contacts from './components/Contacts.jsx';
import Projects from './components/Projects.jsx';

function App() {
	return (
    
		<main>
			<Navbar />
      
			<div className="box">
				<About />
				<Projects />
				<Contacts />
			</div>
		</main>
	);
}

export default App;
