import React, {Component} from 'react';
import Layout from '../../components/layouts/index';
import localstorage from '../../common/db/pool';

class Setting extends Component {
  componentDidMount() {
    localstorage.setItem('somekey', 'some value').then(function (value) {
      // 当值被存储后，可执行其他操作
      console.log(value);
    }).catch(function (err) {
      // 当出错时，此处代码运行
      console.log(err);
    });
  }

  render() {
    return (
      <Layout>
        <h1>Setting</h1>
      </Layout>
    )
  }
}

export default Setting;
