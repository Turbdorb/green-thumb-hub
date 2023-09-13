import Carousel from 'react-multi-carousel';
import headerImg from "../Banner/header-img.svg";

export const Reminder = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="reminder" id="reminder">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="reminder-bx wow zoomIn">
                        <h2>Reminder</h2>
                        <p>The following plants need water soon <br></br> Progress of water for each plant.</p>
                        <Carousel responsive={responsive} infinite={true} className="Reminders">
                            <div className="item">
                                <h5>Plant 1</h5>
                            </div>
                            <div className="item">
                                <h5>Plant 2</h5>
                            </div>
                            <div className="item">
                                <h5>Plant 3</h5>
                            </div>
                            <div className="item">
                                <h5>Plant 4</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={headerImg} alt="Image" />
    </section>
  )
}
