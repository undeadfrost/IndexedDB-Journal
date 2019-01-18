import React, {Fragment} from 'react';
import Header from '../header/index';

interface Props {
  children: React.ReactNode;
}

export default (props: Props) => (
  <Fragment>
    <Header/>
    {props.children}
  </Fragment>
)
