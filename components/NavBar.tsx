import { Container, Grid, Row, Text } from "@nextui-org/react";
import Link from "next/link";
import errorXLogo from '../public/error_x_logo.png';
import Image from "next/image";

export default function NavBar() {
    return (
        <Container css={{ marginTop: 20, position: 'fixed', zIndex: 999, borderRadius: 9, padding: 12, bgBlur: '$gray50' }}>
            <Grid.Container >
                <Grid xs={2}>
                    <Row css={{ marginTop: 4 }} gap={1}>
                        <Text b css={{ display: 'inline' }} className='navBar'><Link href='#team'>الفريق</Link></Text>
                        <Text b css={{ display: 'inline' }} className='navBar'><Link href='#clients'>عملائنا</Link></Text>
                    </Row>
                </Grid>
                <Grid xs={true} md={true}>
                    <Row justify="flex-end">
                        <Text b css={{ paddingTop: 12, display: 'inline', color: '#D9E73C' }}>X</Text>
                        <Text css={{ color: '$white' }} size={20}>إررور</Text>
                        <Grid css={{ paddingLeft: 7, paddingRight: 23 }}>
                            <Image src={errorXLogo} alt='error x logo' width={30} height={30} />
                        </Grid>
                    </Row>
                </Grid>
            </Grid.Container>
        </Container>
    )
} 