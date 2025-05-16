import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';
import Card from '@/components/ui/Card';

export default function MaintenanceOverview() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Maintenance Overview</Text>
      
      <Card style={styles.card}>
        <View style={styles.maintenanceInfo}>
          <View style={styles.maintenanceItem}>
            <Text style={styles.maintenanceLabel}>This Month</Text>
            <Text style={styles.dueAmount}>$120 <Text style={styles.dueLabel}>Due</Text></Text>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.maintenanceItem}>
            <Text style={styles.maintenanceLabel}>Last Payment</Text>
            <Text style={styles.paidAmount}>$150 <Text style={styles.paidLabel}>Paid</Text></Text>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.md,
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: colors.text.primary,
    marginBottom: spacing.sm,
  },
  card: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
  },
  maintenanceInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  maintenanceItem: {
    flex: 1,
  },
  maintenanceLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: colors.text.tertiary,
    marginBottom: spacing.xs,
  },
  dueAmount: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    color: colors.primary.DEFAULT,
  },
  dueLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: 15,
    color: colors.text.tertiary,
  },
  paidAmount: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    color: colors.text.primary,
  },
  paidLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: 15,
    color: colors.text.tertiary,
  },
  divider: {
    width: 1,
    backgroundColor: colors.border.light,
    marginHorizontal: spacing.md,
  },
});