import React, {Component} from 'react';
import {RouteComponentProps, Link} from 'react-router-dom';
import Layout from '../../components/layouts/index';
import Card from '../../components/catalogue/Card';
import styles from './index.module.css';

interface RouterInfo {
  year: string
  month?: string
}

interface Props extends RouteComponentProps<RouterInfo> {
}

interface State {
}

const monthList = [
  {figure: "01", chinese: "一月"},
  {figure: "02", chinese: "二月"},
  {figure: "03", chinese: "三月"},
  {figure: "04", chinese: "四月"},
  {figure: "05", chinese: "五月"},
  {figure: "06", chinese: "六月"},
  {figure: "07", chinese: "七月"},
  {figure: "08", chinese: "八月"},
  {figure: "09", chinese: "九月"},
  {figure: "10", chinese: "十月"},
  {figure: "11", chinese: "十一月"},
  {figure: "12", chinese: "十二月"},
]

class Catalogue extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  getYearMonth = (year: string) => monthList.map(item => (
    <li key={item.figure}>
      <Link to={`/${year}/${item.figure}`}>
        <Card left={item.chinese} right={6}/>
      </Link>
    </li>));

  getMonthDay = (year: string, month: string, dayNum: number) => {
    let dayNodes: any = [];
    for (let i: number = 1; i <= dayNum; i++) {
      dayNodes.push(<li key={i}>
        <Link to={`/${year}/${month}/${i}`}><Card left={`${i}日`} right={6}/></Link>
      </li>)
    }
    return dayNodes;
  }

  render() {
    const {year, month} = this.props.match.params;
    let dayNum: number = 0;
    if (month) {
      dayNum = parseInt(String(new Date(parseInt(year), parseInt(month), 0).getDate()));
    }

    return (
      <Layout>
        {month ? <h1>{year} / {month}</h1> : <h1>{year}</h1>}
        <ul className={styles["date-list"]}>
          {month ? this.getMonthDay(year, month, dayNum) : this.getYearMonth(year)}
        </ul>
      </Layout>
    )
  }
}

export default Catalogue;
