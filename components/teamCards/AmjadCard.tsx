import { Card, Row, Col, Text, Grid } from "@nextui-org/react";
import Image from "next/image";
import twitter from '../../public/socialsIcons/twitter.png';
import linkedin from '../../public/socialsIcons/linkedin.png';
import email from '../../public/socialsIcons/email.png';

export default function AmjadCard() {
    return (<Card css={{ w: "100%", h: "400px" }}>
        <Card.Body css={{ p: 0, maxWidth: 300 }}>
            <Card.Image
                src="https://errorx-tech.com/assets/images/amjed.png"
                objectFit="cover"
                width="100%"
                height="100%"
                alt="Relaxing app background"
            />
        </Card.Body>
        <Card.Footer
            isBlurred
            css={{
                position: "absolute",
                bgBlur: "#0f111466",
                borderTop: "$borderWeights$light solid $gray800",
                bottom: 0,
                zIndex: 1,
            }}
        >
            <Col>
                <Row gap={1}>
                    <Text b size={20}>أمجد مهنا</Text>
                    <Grid css={{ paddingRigth: 5, paddingLeft: 5 }}>

                        <Image src={twitter} alt='email icon' width={20} height={20} />
                    </Grid>
                    <Grid css={{ paddingRigth: 5, paddingLeft: 5 }}>
                        <Image src={linkedin} alt='email icon' width={20} height={20} />
                    </Grid>
                    <Grid css={{ paddingRigth: 5, paddingLeft: 5 }}>
                        <Image src={email} alt='email icon' width={20} height={20} />
                    </Grid>
                </Row>
                <Text b size={13}>محلل نظم, محلل أعمال</Text>
            </Col>

        </Card.Footer>
    </Card>)

}