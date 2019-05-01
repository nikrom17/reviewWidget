import * as React from 'react';
import { connect } from 'react-redux';

import Input from '../../components/UI/Input/Input';
import { sortSelectorConfig } from "./sortSelectorConfig";
import * as actions from '../../store/actions';
import classes from './Header.css'

class Header extends React.Component {
  componentWillMount() {
  }


  render() {
      // const reviewCountMsg = `Reviewed by ${this.props.reviewCount} customers`;
    return (
      <div className={classes.header}>
          <p className={classes.title}>Review Display</p>
          <Input
            className={classes.selector}
            key={sortSelectorConfig.id}
            header={sortSelectorConfig.elementConfig.header}
            elementType={sortSelectorConfig.elementType}
            elementConfig={sortSelectorConfig.elementConfig}
            value={this.props.sortMethod}
            changed={(event) => this.props.onSortReviews(event)} />
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    reviews: state.reviewWidget.reviews,
    rollout: state.reviewWidget.rollout,
    sortMethod: state.reviewWidget.sortMethod
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSortReviews: (sortMethod) => dispatch(actions.sortReviews(sortMethod)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);