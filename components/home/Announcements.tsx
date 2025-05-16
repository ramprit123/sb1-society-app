import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

interface Announcement {
  id: string;
  title: string;
  description: string;
  timeAgo: string;
  isUrgent?: boolean;
}

export default function Announcements() {
  const announcements: Announcement[] = [
    {
      id: '1',
      title: 'Water Supply Maintenance',
      description: 'Scheduled maintenance work on water supply system...',
      timeAgo: '2 hours ago',
      isUrgent: true,
    },
    {
      id: '2',
      title: 'New Security Measures',
      description: 'Updated security protocols for visitor entry...',
      timeAgo: '1 day ago',
    },
    {
      id: '3',
      title: 'Parking Area Renovation',
      description: 'Renovation work starting next week in Block A...',
      timeAgo: '2 days ago',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Recent Announcements</Text>
      
      <View style={styles.announcementList}>
        {announcements.map((announcement) => (
          <Card key={announcement.id} style={styles.announcementCard}>
            <View style={styles.announcementHeader}>
              <Text style={styles.announcementTitle}>{announcement.title}</Text>
              {announcement.isUrgent && <Badge text="Urgent" variant="error" />}
            </View>
            
            <Text style={styles.announcementDescription}>{announcement.description}</Text>
            
            <Text style={styles.timeAgo}>{announcement.timeAgo}</Text>
          </Card>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.md,
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: colors.text.primary,
    marginBottom: spacing.sm,
  },
  announcementList: {
    gap: spacing.md,
  },
  announcementCard: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
  },
  announcementHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  announcementTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: colors.text.primary,
    flex: 1,
  },
  announcementDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: spacing.xs,
  },
  timeAgo: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: colors.text.tertiary,
  },
});