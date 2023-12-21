
import { Container ,Card} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';



export const RestManag =() =>{
  const handleVideoLoad = (event) => {
    
    event.target.playbackRate = 0.25;
  };
      return (
        <Container style={{ backgroundColor: '#66d9ff',borderRadius: '8px' }} className="py-5 d-flex align-items-center justify-content-center">
          <Card style={{ maxWidth: '500px' }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">Restaurant Managment Project</Card.Title>
          <Card.Text className="text-center">
          This program allows to read instructions from a text file, and a menu from another file. Then perform the orders that are read one by one from the file, and at the end create an output file with everything performed in order.
          </Card.Text>
          <hr />
          <h5 className="text-center my-3">A Short Video about the Project:</h5>
            <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
              <iframe
                title="Restaurant managmant Project Video"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                }}
                src="https://www.youtube.com/embed/1xi0wchF_jA?mute=1"
                allowFullScreen onLoadStart={handleVideoLoad}
              />
            </div>
          <hr />
          <h5 className="text-center my-3">Tools and Software:</h5>
          <p className="text-center"> C , txt files , implements linked-lists, structs, memory allocation</p>
          <hr />
          <h5 className="text-center my-3">Code:</h5>
          <p className="text-center">
            <div className="social-icons">
    
                    <a href="https://github.com/dvirbublil02/RestaurantManagement" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
            </div>
          </p>
        </Card.Body>
      </Card>
            
        </Container>
    );
};