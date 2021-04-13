import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {
    return (
      <div id="app">
        <section className={styles.component}>
        <div className={styles.description}>
          {this.props.children}
        </div>
        <Hero titleText={this.props.title} src={this.props.src}/>
        <div className={styles.columns}>
          <Column title='Animals' />
          <Column title='Plants' />
          <Column title='Minerals' />
        </div>
        </section>
      </div>
    )
  }
}

export default List;