import * as React from 'react';
// import { connect } from 'react-redux';

import Header from "../Header/Header";
// import Reviews from '../Reviews';
// import footer from '../../components/footer';
// import * as actions from '../../store/actions';

class ReviewWidget extends React.Component {
  componentDidMount() {
    console.log('ComponentWillMount: ReviewWidget');
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <Header
        reviewCount={this.props.rollup.review_count} />
      </div>
    )
  }
}

export default ReviewWidget;
// export default connect(mapStateToProps, mapDispatchToProps)(ReviewWidget);