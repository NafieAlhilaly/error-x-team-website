import { Button, Container, Grid, Row, Spacer, Text} from '@nextui-org/react'
import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar';
import SendIdeaForm from '../components//SendIdeaForm';

import RocketGIF from '../public/animation_500_l79j752x.gif';
import TeamGIF from '../public//animation_500_l79jk537.gif';

import FahadCard from '../components/teamCards/FahadCard';
import AmjadCard from '../components/teamCards/AmjadCard';
import HassnCard from '../components/teamCards/HassnCard';
import HamadCard from '../components/teamCards/HamadCard';
import HassanCard from '../components/teamCards/HassanCard';
import IbrahimCard from '../components/teamCards/IbrahimCard';

import twitter from '../public/socialsIcons/twitter1.svg';
import insta from '../public/socialsIcons/instgram.svg';
import whatsapp from '../public/socialsIcons/whatsapp.svg';

import logo1 from '../public/clients/logo-1.png';
import logo2 from '../public/clients/logo-2.svg';
import logo3 from '../public/clients/logo-3.svg';
import logo4 from '../public/clients/logo-4.png';
import logo5 from '../public/clients/logo-5.jpeg';
import logo6 from '../public/clients/logo-6.svg';
import logo7 from '../public/clients/logo-7.svg';
import logo8 from '../public/clients/logo-8.svg';
import logo9 from '../public/clients/logo-9.svg';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Row justify='center'>
        <NavBar />
      </Row>
      <main className={styles.main}>
        <Spacer y={9} />
        <Container>
          <Grid.Container justify='center'>
            <Grid>
              <Image src={RocketGIF} alt='rocket gif' width={300} height={300} />
            </Grid>
            <Grid>
              <Row dir='rtl' justify='center' css={{ marginLeft: 39 }}>
                <Text b >أعظم المشاريع بدأت <Text b css={{ color: '#D9E73C' }}>بفكرة</Text></Text>
              </Row>
              <Row gap={1} justify='center'>
                <Button auto css={{ display: 'inline' }}><Text b css={{ color: 'black' }}><Link href='#form'>الآن</Link></Text></Button>
                <Text css={{ color: '$white', marginTop: 6 }} b size={22}>حول فكرتك إلى مشروع</Text>
              </Row>
            </Grid>
          </Grid.Container>
        </Container>
      </main>
      <Spacer y={12} />
      <Container dir='rtl' css={{ padding: 12 }} id="team">
        <Row justify='center'>
          <Text b size={30} css={{ color: '#D9E73C' }}>قصة  الفريق</Text>
        </Row>
        <Grid.Container>
          <Grid>
            <Image src={TeamGIF} alt='team logo' width={300} height={300} />
          </Grid>
          <Grid css={{ marginTop: 30 }} xs={true} md={true}>
            <Text b size={14}>فريق يصنع الأفكار قبل كل شيء. انطلق إررورx بفريق بكفاءات وخبرات عالية، تتمحور فكرة اررورx في إنشاء وتطوير الافكار عن طريق الجلوس بجانب المتلقي كصديق يفهمه. ولكن في الوقت ذاته، نظرتنا عالمية استرشادا بأفضل التجارب الدولية، والعمل بأفضل الممارسات في نطاق أعمالنا. شُكّلت فكرة اررورx بمجموعة من الكلمات التي تشكل كلمة ERROR، فنحن فريق من الخبراء (Experts) مثابرون من دون الشعور بالتعب (Restless, Revolutionary) وملتزمين وشديدي الدقة (Observant) في تقديم خدمات تقنية يعتمد عليها (Reliable). فقيمنا تتجسد في ERROR والتي نحرص على التفاصيل فيها: شغفنا، فاعليتنا، وثقتنا، وتناغمنا. نحرص في علاقتنا مع عملائنا على تقديم اقتراحاتنا بمنتهى المهنية والابتكار، للوصول مع عملائنا إلى نتائج تساهم في نمو وازدهار أعمالهم.</Text>
          </Grid>
        </Grid.Container>
        <Grid.Container gap={1}>
          <Grid>
            <FahadCard />
          </Grid>
          <Grid>
            <AmjadCard />
          </Grid>
          <Grid>
            <HassnCard />
          </Grid>
          <Grid>
            <HamadCard />
          </Grid>
          <Grid>
            <IbrahimCard />
          </Grid>
          <Grid>
            <HassanCard />
          </Grid>
        </Grid.Container>
      </Container>
      <Spacer y={12} />
      <Container id='clients'>
        <Row justify='center'>
          <Text b size={30} css={{ color: '#D9E73C' }}>عملائنا</Text>
        </Row>
        <Spacer />
        <Grid.Container gap={2} justify='center'>
          <Grid>
            <Image src={logo1} alt='client icon' width={150} height={100} />
          </Grid>
          <Grid>
            <Image src={logo2} alt='client icon' width={150} height={100} />
          </Grid>
          <Grid>
            <Image src={logo3} alt='client icon' width={150} height={100} />
          </Grid>
          <Grid>
            <Image src={logo4} alt='client icon' width={100} height={100} />
          </Grid>
          <Grid>
            <Image src={logo5} alt='client icon' width={150} height={100} />
          </Grid>
          <Grid>
            <Image src={logo6} alt='client icon' width={150} height={100} />
          </Grid>
          <Grid>
            <Image src={logo7} alt='client icon' width={150} height={100} />
          </Grid>
          <Grid>
            <Image src={logo8} alt='client icon' width={150} height={100} />
          </Grid>
          <Grid>
            <Image src={logo9} alt='client icon' width={150} height={100} />
          </Grid>
        </Grid.Container>
      </Container>
      <Spacer y={7} />
      <Container id='form'>
        <SendIdeaForm />
      </Container>
      <Spacer y={3}/>
      <footer className={styles.footer}>
        <Grid.Container>
          <Grid xs={true}>
            <Row gap={1}>
              <Grid css={{ paddingRigth: 5, paddingLeft: 5 }}>
                <Image src={insta} alt='email icon' width={40} height={40} />
              </Grid>
              <Grid css={{ paddingRigth: 5, paddingLeft: 5 }}>
                <Image src={twitter} alt='email icon' width={40} height={40} />
              </Grid>
              <Grid css={{ paddingRigth: 5, paddingLeft: 5 }}>
                <Image src={whatsapp} alt='email icon' width={40} height={40} />
              </Grid>
            </Row>
          </Grid>
          <Grid xs={true} md={true} dir='rtl'>
            <Row gap={0.1}>
              <Text size={12}> جميع الحقوق محفوظة إيررورx </Text>
              <Text size={12}> @ 2022 </Text>
            </Row>
            
          </Grid>
        </Grid.Container>
      </footer>
    </div>
  )
}

export default Home
