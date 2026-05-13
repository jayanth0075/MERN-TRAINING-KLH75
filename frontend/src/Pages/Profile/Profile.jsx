import React from 'react'
import { Container, Paper, Avatar, Group, Stack, Text, Divider, Card, Badge, Grid } from '@mantine/core'
import { IconUser, IconPhone, IconBuilding, IconId } from '@tabler/icons-react'
import classes from './Profile.module.css'

export default function Profile() {
  const profileData = {
    name: 'JAYANTH',
    mobile: '7386849777',
    dept: 'AI & DS',
    rollNo: '2410080075'
  }

  return (
    <Container size="md" py="lg">
      <Paper className={classes.profileWrapper} p="lg" radius="md" withBorder>
        
        {/* Header Section with Avatar */}
        <div className={classes.headerSection}>
          <Avatar 
            src="https://api.dicebear.com/7.x/lorelei/svg?seed=jane" 
            size={140}
            radius="xl"
            className={classes.avatar}
          />
          <Stack gap={4} align="center">
            <Text fw={700} size="xl">
              {profileData.name}
            </Text>
            <Badge color="blue" variant="light">
              Student
            </Badge>
          </Stack>
        </div>

        <Divider my="lg" />

        {/* Info Grid */}
        <Grid gutter="lg">
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <div className={classes.infoItem}>
              <Group gap="sm">
                <IconPhone size={20} className={classes.iconColor} />
                <div>
                  <Text size="xs" c="dimmed" fw={500} tt="uppercase">
                    Mobile
                  </Text>
                  <Text fw={600} size="sm">
                    {profileData.mobile}
                  </Text>
                </div>
              </Group>
            </div>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6 }}>
            <div className={classes.infoItem}>
              <Group gap="sm">
                <IconBuilding size={20} className={classes.iconColor} />
                <div>
                  <Text size="xs" c="dimmed" fw={500} tt="uppercase">
                    Department
                  </Text>
                  <Text fw={600} size="sm">
                    {profileData.dept}
                  </Text>
                </div>
              </Group>
            </div>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6 }}>
            <div className={classes.infoItem}>
              <Group gap="sm">
                <IconId size={20} className={classes.iconColor} />
                <div>
                  <Text size="xs" c="dimmed" fw={500} tt="uppercase">
                    Roll Number
                  </Text>
                  <Text fw={600} size="sm">
                    {profileData.rollNo}
                  </Text>
                </div>
              </Group>
            </div>
          </Grid.Col>
        </Grid>
      </Paper>
    </Container>
  )
}
