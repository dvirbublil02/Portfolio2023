
import { Container ,Card} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import crypImage from '../assets/cryp.png';


export const Crypt =() =>{

      return (
        <Container style={{ backgroundColor: '#66d9ff',borderRadius: '8px' }} className="py-5 d-flex align-items-center justify-content-center">
          <Card style={{ maxWidth: '500px' }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">Crypt Project</Card.Title>
          <Card.Text className="text-center">
          An application for secure access to database on two levels: to read and to edit (not using a real database).
          </Card.Text>
          <hr />
          <h5 className="text-center my-3">A short flow:</h5>
          <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
              <img
                alt="Crypt Project"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                }}
                src={crypImage} // Replace with the path to your photo
              />
            </div>
          <hr />
          <h5 className="text-center my-3">Tools and Software:</h5>
          <p className="text-center">Python with external libraries. algorithms that we used: ECDSA, Mceliece, Salsa20</p>
          <hr />
          <h5 className="text-center my-3">Code:</h5>
          <p className="text-center">
            <div className="social-icons">
    
                    <a href="https://github.com/dvirbublil02/CryptProject.git" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
            </div>
          </p>
        </Card.Body>
      </Card>
            
        </Container>
    );
};