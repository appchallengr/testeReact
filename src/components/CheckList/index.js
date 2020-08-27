import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getAll, checkElement } from '../../redux/main/checklist';

class Checklist extends Component {

  componentDidMount() {
    this.props.getAll();
  }

  render() {
    const { checklist, checkElement } = this.props;

    return (
      <Fragment>
        <h2>Checklist</h2>
        <ul>
          {checklist.list.map(element => (
            <li
              key={element.id}
            >
              <input type="checkbox" onChange={() => checkElement(element)} checked={element.checked} />
              {element.name}
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ checklist }) => ({
  checklist,
});
const mapDispatchToProps = { getAll, checkElement };

export default connect(mapStateToProps, mapDispatchToProps)(Checklist);
