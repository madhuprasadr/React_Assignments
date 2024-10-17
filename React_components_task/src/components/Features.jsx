import React from 'react';

function Features() {
  return (
    <section className="py-5" id="features">
      <div className="container">
        <h2 className="text-center">Features</h2>
        <div className="row">
          <div className="col-md-4">
            <h3>Fully Responsive</h3>
            <p>This theme will look great on any device, no matter the size!</p>
          </div>
          <div className="col-md-4">
            <h3>Bootstrap 5 Ready</h3>
            <p>Featuring the latest build of the new Bootstrap 5 framework!</p>
          </div>
          <div className="col-md-4">
            <h3>Easy to Use</h3>
            <p>Ready to use with your own content, or customize the source files!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
