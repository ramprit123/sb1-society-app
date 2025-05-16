import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Plus, GlassWater as WaterDropIcon, Zap, PenTool as Tool, ChevronRight } from 'lucide-react-native';
import { colors } from '@/constants/colors';
import { spacing, borderRadius } from '@/constants/spacing';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

interface ComplaintStats {
  open: number;
  inProgress: number;
  resolved: number;
}

interface Complaint {
  id: string;
  type: 'Water Supply' | 'Electricity' | 'Maintenance';
  title: string;
  description: string;
  status: 'open' | 'in-progress' | 'resolved';
  timeAgo: string;
}

export default function ServicesScreen() {
  const stats: ComplaintStats = {
    open: 12,
    inProgress: 8,
    resolved: 45,
  };

  const complaints: Complaint[] = [
    {
      id: '1',
      type: 'Water Supply',
      title: 'Water Supply Issue',
      description: 'No water supply in Block A for the past 2 hours',
      status: 'open',
      timeAgo: '2 hours ago',
    },
    {
      id: '2',
      type: 'Electricity',
      title: 'Power Fluctuation',
      description: 'Frequent power cuts in ground floor',
      status: 'in-progress',
      timeAgo: '5 hours ago',
    },
    {
      id: '3',
      type: 'Maintenance',
      title: 'Elevator Maintenance',
      description: 'Elevator maintenance completed',
      status: 'resolved',
      timeAgo: '1 day ago',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return colors.status.warning;
      case 'in-progress':
        return colors.status.info;
      case 'resolved':
        return colors.status.success;
      default:
        return colors.text.tertiary;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'in-progress':
        return 'In Progress';
      default:
        return status.charAt(0).toUpperCase() + status.slice(1);
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'Water Supply':
        return <WaterDropIcon size={24} color={colors.text.secondary} />;
      case 'Electricity':
        return <Zap size={24} color={colors.text.secondary} />;
      case 'Maintenance':
        return <Tool size={24} color={colors.text.secondary} />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.screenTitle}>Services</Text>

        <View style={styles.statsContainer}>
          <Card style={styles.statCard}>
            <Text style={styles.statNumber}>{stats.open}</Text>
            <Text style={styles.statLabel}>Open</Text>
          </Card>
          
          <Card style={styles.statCard}>
            <Text style={styles.statNumber}>{stats.inProgress}</Text>
            <Text style={styles.statLabel}>In Progress</Text>
          </Card>
          
          <Card style={styles.statCard}>
            <Text style={[styles.statNumber, { color: colors.status.success }]}>
              {stats.resolved}
            </Text>
            <Text style={styles.statLabel}>Resolved</Text>
          </Card>
        </View>

        <TouchableOpacity style={styles.newComplaintButton} activeOpacity={0.8}>
          <Plus size={20} color={colors.text.inverse} />
          <Text style={styles.newComplaintText}>Raise New Complaint</Text>
        </TouchableOpacity>

        <View style={styles.complaintsSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Complaints</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllButton}>See All</Text>
            </TouchableOpacity>
          </View>

          {complaints.map((complaint) => (
            <Card key={complaint.id} style={styles.complaintCard}>
              <View style={styles.complaintHeader}>
                <View style={styles.complaintType}>
                  {getIcon(complaint.type)}
                  <Text style={styles.complaintCategory}>{complaint.type}</Text>
                </View>
                <Badge
                  text={getStatusText(complaint.status)}
                  variant={
                    complaint.status === 'open'
                      ? 'warning'
                      : complaint.status === 'in-progress'
                      ? 'info'
                      : 'success'
                  }
                />
              </View>

              <Text style={styles.complaintTitle}>{complaint.title}</Text>
              <Text style={styles.complaintDescription}>{complaint.description}</Text>

              <View style={styles.complaintFooter}>
                <Text style={styles.timeAgo}>{complaint.timeAgo}</Text>
                <TouchableOpacity style={styles.viewDetailsButton}>
                  <Text style={styles.viewDetailsText}>View Details</Text>
                  <ChevronRight size={16} color={colors.primary.DEFAULT} />
                </TouchableOpacity>
              </View>
            </Card>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.secondary,
  },
  scrollView: {
    flex: 1,
  },
  screenTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    color: colors.text.primary,
    marginBottom: spacing.lg,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: spacing.md,
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: spacing.sm,
  },
  statNumber: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: colors.text.primary,
    marginBottom: 2,
  },
  statLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: colors.text.tertiary,
  },
  newComplaintButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary.DEFAULT,
    marginHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.md,
    marginBottom: spacing.xl,
    gap: spacing.xs,
  },
  newComplaintText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: colors.text.inverse,
  },
  complaintsSection: {
    paddingHorizontal: spacing.md,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: colors.text.primary,
  },
  seeAllButton: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: colors.primary.DEFAULT,
  },
  complaintCard: {
    marginBottom: spacing.md,
  },
  complaintHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  complaintType: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  complaintCategory: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: colors.text.secondary,
  },
  complaintTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: colors.text.primary,
    marginBottom: spacing.xs,
  },
  complaintDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: spacing.md,
  },
  complaintFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeAgo: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: colors.text.tertiary,
  },
  viewDetailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  viewDetailsText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: colors.primary.DEFAULT,
  },
});