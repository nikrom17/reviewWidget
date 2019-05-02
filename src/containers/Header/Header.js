import * as React from 'react';
import { connect } from 'react-redux';

import Selector from '../../components/UI/Selector/Selector';
import { sortSelectorConfig } from "./sortSelectorConfig";
import * as actions from '../../store/actions';
import classes from './Header.css'

class Header extends React.Component {
  render() {
    return (
      <div className={classes.header}>
        <h3 className={classes.title}>Review Display</h3>
        <Selector
          className={classes.selector}
          description={sortSelectorConfig.description}
          options={sortSelectorConfig.options}
          optgroup={sortSelectorConfig.optgroup}
          value={this.props.sortMethod}
          changed={(sortMethod) => this.props.onSortReviews(sortMethod)}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    sortMethod: state.reviewWidget.sortMethod
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSortReviews: (sortMethod) => dispatch(actions.sortReviews(sortMethod)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);