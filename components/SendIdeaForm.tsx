import { Container, Input, Row, Spacer, Text, Textarea, Grid, Button } from "@nextui-org/react";

export default function SendIdeaForm() {
    return (
        <Container>
            <Row justify="center">
                <Text b>نتطلع لسماع <Text b css={{ color: '#D9E73C' }}>فكرتك</Text></Text>
            </Row>
            <Spacer />
            <Row justify="center">
                <Grid css={{ backgroundColor: '$gray900', padding: 20, borderRadius: 9 }}>
                    <Row justify="center">
                        <Input dir="rtl" placeholder='العنوان' />
                    </Row>
                    <Spacer y={0.2} />
                    <Row justify="center">
                        <Textarea
                            dir="rtl"
                            placeholder="التفاصيل"
                        />
                    </Row>
                    <Spacer y={3} />
                    <Row justify="center">
                        <Button>🚀🚀🚀🚀</Button>
                    </Row>
                </Grid>
            </Row>
        </Container>
    )
}