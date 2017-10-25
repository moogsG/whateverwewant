import React, {Component} from 'react';
const SHA256 = require("crypto-js/sha256");



  class StepTwo extends Component {
    constructor(props) {
      super(props);

            this.state = {
              privKey: '',
              pubKey: '',
              message: '',
              picks: [],
              hash: ''
            };
      this.change = this.change.bind(this);
    }

    change(event) {
      let newState ={
        privKey: event.target.value
      };
      this.props.onStateChange(newState);
    }

    add(event){
      event.preventDefault();
      let pick = event.currentTarget.getAttribute('href');
      let index = this.props.picks.indexOf(pick);
      if(index === -1){
        let newState = {
          picks: this.props.picks.push(pick),
          hash: SHA256(this.props.picks.push(pick).toString()).toString()
        }
        this.props.onStateChange(newState);
      }else{
        let newState ={
          picks: this.props.picks.splice(index, 1),
          hash: SHA256(this.props.picks.splice(index, 1).toString()).toString()
        }
        this.props.onStateChange(newState);
      }
    }

    render() {
      return (
        <section id="StepTwo">
        <div className="container">
        <div data-aos="fade-up" data-aos-delay="1000">
        <div className="row">
        <div className="col-md-12 text-center">
        <div className="line"></div>
        <h1>Getting Started</h1>
        <div className="line"></div>
        </div>
        <div className="col-md-6">
        <h2>Great!  You created a Secret Key, or password!</h2>
        <h2>Look to the right and you will see that a Public Key, or username was created from your password.</h2>
        </div>
        <div className="col-md-6">
        <div className="box">
        <div className="row">
        <div className="col-md-12">
        <div className="input-group">
        <span className="input-group-addon" id="basic-addon3">Seceret Key</span>
        <input type="text" className="form-control" id="secretKey" aria-describedby="basic-addon3" onChange={ this.change } value={this.props.privKey}/>
        </div>
        <h2>(This is a HASH)</h2>
        <div className="input-group">
        <span className="input-group-addon" id="pubKeyLab">Public Key</span>
        <input type="text" className="form-control" id="pubKey" aria-describedby="pubKeyLab" value={this.props.pubKey}/>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="col-md-12">
        <div className="text-center">
        <h2>This is an example of what a 'block' looks like.  Take a look and use it as a reference as we continue.</h2>
        </div>
        <div className="block">
        <div className="row">
        <div className="col-md-12">
        <div className="block-header text-center">
        <span className="block-height float-left" data-toggle="tooltip" title="This is the number of the block.">Block Height<i className="material-icons">info</i></span>
        <h2>Block Hash<i className="material-icons">info</i></h2>
        <h4 data-toggle="tooltip" title={SHA256(this.state.picks.toString()).toString()}>{this.props.picks}...<i className="material-icons">info</i></h4>
        </div>
        </div>
        <div className="col-md-12">
        <div className="list-group">
        <a href="1" className="list-group-item list-group-item-secondary list-group-item-action"
        onClick={this.add.bind(this)}>From: 39456 Message: Hello!</a>
        <a href="2" className="list-group-item list-group-item-secondary list-group-item-action"
        onClick={this.add.bind(this)}>From: 87412 Message: Fuck You!</a>
        <a href="3" className="list-group-item list-group-item-secondary list-group-item-action"
        onClick={this.add.bind(this)}>From: 95133 Message: No! You Fuck!</a>
        </div>
        </div>
        <div className="col-md-12">
        <div className="block-footer">
        <div className="row">
        <div className="col-md-6">
        <h4 data-toggle="tooltip" title="39034456789534455454534">1235...<i className="material-icons">info</i></h4>
        </div>
        <div className="col-md-6 ">
        <h4 className="float-right" data-toggle="tooltip" title="39034456789534455454534"><i className="material-icons">info</i>67891...</h4>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
      )
    }
  }
  export default StepTwo;
  