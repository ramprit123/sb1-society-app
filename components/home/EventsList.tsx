import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Calendar, MapPin } from 'lucide-react-native';
import { colors } from '@/constants/colors';
import { spacing, borderRadius } from '@/constants/spacing';
import Card from '@/components/ui/Card';

export default function EventsList() {
  const events = [
    {
      id: '1',
      title: 'Community Meeting',
      date: 'Dec 15',
      time: '6:00 PM',
      location: 'Community Hall',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: '2',
      title: 'Holiday Celebration',
      date: 'Dec 20',
      time: '7:00 PM',
      location: 'Garden Area',
      image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Upcoming Events</Text>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        {events.map((event) => (
          <Card key={event.id} style={styles.eventCard} padded={false}>
            <Image 
              source={{ uri: event.image }} 
              style={styles.eventImage} 
              resizeMode="cover"
            />
            <View style={styles.eventContent}>
              <Text style={styles.eventTitle}>{event.title}</Text>
              
              <View style={styles.eventDetails}>
                <View style={styles.eventDetailItem}>
                  <Calendar size={16} color={colors.text.tertiary} />
                  <Text style={styles.eventDetailText}>{event.date} • {event.time}</Text>
                </View>
                
                <View style={styles.eventDetailItem}>
                  <MapPin size={16} color={colors.text.tertiary} />
                  <Text style={styles.eventDetailText}>{event.location}</Text>
                </View>
              </View>
            </View>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: colors.text.primary,
    marginBottom: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  scrollView: {
    paddingLeft: spacing.md,
    paddingRight: spacing.xs,
  },
  eventCard: {
    width: 290,
    marginRight: spacing.md,
    overflow: 'hidden',
  },
  eventImage: {
    width: '100%',
    height: 140,
    borderTopLeftRadius: borderRadius.lg,
    borderTopRightRadius: borderRadius.lg,
  },
  eventContent: {
    padding: spacing.md,
  },
  eventTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: colors.text.primary,
    marginBottom: spacing.sm,
  },
  eventDetails: {
    gap: spacing.xs,
  },
  eventDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  eventDetailText: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: colors.text.tertiary,
  },
});