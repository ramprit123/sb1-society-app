import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Download } from 'lucide-react-native';
import { colors } from '@/constants/colors';
import { spacing, borderRadius } from '@/constants/spacing';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

interface PaymentRecord {
  month: string;
  year: number;
  amount: number;
  status: 'pending' | 'paid';
  dueDate?: string;
  paidDate?: string;
}

export default function PaymentsScreen() {
  const currentPayment = {
    amount: 245.00,
    dueDate: 'April 30, 2024',
  };

  const paymentHistory: PaymentRecord[] = [
    {
      month: 'April',
      year: 2024,
      amount: 245,
      status: 'pending',
      dueDate: 'Apr 30',
    },
    {
      month: 'March',
      year: 2024,
      amount: 245,
      status: 'paid',
      paidDate: 'Mar 15',
    },
    {
      month: 'February',
      year: 2024,
      amount: 245,
      status: 'paid',
      paidDate: 'Feb 15',
    },
    {
      month: 'January',
      year: 2024,
      amount: 245,
      status: 'paid',
      paidDate: 'Jan 15',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.screenTitle}>Payments</Text>

        <Card style={styles.currentDueCard}>
          <Text style={styles.label}>Maintenance Due</Text>
          <Text style={styles.amount}>${currentPayment.amount.toFixed(2)}</Text>
          <Text style={styles.dueDate}>Due Date: {currentPayment.dueDate}</Text>
          <TouchableOpacity style={styles.payButton} activeOpacity={0.8}>
            <Text style={styles.payButtonText}>Pay Now</Text>
          </TouchableOpacity>
        </Card>

        <View style={styles.historySection}>
          <Text style={styles.sectionTitle}>Payment History</Text>
          {paymentHistory.map((payment, index) => (
            <Card key={index} style={styles.historyCard}>
              <View style={styles.historyRow}>
                <View>
                  <Text style={styles.historyMonth}>
                    {payment.month} {payment.year}
                  </Text>
                  <Text style={styles.historyDate}>
                    {payment.status === 'paid' ? `Paid: ${payment.paidDate}` : `Due: ${payment.dueDate}`}
                  </Text>
                </View>

                <View style={styles.historyRight}>
                  <Text style={styles.historyAmount}>${payment.amount}</Text>
                  <View style={styles.statusContainer}>
                    <Badge
                      text={payment.status === 'paid' ? 'Paid' : 'Pending'}
                      variant={payment.status === 'paid' ? 'success' : 'warning'}
                    />
                    {payment.status === 'paid' && (
                      <TouchableOpacity style={styles.downloadButton}>
                        <Download size={20} color={colors.text.tertiary} />
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
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
  currentDueCard: {
    marginHorizontal: spacing.md,
    marginBottom: spacing.xl,
  },
  label: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: spacing.xs,
  },
  amount: {
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
    color: colors.primary.DEFAULT,
    marginBottom: spacing.xs,
  },
  dueDate: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: colors.text.tertiary,
    marginBottom: spacing.md,
  },
  payButton: {
    backgroundColor: colors.primary.DEFAULT,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.sm,
    alignItems: 'center',
  },
  payButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: colors.text.inverse,
  },
  historySection: {
    paddingHorizontal: spacing.md,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: colors.text.primary,
    marginBottom: spacing.md,
  },
  historyCard: {
    marginBottom: spacing.md,
  },
  historyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  historyMonth: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: colors.text.primary,
    marginBottom: 2,
  },
  historyDate: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: colors.text.tertiary,
  },
  historyRight: {
    alignItems: 'flex-end',
  },
  historyAmount: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: colors.text.primary,
    marginBottom: spacing.xs,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  downloadButton: {
    padding: 4,
  },
});