import { Container ,Card} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const Minesweeper =() =>{
  return (
    <Container style={{ backgroundColor: '#66d9ff',borderRadius: '8px' }} className="py-5 d-flex align-items-center justify-content-center">
      <Card style={{ maxWidth: '500px' }}>
    <Card.Body>
      <Card.Title className="text-center mb-4">Minesweeper game</Card.Title>
      <Card.Text className="text-center">
      simple implementation of the famous game.
      </Card.Text>
      <hr />
      <h5 className="text-center my-3">A Short Video about the game:</h5>
            <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
              <iframe
                title="Mines Project Video"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                }}
                src="https://www.youtube.com/embed/hLofXHRbecg?mute=1"
                allowFullScreen 
              />
            </div>
      <hr />
      <h5 className="text-center my-3">Tools and Software:</h5>
      <p className="text-center">Java, Javafx, Scanebuilder </p>
      <hr />
      <h5 className="text-center my-3">Code:</h5>
      <p className="text-center">
        <div className="social-icons">

                <a href="https://github.com/dvirbublil02/Mines.git" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
        </div>
      </p>
    </Card.Body>
  </Card>
        
    </Container>
   );
  };