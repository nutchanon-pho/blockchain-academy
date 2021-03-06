import _ from 'lodash';
import React from 'react';
import styled from 'styled-components';
import { Fade, Zoom } from 'react-reveal';
import { Image, Card, Segment, Advertisement, Grid, Responsive, Header, Button, Rating, Icon, Accordion, Item } from 'semantic-ui-react';
import AppMenu from '~/containers/AppMenu';
import Footer from '~/components/Footer';
import { seminarList } from '~/containers/SeminarPage/constants';

const StyledGrid = styled(Grid)`
padding-top: 60px !important;
`;

export default () => (
  <div>
    <AppMenu />
    <StyledGrid padded>
      <Grid.Column width="16">
        <Header as="h1">งานอบรมและสัมนาทั้งหมด</Header>
        <Fade duration={1000}>
          <Segment>
            <Header as="h2">งานอบรมและสัมนาที่กำลังจะจัดขึ้น</Header>
            <Header textAlign="center" as="h1">รอติดตามเร็วๆนี้</Header>
          </Segment>
        </Fade>
        <br />
        <Fade duration={1500}>
          <Segment>
            <Header as="h2">งานอบรมและสัมนาที่ผ่านไปแล้ว</Header>
            <Card.Group stackable itemsPerRow="3">
              {seminarList.map((each) => (
                <Card key={each.name} onClick={() => window.location.replace(`/seminar/${each.slug}`)}>
                  <Image fluid src={each.image} />
                  <Card.Content>
                    <Card.Header>
                      <a href={`/seminar/${each.slug}`}>{each.name}</a>
                    </Card.Header>
                    <Card.Description>{each.shortDescription}</Card.Description>
                    <br />
                  </Card.Content>
                  <Card.Content extra textAlign="right">
                    <Icon name="time" />
                    <span>{each.time}</span>
              &nbsp;&nbsp;&nbsp;
                    <Icon name="tags" />
                    <span>{each.price}</span>
                  </Card.Content>
                </Card>
              ))}
            </Card.Group>
          </Segment>
        </Fade>
      </Grid.Column>
    </StyledGrid>
    <Footer />
  </div>
);
