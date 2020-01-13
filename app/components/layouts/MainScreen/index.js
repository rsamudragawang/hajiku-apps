import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './component';
import * as actions from './action';

function mapStateToProps(state) {
  const { isLoading } = state.mainScreen;
  return {
    isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(Component));
