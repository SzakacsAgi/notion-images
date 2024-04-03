function App() {
  const importAll = (r) => {
    let images = {};
    // eslint-disable-next-line array-callback-return
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  };
  const images = importAll(require.context('./assets', false, /\.(png|jpe?g|svg)$/));
  return <>
    <section id="gallery">
      <div className="gallery-container container">
        <div className="tz-gallery">
          <div className="row">
            {Object.entries(images).map((image, index) => {
              return <>
                <div data-aos="flip-up" data-aos-delay={index*20} className="col-sm-6 col-md-4">
                  <div className="thumbnail">
                    <a className="lightbox" href={image[0]}>
                      <img alt={image.toString()} src={`${window.location.origin}${image[1]}`}
                           style={{width: "300px", height: "300px"}}/>
                    </a>
                  </div>
                </div>
              </>
            })}
          </div>
        </div>
      </div>
    </section>
  </>

}

export default App;
