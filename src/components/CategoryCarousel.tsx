import {Carousel} from 'react-bootstrap';
function CategoryCarousel() {
  return (
    <>
        <h1>Categories</h1>
        <Carousel>
        <Carousel.Item>
            <img className="d-block w-100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Dosai_Chutney_Hotel_Saravana_Bhavan.jpg/1200px-Dosai_Chutney_Hotel_Saravana_Bhavan.jpg" alt="Slide 1" />
            {/* <ExampleCarouselImage text="First slide" /> */}
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            {/* <ExampleCarouselImage text="Second slide" /> */}
            <img className="d-block w-100" src="https://anits-sds.in/wp-content/uploads/2024/03/upma-dosa.jpg" alt="Slide 2" />
            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            {/* <ExampleCarouselImage text="Third slide" /> */}
            <img className="d-block w-100" src="https://i.ytimg.com/vi/MW3JZwjn8gY/maxresdefault.jpg" alt="Slide 3" />
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </>
  )
}

export default CategoryCarousel
