import React from "react";
import PropTypes from "prop-types";
import {Grid , Row, Col} from "react-bootstrap";
import { injectIntl, intlShape } from 'react-intl';
import messages from '../defaultMessages';

class ComingSoonComponent extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  static propTypes = {
    intl: intlShape
  };

  render() {
    const intl = this.props.intl;
    return (
      <Grid  className="comingSoonWrapper">
        <Row>
          <Col xs={12} md={12} className="comingSoonText">
           {intl.formatMessage(messages.comingSoonText)}
          </Col>
          </Row>
          <Row>
          <Col xs={12} md={12} className="comingSoonSubText">
          {intl.formatMessage(messages.comingSoonSubText)}
          </Col>
          </Row>
      </Grid>
    );
  }
}
export default injectIntl(ComingSoonComponent);