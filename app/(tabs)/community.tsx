import React from 'react';
import { SafeAreaView } from 'react-native';
import ComingSoon from '@/components/ComingSoon';

export default function CommunityScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ComingSoon title="Community" />
    </SafeAreaView>
  );
}