import { Button, Card, Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faBookmark } from '@fortawesome/free-solid-svg-icons'
import './App.css'

function post(props) {

return (
    <>
        <Card className='mt-1' style={{ width: '100%',height: '100%' }}>
            <Card.Img variant="top"  src="https://preview.thenewsmarket.com/Previews/ADID/StillAssets/1920x1080/596049.jpg" />
            <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {props.desp}
            </Card.Text>
            <Stack  direction="horizontal">
                <Button className='px-4' variant="primary"><FontAwesomeIcon icon={faCartShopping} /> buy</Button>
                <Button variant="outline-danger ms-auto"><FontAwesomeIcon icon={faBookmark} /></Button>
            </Stack>
            </Card.Body>
        </Card>
    </>
)
}

export default post
