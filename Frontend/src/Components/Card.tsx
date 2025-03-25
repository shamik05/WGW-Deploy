// import { IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons-react';
import { Badge, Button, Card, Center, Group, Image, Text } from '@mantine/core';
import classes from './Card.module.css';
import { Bike } from '../constants';

// const mockdata = [
//   { label: '4 passengers', icon: IconUsers },
//   { label: '100 km/h in 4 seconds', icon: IconGauge },
//   { label: 'Automatic gearbox', icon: IconManualGearbox },
//   { label: 'Electric', icon: IconGasStation },
// ];

// interface BikeProps {
//     bike: Bike[];
// }

const BikeCard: React.FC<Bike> = ({ name, image }: Bike) => {
//   const features = mockdata.map((feature) => (
//     <Center key={feature.label}>
//       <feature.icon size={16} className={classes.icon} stroke={1.5} />
//       <Text size="xs">{feature.label}</Text>
//     </Center>
//   ));
    console.log(name)
  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        {/* <Image src={image} alt="Tesla Model S" /> */}
      </Card.Section>

      <Group justify="space-between" mt="md">
        <div>
          <Text fw={500}>{name}</Text>
          <Text fz="xs" c="dimmed">
            Free recharge at any station
          </Text>
        </div>
        <Badge variant="outline">25% off</Badge>
      </Group>

      <Card.Section className={classes.section} mt="md">
        <Text fz="sm" c="dimmed" className={classes.label}>
          Basic configuration
        </Text>

        <Group gap={8} mb={-8}>
          {/* {features} */}
          features
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group gap={30}>
          <div>
            <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
              $168.00
            </Text>
            <Text fz="sm" c="dimmed" fw={500} style={{ lineHeight: 1 }} mt={3}>
              per day
            </Text>
          </div>

          <Button radius="xl" style={{ flex: 1 }}>
            Rent now
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}

export default BikeCard