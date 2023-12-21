
import { Container ,Card,Col,Row} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import outPut from '../assets/outPut.png';
import getMenu from '../assets/getMenu.png';
import createResturent from '../assets/createResturent.png';

export const Os =() =>{
  return (
    <Container style={{ backgroundColor: '#66d9ff', borderRadius: '8px' }} className="py-5 d-flex align-items-center justify-content-center">
    <Card style={{ maxWidth: '500px' }}>
      <Card.Body>
        <Card.Title className="text-center mb-4">Linux Operating System Project</Card.Title>
        <Card.Text className="text-center">
          Creating a Shell that supports existing Linux commands and, in addition, supports new restaurant management commands.
        </Card.Text>
        <hr />
        <h5 className="text-center my-3">A Short Flow (Example):</h5>
        <Row>
          <Col>
            <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
              <img
                alt="Project  1"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                }}
                src={outPut} 
              />
            </div>
          </Col>
          <Col>
            <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
              <img
                alt="Project  2"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                }}
                src={getMenu} 
              />
            </div>
          </Col>
          <Col>
            <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
              <img
                alt="Project 3"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                }}
                src={createResturent} 
              />
            </div>
          </Col>
        </Row>
        <hr />
        <h5 className="text-center my-3">Tools and Software:</h5>
        <p className="text-center">Linux OS, special commands, and the shell coded with C, text files.</p>
        <hr />
        <h5 className="text-center my-3">Code:</h5>
        <p className="text-center">
          <div className="social-icons">
            <a href="https://github.com/dvirbublil02/shellProject.git" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </p>
      </Card.Body>
    </Card>
  </Container>
    );
};