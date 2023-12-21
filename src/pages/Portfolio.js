
import { Container ,Card} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const Portfolio =() =>{

      return (
        <Container style={{ backgroundColor: '#66d9ff',borderRadius: '8px' }} className="py-5 d-flex align-items-center justify-content-center">
          <Card style={{ maxWidth: '500px' }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">My Portfolio project</Card.Title>
          <Card.Text className="text-center">
          Collection of my work, projects, skills, and resume.
          </Card.Text>
          <hr />
          <h5 className="text-center my-3">A Short Video about the Project</h5>
            <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
              <iframe
                title="Zerli Project Video"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                }}
                src="https://www.youtube.com/embed/_jvd-XZw5og?mute=1"
                allowFullScreen 
              />
            </div>
          <hr />
          <h5 className="text-center my-3">Tools and Software:</h5>
          <p className="text-center">React,bootstrap framework,react-fontawesome,formspree framework </p>
          <hr />
          <h5 className="text-center my-3">Code Review:</h5>
          <p className="text-center">
            <div className="social-icons">
    
                    <a href="https://github.com/dvirbublil02/Portfolio2023" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
            </div>
          </p>
        </Card.Body>
      </Card>
            
        </Container>
    );
};