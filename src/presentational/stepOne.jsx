import React, {Component} from 'react';

class StepOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      privKey: '',
      pubKey: ''
    };
    this.change = this.change.bind(this);
    this.scrollEnter = this.scrollEnter.bind(this);
  }

  change(event) {
    let newState = {
      privKey: event.target.value
    };
    this.props.onStateChange(newState);
  }

  scrollEnter(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $("#StepTwo").offset().top - 60
    }, 2000);
  }
  render() {
    return (
      <section id="StepOne">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="box text-center grey vert-center">
                <div className="row">
                  <div className="col-md-12">

                    <h1>Learn The Block Chain!</h1>
                    <h2>Enter a
                      <i>&nbsp;Secret&nbsp;</i>
                      Key and hit
                    </h2>
                    <h1 className="hvr-hang">ENTER</h1>
                  </div>
                  <div className="col-md-12">
                    <form onSubmit={this.scrollEnter}>
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <label className="mdl-textfield__label" htmlFor="sample1">
                          <span className="red">const</span>
                          &nbsp;privateKey
                          <span className="yellow">=</span>
                        </label>
                        <input className="mdl-textfield__input" type="text" onChange={this.change} value={this.props.privKey}/>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default StepOne;
