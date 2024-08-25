// import React, { useState } from 'react';
// // import Section from './Section';
// import Skills from './Skills';
// // import HorizontalMenu from './HorizontalMenu';

// // Define the possible section keys as a union of string literals
// type SectionKey = 'experience' | 'education' | 'projects' | 'skills' | 'about';

// interface SectionContent {
//   title: string;
//   content: JSX.Element;
// }

// const Cv = () => {
//   const [activeSection, setActiveSection] = useState<SectionKey>('experience');

//   const sections: Record<SectionKey, SectionContent> = {
//     experience: {
//       title: 'Work Experience',
//       content: (
//         <ul>
//           <li>Job 1 - Description</li>
//           <li>Job 2 - Description</li>
//         </ul>
//       ),
//     },
//     education: {
//       title: 'Education',
//       content: (
//         <ul>
//           <li>Degree 1 - University, Year</li>
//           <li>Degree 2 - University, Year</li>
//         </ul>
//       ),
//     },
//     projects: {
//       title: 'Projects',
//       content: (
//         <ul>
//           <li>Project 1 - Description</li>
//           <li>Project 2 - Description</li>
//         </ul>
//       ),
//     },
//     skills: {
//       title: 'Skills',
//       content: <Skills />,
//     },
//     about: {
//       title: 'About Me',
//       content: <div>More about me...</div>,  // Placeholder for actual About Me content
//     },
//   };

//   return (
//     <div className="cv">
//       <HorizontalMenu setActiveSection={setActiveSection} />
//       <Section 
//         title={sections[activeSection].title} 
//         content={sections[activeSection].content} 
//       />
//     </div>
//   );
// };

// export default Cv;
