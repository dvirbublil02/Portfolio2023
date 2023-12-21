
import { Container ,Card} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
export const Zerli =() =>{

      return (
        <Container style={{ backgroundColor: '#66d9ff',borderRadius: '8px' }} className="py-5 d-flex align-items-center justify-content-center">
          <Card style={{ maxWidth: '500px' }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">Zerli Project</Card.Title>
          <Card.Text className="text-center">
            Desktop system for a chain of flower shops, allowing a wide range of options for various users (staff and clients), A wide variety of options and screens for different users with different permissions.
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
                src="https://www.youtube.com/embed/j_Lf0r-lTxM?mute=1"
                allowFullScreen 
              />
            </div>
          <hr />
          <h5 className="text-center my-3">Tools and Software</h5>
          <p className="text-center">Java, JavaFX, CSS, OCSF framework, MySQL database, Mail framework, PDF builder, Scene Builder</p>
          <hr />
          <h5 className="text-center my-3">Code Review:</h5>
          <p className="text-center">
            <div className="social-icons">
    
                    <a href="https://github.com/dvirbublil02/ZerliProject" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
            </div>
          </p>
        </Card.Body>
      </Card>
            
        </Container>
    );
};