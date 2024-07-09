import styles from './ProjectsStyles.module.css';
import Blog from '../../assets/Blog.png';
import chatApp from '../../assets/chatApp.png';
import quiz from '../../assets/quiz.png';
import figma from '../../assets/figma.png';
import it from '../../assets/it.png';
import netflixClone from '../../assets/netflixClone.png';
import fashion from '../../assets/fashion.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Blog}
          link="https://github.com/jazmin420/mern-blog"
          h3="Blog App"
          p="Personal Blogging"
        />
        <ProjectCard
          src={chatApp}
          link="https://github.com/jazmin420/Chat-App"
          h3="Chat App"
          p="Chatting Rooms"
        />
        <ProjectCard
          src={quiz}
          link="https://github.com/jazmin420/quiz-app"
          h3="Quiz App"
          p="Answer to Questions"
        />
        <ProjectCard
          src={figma}
          link="https://github.com/jazmin420/figma-design"
          h3="Figma design"
          p="Static Web Page"
        />
        <ProjectCard
          src={it}
          link="https://github.com/jazmin420/parallax-website"
          h3="Parallax Website"
          p="Static Web Page"
        />
        <ProjectCard
          src={netflixClone}
          link="https://github.com/jazmin420/netflix-clone"
          h3="Netflix Clone"
          p="Website clone"
        />
        <ProjectCard
          src={fashion}
          link="https://github.com/jazmin420/responsive-website"
          h3="Fashion Website"
          p="responsive website"
        />
      </div>
    </section>
  );
}

export default Projects;
