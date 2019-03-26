import React, { Component } from 'react';

class ClassHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    if (typeof this.props.clazz.ClassName !== 'undefined') {
      this.setState({ isLoading: false });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps
                      && typeof this.props.clazz.ClassName !== 'undefined') {
      this.setState({ isLoading: false });
    }
  }

}

export default ClassHome;
