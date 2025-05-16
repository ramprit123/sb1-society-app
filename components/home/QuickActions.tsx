import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Receipt, MessageCircle, UserCheck } from 'lucide-react-native';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';
import ActionButton from '@/components/ui/ActionButton';

export default function QuickActions() {
  return (
    <View style={styles.container}>
      <View style={styles.actionRow}>
        <ActionButton
          icon={<Receipt color={colors.primary.DEFAULT} size={24} />}
          label="Pay Dues"
          onPress={() => {}}
          style={styles.action}
        />
        <View style={styles.divider} />
        <ActionButton
          icon={<MessageCircle color={colors.primary.DEFAULT} size={24} />}
          label="Raise Complaint"
          onPress={() => {}}
          style={styles.action}
        />
        <View style={styles.divider} />
        <ActionButton
          icon={<UserCheck color={colors.primary.DEFAULT} size={24} />}
          label="Approve Visitor"
          onPress={() => {}}
          style={styles.action}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
    paddingHorizontal: spacing.md,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.background.primary,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 2,
    borderWidth: 1,
    borderColor: colors.border.light,
  },
  action: {
    flex: 1,
  },
  divider: {
    width: 1,
    backgroundColor: colors.border.light,
  },
});