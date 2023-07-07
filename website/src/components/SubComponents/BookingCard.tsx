import Card from "react-bootstrap/Card";

type CardTypeProps = {
  title: string;
  text: string;
  image: string;
};

const BookingCard: React.FC<CardTypeProps> = ({ title, text, image }) => {
  return (
    <Card className="booking-card">
      <Card.Img variant="top" src={image} className="card-img" />
      <Card.ImgOverlay className="card-img-overlay">
        <h5>{title}</h5>
        <p>{text}</p>
      </Card.ImgOverlay>
    </Card>
  );
};

export default BookingCard;
