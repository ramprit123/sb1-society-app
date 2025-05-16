import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '@/constants/colors';
import { borderRadius, spacing } from '@/constants/spacing';

type BadgeVariant = 'primary' | 'success' | 'error' | 'warning' | 'info';

interface BadgeProps {
  text: string;
  variant?: BadgeVariant;
}

export default function Badge({ text, variant = 'primary' }: BadgeProps) {
  const getBackgroundColor = () => {
    switch (variant) {
      case 'success':
        return colors.status.success;
      case 'error':
        return colors.status.error;
      case 'warning':
        return colors.status.warning;
      case 'info':
        return colors.status.info;
      default:
        return colors.primary.DEFAULT;
    }
  };

  return (
    <View style={[styles.badge, { backgroundColor: getBackgroundColor() }]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
    alignSelf: 'flex-start',
  },
  text: {
    color: colors.text.inverse,
    fontSize: 12,
    fontFamily: 'Inter-Medium',
  },
});