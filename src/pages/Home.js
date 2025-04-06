import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ButtonGroup,
  Collapse,
  Modal,
} from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";

const productData = [
  {
    id: 1,
    name: "Luxury Boat",
    category: "Boat",
    image: "/assest/home.jpg",
    price: "$120,000",
    description: "Experience the ocean in style.",
    details: "Made for ocean adventures. GPS, radar, luxury cabin and full service warranty included.",
  },
  {
    id: 2,
    name: "Electric Scooter",
    category: "Electric Scooter",
    image: "/assest/bike1.jpg",
    price: "$1,200",
    description: "Eco-friendly city commuting.",
    details: "Top speed 30 km/h. Long-lasting battery. Lightweight frame. Great for urban rides.",
  },
  {
    id: 3,
    name: "Mobile Home",
    category: "Mobile Home",
    image: "/assest/home.jpg",
    interiorImages: [
      "/assest/inside1.jpg",
      "/assest/inside2.jpg",
      "/assest/inside3.jpg",
      "/assest/inside4.jpg",
      "/assest/inside5.jpg",
      "/assest/inside6.jpg",
      "/assest/inside7.jpg",
    ],
    price: "$80,000",
    description: "Home on the move.",
    details: "Spacious, with kitchen, bathroom and solar panels. Move-in ready.",
  },
  {
    id: 4,
    name: "Private Helicopter",
    category: "Helicopter",
    image: "/images/helicopter.jpg",
    price: "$500,000",
    description: "Fly anywhere in style.",
    details: "Seats 4, autopilot system, luxury leather seats, and advanced navigation.",
  },
  {
    id: 5,
    name: "Luxury Car",
    category: "Car",
    image: "/assest/car1.jpg",
    price: "$60,000",
    description: "Comfort and performance.",
    details: "V8 engine, automatic transmission, leather interior, sunroof.",
  },
  {
    id: 6,
    name: "Security Gun",
    category: "Gun",
    image: "/images/gun.jpg",
    price: "$3,000",
    description: "Licensed for security only.",
    details: "Legal firearm with full documentation. Only sold to authorized security personnel.",
  },
  {
    id: 7,
    name: "Mobile Home Deluxe",
    category: "Mobile Home",
    image: "/assest/home1.jpg",
    interiorImages: [
      "/assest/inside1.jpg",
      "/assest/inside2.jpg",
      "/assest/inside3.jpg",
      "/assest/inside4.jpg",
      "/assest/inside5.jpg",
      "/assest/inside6.jpg",
      "/assest/inside7.jpg",
    ],
    price: "$90,000",
    description: "Deluxe mobile home with modern style.",
    details: "Lounge space, modular kitchen, and smart bathroom.",
  },
  {
    id: 8,
    name: "Mobile Home Compact",
    category: "Mobile Home",
    image: "/assest/home2.jpg",
    interiorImages: [
      "/assest/inside1.jpg",
      "/assest/inside2.jpg",
      "/assest/inside3.jpg",
      "/assest/inside4.jpg",
      "/assest/inside5.jpg",
      "/assest/inside6.jpg",
      "/assest/inside7.jpg",
    ],
    price: "$70,000",
    description: "Compact, efficient, and lightweight.",
    details: "Perfect for travel with foldable furniture and solar-powered AC.",
  },
  {
    id: 9,
    name: "Mobile Home Premium",
    category: "Mobile Home",
    image: "/assest/home3.jpg",
    interiorImages: [
      "/assest/inside1.jpg",
      "/assest/inside2.jpg",
      "/assest/inside3.jpg",
      "/assest/inside4.jpg",
      "/assest/inside5.jpg",
      "/assest/inside6.jpg",
      "/assest/inside7.jpg",
    ],
    price: "$95,000",
    description: "Luxury features with complete comfort.",
    details: "Double bedroom, high-end kitchen, bathroom, Wi-Fi, and more.",
  },
  {
    id: 10,
    name: "Luxury Car",
    category: "Car",
    image: "/assest/car2.jpg",
    price: "$60,000",
    description: "Comfort and performance.",
    details: "V8 engine, automatic transmission, leather interior, sunroof.",
  },
  {
    id: 11,
    name: "Luxury Car",
    category: "Car",
    image: "/assest/car3.jpg",
    price: "$60,000",
    description: "Comfort and performance.",
    details: "V8 engine, automatic transmission, leather interior, sunroof.",
  },
  {
    id: 12,
    name: "Luxury Car",
    category: "Car",
    image: "/assest/car4.jpg",
    price: "$60,000",
    description: "Comfort and performance.",
    details: "V8 engine, automatic transmission, leather interior, sunroof.",
  },
  {
    id: 13,
    name: "Luxury Car",
    category: "Car",
    image: "/assest/car5.jpg",
    price: "$60,000",
    description: "Comfort and performance.",
    details: "V8 engine, automatic transmission, leather interior, sunroof.",
  },
  {
    id: 14,
    name: "Luxury Car",
    category: "Car",
    image: "/assest/car6.jpg",
    price: "$60,000",
    description: "Comfort and performance.",
    details: "V8 engine, automatic transmission, leather interior, sunroof.",
  },
  {
    id: 15,
    name: "Luxury Car",
    category: "Car",
    image: "/assest/car7.jpg",
    price: "$60,000",
    description: "Comfort and performance.",
    details: "V8 engine, automatic transmission, leather interior, sunroof.",
  },
  {
    id: 16,
    name: "Electric Scooter",
    category: "Electric Scooter",
    image: "/assest/bike2.jpg",
    price: "$1,200",
    description: "Eco-friendly city commuting.",
    details: "Top speed 30 km/h. Long-lasting battery. Lightweight frame. Great for urban rides.",
  },
  {
    id: 17,
    name: "Electric Scooter",
    category: "Electric Scooter",
    image: "/assest/bike3.jpg",
    price: "$1,200",
    description: "Eco-friendly city commuting.",
    details: "Top speed 30 km/h. Long-lasting battery. Lightweight frame. Great for urban rides.",
  },
  {
    id: 18,
    name: "Electric Scooter",
    category: "Electric Scooter",
    image: "/assest/bike4.jpg",
    price: "$1,200",
    description: "Eco-friendly city commuting.",
    details: "Top speed 30 km/h. Long-lasting battery. Lightweight frame. Great for urban rides.",
  },
  {
    id: 19,
    name: "Electric Scooter",
    category: "Electric Scooter",
    image: "/assest/bike5.jpg",
    price: "$1,200",
    description: "Eco-friendly city commuting.",
    details: "Top speed 30 km/h. Long-lasting battery. Lightweight frame. Great for urban rides.",
  },
  {
    id: 20,
    name: "Electric Scooter",
    category: "Electric Scooter",
    image: "/assest/bike6.jpg",
    price: "$1,200",
    description: "Eco-friendly city commuting.",
    details: "Top speed 30 km/h. Long-lasting battery. Lightweight frame. Great for urban rides.",
  },
  {
    id: 21,
    name: "Electric Scooter",
    category: "Electric Scooter",
    image: "/assest/bike7.jpg",
    price: "$1,200",
    description: "Eco-friendly city commuting.",
    details: "Top speed 30 km/h. Long-lasting battery. Lightweight frame. Great for urban rides.",
  },
  {
    id: 22,
    name: "Electric Scooter",
    category: "Electric Scooter",
    image: "/assest/bike8.jpg",
    price: "$1,200",
    description: "Eco-friendly city commuting.",
    details: "Top speed 30 km/h. Long-lasting battery. Lightweight frame. Great for urban rides.",
  },
];



const categories = [
  "All",
  "Boat",
  "Car",
  "Electric Scooter",
  "Gun",
  "Mobile Home",
  "Helicopter",
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openProductId, setOpenProductId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // To track the image index in full screen

  const filteredProducts =
    selectedCategory === "All"
      ? productData
      : productData.filter((p) => p.category === selectedCategory);

  const toggleDetails = (id) => {
    setOpenProductId(openProductId === id ? null : id);
  };

  const handleModalOpen = (product) => {
    setCurrentProduct(product);
    setCurrentImageIndex(0); // Reset to the first image
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setCurrentProduct(null);
  };

  const nextImage = () => {
    if (currentProduct && currentProduct.interiorImages) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === currentProduct.interiorImages.length - 1
          ? 0
          : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (currentProduct && currentProduct.interiorImages) {
      setCurrentImageIndex(
        currentImageIndex === 0
          ? currentProduct.interiorImages.length - 1
          : currentImageIndex - 1
      );
    }
  };

  return (
    <Container className="my-5" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <h2 className="text-center mb-4">Our Items</h2>

      {/* Category Buttons */}
      <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
        <ButtonGroup className="category-buttons">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "warning" : "outline-warning"}
              onClick={() => setSelectedCategory(cat)}
              className="category-btn"
            >
              {cat}
            </Button>
          ))}
        </ButtonGroup>
      </div>

      {/* Product Cards */}
      <Row>
        {filteredProducts.map((product) => (
          <Col xs={12} sm={6} md={4} lg={3} className="mb-4" key={product.id}>
            <Card className="shadow-lg h-100 custom-card">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text className="fw-bold">{product.price}</Card.Text>

                <Button
                  variant="success"
                  className="me-2 mb-2 w-100"
                  href={`https://wa.me/1234567890?text=Hi, I'm interested in the ${product.name}`}
                  target="_blank"
                >
                  <FaWhatsapp className="me-2" />
                  Chat to Buy
                </Button>

                <Button
                  variant="outline-warning"
                  className="mb-2 w-100 custom-hover"
                  href={`https://yourstore.com/buy/${product.id}`} // Replace this with your actual buy link
                  target="_blank"
                >
                  Buy Now
                </Button>

                <Button
                  variant="outline-warning"
                  onClick={() => handleModalOpen(product)}
                  className="mb-2 w-100 custom-hover"
                >
                  More Info
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Fullscreen Image Modal */}
      <Modal
        show={showModal}
        onHide={handleModalClose}
        size="lg"
        centered
        aria-labelledby="example-custom-modal-styling-title"
        fullscreen={true} // Make the modal fullscreen
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {currentProduct?.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {currentProduct?.interiorImages && (
            <div className="fullscreen-image-container">
              <img
                src={currentProduct.interiorImages[currentImageIndex]}
                alt={`Interior of ${currentProduct.name}`}
                className="fullscreen-image"
                style={{
                  width: "100%",
                  maxHeight: "80vh", // Ensure image fits in screen
                  objectFit: "contain",
                }}
              />
              <div className="image-navigation">
                <Button
                  variant="light"
                  onClick={prevImage}
                  className="image-nav-btn"
                  style={{
                    position: "absolute",
                    left: "20px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  &lt; {/* Left Arrow */}
                </Button>
                <Button
                  variant="light"
                  onClick={nextImage}
                  className="image-nav-btn"
                  style={{
                    position: "absolute",
                    right: "20px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  &gt; {/* Right Arrow */}
                </Button>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>

      {/* Custom Styles */}
      <style>
        {`
          .category-btn {
            font-size: 14px;
            padding: 8px 12px;
            width: 20%;
            transition: all 0.3s ease;
          }

          .category-buttons {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }

          .category-btn:hover {
            background-color: #ffc107;
            color: #09122c;
          }

          .fullscreen-image-container {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            max-height: 80vh;
          }

          .fullscreen-image {
            max-width: 100%;
            object-fit: contain;
          }

          .image-navigation .image-nav-btn {
            font-size: 2rem;
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
          }

          @media (max-width: 767px) {
            .fullscreen-image {
              height: auto;
            }
          }
        `}
      </style>
    </Container>
  );
};

export default Products;
