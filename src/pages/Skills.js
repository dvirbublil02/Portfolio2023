import { Container, Row, Col, Card} from "react-bootstrap";
import { useSpring, animated } from 'react-spring';

export const Skills =() =>{
  const skillsData = [
    { skill: 'HTML', description: 'Building the structure of web pages.' },
    { skill: 'CSS,Bootstrape', description: 'Styling the layout and appearance of web pages.' },
    { skill: 'Java', description: 'Proficient in Java, leveraging its versatility to develop robust and scalable applications for various platforms.' },
    { skill: 'React', description: 'Building user interfaces and single-page applications.' },
    { skill: 'C', description: 'Strong command of C programming, adept at low-level system programming, including memory allocations , lists, structs,and more.'},
    { skill: 'MySQL', description: 'Skilled in MySQL, designing and managing relational databases for data storage and retrieval.'},
    { skill: 'Assembly', description: 'Proficient in Assembly Language, capable of low-level programming.'},
    { skill: 'JavaFX', description: 'Experienced in JavaFX, crafting modern and visually appealing desktop applications with rich user interfaces.'},
    { skill: 'Scene Builder', description: 'Proficient in Scene Builder, streamlining JavaFX development by visually designing intuitive user interfaces.'},
    { skill: 'VS,VP,Git,xinu,dos', description:'Proficiency in these environments/tools.'},
  ];

  const cardColors = ['#FF6B6B', '#48C9B0', '#6A89CC', '#FFD166'];

  const AnimatedCard = animated(Card);

  const animatedStyles = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 }, // Adjust the duration as needed
  });

  return (
    <Container style={{ backgroundColor: '#66d9ff',borderRadius: '8px' }} className="py-5">
      <Row className="text-center">
        <Col>
          <h2 className="text-black">My Skills</h2>
        </Col>
      </Row>
      <Row className="mt-4">
        {skillsData.map((skill, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="mb-4">
            <AnimatedCard
              style={{
                ...animatedStyles,
                backgroundColor: `rgba(${hexToRgb(cardColors[index % cardColors.length])}, 0.8)`,
                color: '#000',
              }}
            >
              <Card.Body>
                <Card.Title className="text-center">{skill.skill}</Card.Title>
                <Card.Text>{skill.description}</Card.Text>
              </Card.Body>
            </AnimatedCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

// Function to convert hex color to RGB
const hexToRgb = (hex) => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
};