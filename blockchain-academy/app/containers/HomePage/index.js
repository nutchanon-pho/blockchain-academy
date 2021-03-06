/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */
import _ from 'lodash';
import React, { Component } from 'react';
import { Particles } from 'react-particles-js';
import {
  Menu,
Header,
  Button,
  Grid,
    Segment,
  Image,
  Container,
  Card,
  Icon,
  Dimmer,
} from 'semantic-ui-react';
import Slider from 'react-slick';
import Logo from 'images/logo.png';
import { particleConfig } from './constants';
import styled from 'styled-components';
import IntroToBitcoinImage from 'images/introduction-to-bitcoin.png';
import CryptoCurrencyMiningImage from 'images/cryptocurrency-mining.png';
import EthereumImage from 'images/ethereum.png';
import seminar1 from 'images/seminar-1.png';
import seminar2 from 'images/seminar-2.png';
import seminar3 from 'images/seminar-3.png';
import seminar4 from 'images/seminar-4.png';
import bitcoinSeminar1 from 'images/seminar-bitcoin.jpg';
import NextArrow from 'components/NextArrow';
import PrevArrow from 'components/PrevArrow';
import pantipPratunamLogo from 'images/pantip-pratunam-logo.png';
import biostarLogo from 'images/biostar-logo.png';
import thminerLogo from 'images/thminer-logo.jpg';
import ratchapatLogo from 'images/ratchapat-logo.png';

const settings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  accessibility: true,
  adaptiveHeight: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

const CanvasHeader = styled(Header)`
    text-align: center;
    position: absolute;

    @media (max-width: 767px) { 
      top: 50px;
      left : 0;
      right: 0;
    }

    @media (min-width: 768px) { 
      top: 110px;
      left : 0;
      right: 0;
    }
`;

const CanvasHeaderText = styled.h1 `
    letter-spacing: 2px;
    pointer-events: none;
    font-weight: 700;

    @media (max-width: 767px) { 
      font-size: 2em !important;
    }

    @media (min-width: 768px) { 
      font-size: 3em !important;
    }
`;

const CanvasSubheaderText = styled.h2 ``;

const seminarList = [
  {
    image: bitcoinSeminar1,
    name: 'Introduction to Bitcoin and Blockchain ครั้งที่ 1',
    venue: 'HUBBA-TO',
    description: 'คอร์สอบรมความรู้ระดับเบื้องต้นเกี่ยวกับ Bitcoin และ Blockchain พร้อมสาธิตการเทรดและการขุด',
    time: '29 October 2017',
    price: 'ตั๋วหมด',
  },
  {
    image: bitcoinSeminar1,
    name: 'Introduction to Bitcoin and Blockchain ครั้งที่ 2',
    venue: 'สมาคมธรรมศาสตร์',
    description: 'คอร์สอบรมความรู้ระดับเบื้องต้นเกี่ยวกับ Bitcoin และ Blockchain พร้อมสาธิตการเทรดและการขุด',
    time: '18 November 2017',
    price: 'ตั๋วหมด',
  },
];

const courseList = [
  {
    name: 'Bitcoin คืออะไร?',
    image: IntroToBitcoinImage,
    description: 'ประวัติความเป็นมา และความรู้เบื้องต้นของสกุลเงินดิจิตอล Bitcoin',
    meta: 'ระดับมือใหม่',
    duration: 3,
    price: 'ฟรี',
  }, {
    name: 'สร้างกำไรจากการขุด Cryptocurrency',
    image: CryptoCurrencyMiningImage,
    description: 'เจาะลึกวิธีการและเทคนิคในการขุด Cryptocurrency ตั้งแต่การเลือกซื้ออุปกรณ์ ไปจนถึ' +
        'งการติดตั้งและใช้งานซอฟต์แวร์สำหรับการขุด',
    meta: 'ระดับกลาง',
    duration: 10,
    price: '500 THB',
  }, {
    name: 'Ethereum นวัตกรรมเปลี่ยนโลก',
    image: EthereumImage,
    description: 'ทำความรู้จักกับ Ethereum อีกหนึ่ง Cryptocurrency ที่นำเสนอแนวคิดใหม่ที่แตกต่างไป' +
        'จาก Bitcoin และเหรียญอื่นๆ',
    meta: 'ระดับมือใหม่',
    duration: 3,
    price: 'ฟรี',
  },
];

export default class HomePage extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu stackable>
          <Menu.Item>
            <img
              style={{
                width: '6.5em',
              }}
              src={Logo}
              alt="Logo"
            />
          </Menu.Item>

          <Menu.Item
            name="features"
            active={activeItem === 'features'}
            onClick={this.handleItemClick}
          >
            คอร์สออนไลน์
          </Menu.Item>

          <Menu.Item
            name="testimonials"
            active={activeItem === 'testimonials'}
            onClick={this.handleItemClick}
          >
            อบรม/สัมนา
          </Menu.Item>

          <Menu.Item
            name="sign-in"
            active={activeItem === 'sign-in'}
            onClick={this.handleItemClick}
          >
            เกี่ยวกับเรา
          </Menu.Item>
        </Menu>
        <Segment>
          <Particles params={particleConfig} height="400px" />
          <CanvasHeader textAlign="center">
            <CanvasHeaderText>
              SIAM BLOCKCHAIN ACADEMY
            </CanvasHeaderText>
            <CanvasSubheaderText>
              ศูนย์รวมแห่งการเรียนรู้ Blockchain และ Cryptocurrency
            </CanvasSubheaderText>
            <Button
              color="blue" style={{
                fontSize: '20px',
              }}
            >เริ่มต้นที่นี่</Button>
          </CanvasHeader>
        </Segment>
        <br />
        <Container>
          <Header as="h1" textAlign="center">
            คอร์สออนไลน์คุณภาพ
            <Header.Subheader>
              รู้ลึกทุกข้อมูล ด้วยเนื้อหาที่เข้าใจง่าย เหมาะสมสำหรับทุกคน
            </Header.Subheader>
          </Header>
          <br />
          <Card.Group stackable itemsPerRow="4">
            {courseList.map((each) => (
              <Card key={each.name}>
                <Image fluid src={each.image} />
                <Card.Content>
                  <Card.Header>
                    <a>{each.name}</a>
                  </Card.Header>
                  <Card.Meta>{each.meta}</Card.Meta>
                  <Card.Description>{each.description}</Card.Description>
                  <br />
                </Card.Content>
                <Card.Content extra textAlign="right">
                  <Icon name="time" />
                  <span>{each.duration} ชั่วโมง</span>
                  &nbsp;&nbsp;&nbsp;
                  <Icon name="tags" />
                  <span>{each.price}</span>
                </Card.Content>
              </Card>
            ))}
            <Dimmer.Dimmable as={Card} dimmed>
              <Dimmer inverted active>
                <Header as="h2" icon color="blue">
                  <Icon name="plus" />
                  ดูคอร์สออนไลน์ทั้งหมด
                </Header>
              </Dimmer>
              <Image fluid src={courseList[0].image} />
              <Card.Content>
                <Card.Header>
                  <a>{courseList[0].name}</a>
                </Card.Header>
                <Card.Meta>{courseList[0].meta}</Card.Meta>
                <Card.Description></Card.Description>
              </Card.Content>
            </Dimmer.Dimmable>
          </Card.Group>
          <br />
          <Header as="h1" textAlign="center">
            คอร์สอบรมและสัมนา ถ่ายทอดความรู้แบบถึงตัว
            <Header.Subheader>
            พร้อมสาธิตให้เห็นภาพชัดเจน เพรียบพร้อมด้วยความรู้จากวิทยากรผู้เชี่ยวชาญ
            ด้วยประสบการณ์การจัดสัมนากับ พันธุ์ทิพย์ ประตูน้ำ, THMiner และ Biostar
            </Header.Subheader>
          </Header>
          <Segment basic textAlign="center">
            <Image.Group >
              <Image size="small" src={pantipPratunamLogo} />
              <Image size="small" src={biostarLogo} />
              <Image size="tiny" src={thminerLogo} />
              <Image size="tiny" src={ratchapatLogo} />
            </Image.Group>
          </Segment>
          <div style={{ maxHeight: '600px' }}>
            <Slider {...settings} >
              <div><Image centered src={seminar1} /></div>
              <div><Image centered src={seminar2} /></div>
              <div><Image centered src={seminar3} /></div>
              <div><Image centered src={seminar4} /></div>
            </Slider>
          </div>
          <Segment basic style={{ marginTop: '50px' }}>
            <Card.Group stackable itemsPerRow="3">
              {seminarList.map((each) => (
                <Card key={each.name}>
                  <Image fluid src={each.image} />
                  <Card.Content>
                    <Card.Header>
                      <a>{each.name}</a>
                    </Card.Header>
                    <Card.Description>{each.description}</Card.Description>
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
              <Dimmer.Dimmable as={Card} dimmed>
                <Dimmer inverted active>
                  <Header as="h2" icon color="blue">
                    <Icon name="plus" />
                  ดูคอร์สอบรม<br />
                  และสัมนาทั้งหมด
                </Header>
                </Dimmer>
                <Image fluid src={seminarList[0].image} />
                <Card.Content>
                  <Card.Header>
                    <a>{seminarList[0].name}</a>
                  </Card.Header>
                  <Card.Meta>{seminarList[0].meta}</Card.Meta>
                  <Card.Description></Card.Description>
                </Card.Content>
              </Dimmer.Dimmable>
            </Card.Group>
          </Segment>
        </Container>
      </div>
    );
  }
}
