import * as React from 'react';
import { bindActionCreators } from 'redux';
import { test } from '../actions';
const { connect } = require('react-redux');

function mapStateToProps(state: any): any {
  return {
    count: state.test.count,
  };
}

function matchDispatchToProps(dispatch: any): any {
  return bindActionCreators({
    test: test as () => {},
  }, dispatch);
}

@connect(mapStateToProps, matchDispatchToProps)
export class Home extends React.Component<IHomeProps, any>{
  constructor(props: any, context: any) {
    super(props, context);
  }

  componentDidMount(): void {
    window.addEventListener('keydown', this.handleKeyDown, false);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keydown', this.handleKeyDown, false);
  }

  private handleKeyDown = (e: any) => {
    e.preventDefault();
    switch (e.key) {
      case 'Enter':
        this.props.test();
        break;
      default:
        return false;
    }
  }

  render(): React.ReactElement {
    return <div>{
      this.props.count
    }</div>;
  }
}

export interface IHomeProps {
  count?: number;
  test?: Function;
}
