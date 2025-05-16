import Announcements from '@/components/home/Announcements';
import EventsList from '@/components/home/EventsList';
import MaintenanceOverview from '@/components/home/MaintenanceOverview';
import QuickActions from '@/components/home/QuickActions';
import UserWelcome from '@/components/home/UserWelcome';
import { colors } from '@/constants/colors';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <UserWelcome />
        <QuickActions />
        <MaintenanceOverview />
        <EventsList />
        <Announcements />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.secondary,
  },
  scrollContent: {
    paddingTop: 16,
    paddingBottom: 32,
  },
});