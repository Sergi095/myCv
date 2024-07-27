import './Cv.css';

const Cv = () => {
    const handleDownload = () => {
        // Replace with the path to your actual PDF file
        const link = document.createElement('a');
        link.href = '/assets/SergioCV.pdf';
        link.download = 'SAGutierrezMaury.pdf';
        link.click();
    };

    return (
        <div className="cv-container">
            <aside className="cv-sidebar">
                <div className="cv-profile">
                    <h1 className="cv-name">Sergio Alejandro Gutierrez Maury</h1>
                    <p className="cv-title">Research Support & Software Development | Msc AI @ Vu Amsterdam</p>
                    <div className="cv-contact">
                        <p>Email: <a href="mailto:s.a.gutierrezmaury@gmail.com">s.a.gutierrezmaury@gmail.com</a></p>
                        <p>Phone: <a href="tel:+31685181133">+31 685181133</a></p>
                    </div>
                    <div className="cv-section">
                        <h2 className="cv-section-title">About Me</h2>
                        <p>I am an AI enthusiast pursuing an MSc in Artificial Intelligence at Vrije Universiteit Amsterdam. With a background in Economics from Universiteit van Amsterdam, I enjoy learning new things and applying my skills to real-world problems. My experience ranges from research support and software development to data analysis and product management. I am passionate about innovation and making a difference through technology.</p>
                    </div>
                    <div className="cv-section">
                        <h2 className="cv-section-title">Skills</h2>
                        <div className="cv-subsection">
                            <h3 className="cv-subsection-title">Knowledge</h3>
                            <p>Machine Learning, Data Science, Deep Learning, Evolutionary Algorithms</p>
                        </div>
                        <div className="cv-subsection">
                            <h3 className="cv-subsection-title">Software</h3>
                            <p>Python, Stata, R, LaTeX, SQL, Tableau, Excel, Qualtrics, Git, Javascript, Typescript, Linux, React</p>
                        </div>
                        <div className="cv-subsection">
                            <h3 className="cv-subsection-title">Languages</h3>
                            <p>Spanish, English, Dutch, Papiamento</p>
                        </div>
                    </div>
                </div>
                <div className="cv-social">
                <a href="https://linkedin.com/in/sergiogutierrezmaury" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/LI-In-Bug.png" alt="LinkedIn" style={{ verticalAlign: 'middle', marginRight: '5px' }} />
                    LinkedIn   
                </a>
                <a href="https://github.com/Sergi095" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/GitHub_logo.png" alt="GitHub" style={{ verticalAlign: 'middle', marginRight: '5px' }} />
                    GitHub
                </a>
                <button onClick={handleDownload} className="cv-download-button">
                    Download CV
                </button>
                </div>
            </aside>
            <main className="cv-main">
                <section className="cv-section">
                    <h2 className="cv-section-title">Work Experience</h2>
                    <div className="cv-card">
                        <h3 className="cv-card-title">Vrije Universiteit Amsterdam</h3>
                        <p className="cv-card-details">Student Assistant | Research Support & Software Development, Amsterdam, The Netherlands (02/2023 – present)</p>
                        <ul className="cv-card-list">
                            <li>In my role as a Student Assistant focusing on Research Software Development, I work closely with psychology researchers to bring their experiments to life. Whether it's building custom software or managing servers for online and lab-based experiments, I am one of the go-to person for making sure everything runs smoothly.</li>
                        </ul>
                    </div>
                    <div className="cv-card">
                        <h3 className="cv-card-title">Agurotech B.V</h3>
                        <p className="cv-card-details">Data Analyst Internship, Amsterdam, The Netherlands (02/2022 – 06/2022)</p>
                        <ul className="cv-card-list">
                            <li>During my internship at Agurotech, I was responsible for developing a Minimum Viable Product (MVP) for detecting diseases in crops. The goal was to assist farmers by providing a warning on when to apply pesticides to prevent further crop damage. This project was based on research and modeling from academic papers, which I utilized to develop the MVP.</li>
                            <li>In addition to developing the MVP, I also contributed to improving the main model of the company in predictive soil moisture. Specifically, I developed an additional feature for the model.</li>
                        </ul>
                    </div>
                    <div className="cv-card">
                        <h3 className="cv-card-title">European Toiletry Brokers (ETB) B.V</h3>
                        <p className="cv-card-details">Data Product Assistant, Amsterdam, The Netherlands (05/2021 – 10/2021)</p>
                        <ul className="cv-card-list">
                            <li>As a Data Product Assistant at ETB, I was responsible for ensuring that all product data was accurately maintained in the system (SAP), while also identifying and highlighting any inaccuracies, and improving data quality.</li>
                            <li>In addition to maintaining the product data, I also prepared detailed reports on the sales performance of each product for the management.</li>
                        </ul>
                    </div>
                </section>
                <section className="cv-section">
                    <h2 className="cv-section-title">Education</h2>
                    <div className="cv-card">
                        <h3 className="cv-card-title">Vrije Universiteit Amsterdam</h3>
                        <p className="cv-card-details">MSc. Artificial Intelligence, Amsterdam, The Netherlands (09/2021 – 08/2024)</p>
                        <ul className="cv-card-list">
                            <li>Specialization Track: Artificial Intelligence</li>
                            <li>Elective AI Courses at Universiteit van Amsterdam</li>
                            <li><a href="https://sergi095.pythonanywhere.com/0" target="_blank" rel="noopener noreferrer">Thesis: Sensory Heterogeneous Predator Swarm vs Fully Sensing Prey Swarm</a></li>

                        </ul>
                    </div>
                    <div className="cv-card">
                        <h3 className="cv-card-title">Universiteit Van Amsterdam</h3>
                        <p className="cv-card-details">BSc. Economics and Business Economics, Amsterdam, The Netherlands (09/2017 – 06/2021)</p>
                        <ul className="cv-card-list">
                            <li>Major: Economics</li>
                            <li>Final Thesis: Beliefs About Climate Change: Measuring People's Accuracy of CO₂ Emissions of the Products They Consume More Often and Their Willingness to Change</li>
                            <li>Thesis grade: 8/10</li>
                            <li><a href="https://www.uva.nl/en/programmes/minors/amsterdam-data-science-minor/amsterdam-data-science-and-artificial-intelligence.html" target="_blank" rel="noopener noreferrer">Minor: Data Science and Artificial Intelligence</a></li>
                        </ul>
                    </div>
                </section>
                <section className="cv-section">
                    <h2 className="cv-section-title">Projects</h2>
                    <div className="cv-card">
                        <h3 className="cv-card-title">Hoe Zeg Jij Iets Met</h3>
                        <p className="cv-card-details">Work in Progress Psychology Study, Vrije Universiteit Amsterdam (2024)</p>
                        <ul className="cv-card-list">
                            <li>I collaborate closely with psychology researchers to develop and maintain an online experiment available at <a href="http://hoezegjijietsmet.nl" target="_blank" rel="noopener noreferrer">hoezegjijietsmet.nl</a>.</li>
                        </ul>
                    </div>
                    <div className="cv-card">
                        <h3 className="cv-card-title">Miscellaneous Projects at University</h3>
                        <p className="cv-card-details">Part of Course Assignments, Vrije Universiteit Amsterdam (2021-2024)</p>
                        <ul className="cv-card-list">
                            <li>During my MSc in Artificial Intelligence, I undertook various projects as part of my assignments. These projects included working with neural networks, developing reinforcement learning algorithms, and designing and conducting experiments involving robots for social AI applications.</li>
                        </ul>
                    </div>
                </section>
                <section className="cv-section cv-hobbies">
                    <h2 className="cv-section-title">Hobbies</h2>
                    <p className="cv-card-details">Wushu (Chinese Martial Arts), Music Guitar Playing</p>
                </section>
            </main>
        </div>
    );
}

export default Cv;
