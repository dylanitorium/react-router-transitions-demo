import React from 'react';
import PropTypes from 'prop-types';
import {
  AlignmentContainer,
  AbsoluteContainer,
  Container,
  Title,
  Text,
  Fade,
  Swipe,
} from 'kit';
import { LinkButton as Button } from 'rrtd/view/components/utility';
import { Route } from 'react-router-dom';
import LinkedText from 'rrtd/view/components/pure/LinkedText';
import routes from 'rrtd/view/routes';

const FullScreenAlign = ({ children, id }) => (
  <AbsoluteContainer id={id} top={80} left="50%" right={0} bottom={0} style={{ marginLeft: '-160px', maxWidth: '320px' }}>
    <AlignmentContainer>
      <Container>
        {children}
      </Container>
    </AlignmentContainer>
  </AbsoluteContainer>
);

FullScreenAlign.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

// ROUTE EXLUDES INSTEAD OF MATCH?
const Unauthenticated = () => (
  <Route
    render={({ location, history }) => (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Fade history={history} location={location}>
          <Route exact path={routes.index} component={null} />
          <Route render={() => (
            <AbsoluteContainer id="back" top={0} right={0} left={0} zIndex={1}>
              <header style={{ padding: '1rem' }}>
                <AlignmentContainer horizontal="space-between" direction="row">
                  <LinkedText to="..">
                    <i className="far fa-arrow-alt-circle-left fa-3x" />
                  </LinkedText>
                </AlignmentContainer>
              </header>
            </AbsoluteContainer>
          )}
          />
        </Fade>
        <AbsoluteContainer top={160} left={0} right={0}>
          <Title align="center">
            Demo
          </Title>
        </AbsoluteContainer>
        <Swipe history={history} location={location}>
          <Route
            exact
            path={routes.index}
            component={() => (
              <FullScreenAlign id="one">
                <Button to={routes.one} margin="bottom" color="danger">
                  One
                </Button>
              </FullScreenAlign>
            )}
          />
          <Route
            path={routes.one}
            component={() => (
              <FullScreenAlign id="two">
                <Button to={routes.two} margin="bottom" color="warning">
                  Two
                </Button>
              </FullScreenAlign>
            )}
          />
          <Route
            path={routes.two}
            component={() => (
              <FullScreenAlign id="three">
                <Button to={routes.three} margin="bottom" color="success">
                  Three
                </Button>
              </FullScreenAlign>
            )}
          />
          <Route
            exact
            path={routes.three}
            component={() => (
              <FullScreenAlign id="sign_up">
                <AlignmentContainer horizontal="center">
                  <Text>
                    End of the road pal...
                  </Text>
                </AlignmentContainer>
              </FullScreenAlign>
            )}
          />
        </Swipe>
      </div>
    )}
  />
);

export default Unauthenticated;
