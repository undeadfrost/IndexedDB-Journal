import React, {Component} from 'react';
import Layout from '../../components/layouts/index';
import LeftDate from '../../components/writing/LeftDate';

class Writing extends Component {
  render() {
    return (
      <Layout>
        <LeftDate/>
        <h1>Writing</h1>
      </Layout>
    )
  }
}

export default Writing;
