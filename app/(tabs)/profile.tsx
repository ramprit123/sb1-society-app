import Card from '@/components/ui/Card';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';
import { Bell, ChevronRight, HelpCircle, LogOut, UserCircle, Users } from 'lucide-react-native';
import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

interface MenuItem {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  rightElement?: React.ReactNode;
  onPress: () => void;
}

export default function ProfileScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const menuItems: MenuItem[] = [
    {
      icon: <UserCircle size={24} color={colors.primary.DEFAULT} />,
      title: 'Edit Profile Details',
      subtitle: 'Update your personal information',
      onPress: () => {},
    },
    {
      icon: <Users size={24} color={colors.primary.DEFAULT} />,
      title: 'Family Members',
      subtitle: 'Manage your family members',
      onPress: () => {},
    },
    {
      icon: <Bell size={24} color={colors.primary.DEFAULT} />,
      title: 'Notifications',
      rightElement: (
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
          trackColor={{ false: colors.border.light, true: colors.primary.light }}
          thumbColor={notificationsEnabled ? colors.primary.DEFAULT : colors.border.default}
        />
      ),
      onPress: () => {},
    },
    {
      icon: <HelpCircle size={24} color={colors.primary.DEFAULT} />,
      title: 'Help & Support',
      subtitle: 'Get assistance',
      onPress: () => {},
    },
    {
      icon: <LogOut size={24} color={colors.status.error} />,
      title: 'Logout',
      onPress: () => {},
    },
  ];

  const MenuItem = ({ icon, title, subtitle, rightElement, onPress }: MenuItem) => (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <Card style={styles.menuItem}>
        <View style={styles.menuItemContent}>
          <View style={styles.menuItemLeft}>
            {icon}
            <View style={styles.menuItemText}>
              <Text style={[
                styles.menuItemTitle,
                title === 'Logout' && styles.logoutText
              ]}>{title}</Text>
              {subtitle && (
                <Text style={styles.menuItemSubtitle}>{subtitle}</Text>
              )}
            </View>
          </View>
          {rightElement || <ChevronRight size={20} color={colors.text.tertiary} />}
        </View>
      </Card>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* <Text style={styles.screenTitle}>Profile</Text> */}

        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2' }}
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editAvatarButton}>
              <Text style={styles.editAvatarText}>Change Photo</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.userName}>John Smith</Text>
          <Text style={styles.userEmail}>john.smith@email.com</Text>
        </View>

        <View style={styles.menuSection}>
          {menuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
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
  profileSection: {
    alignItems: 'center',
    marginBottom: spacing.xl,
    paddingTop: spacing.md,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: spacing.sm,
  },
  editAvatarButton: {
    paddingVertical: spacing.xs,
  },
  editAvatarText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: colors.primary.DEFAULT,
  },
  userName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: colors.text.primary,
    marginBottom: spacing.xs,
  },
  userEmail: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: colors.text.tertiary,
  },
  menuSection: {
    paddingHorizontal: spacing.md,
    gap: spacing.sm,
  },
  menuItem: {
    padding: spacing.lg,
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuItemText: {
    marginLeft: spacing.sm,
    flex: 1,
  },
  menuItemTitle: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: colors.text.primary,
  },
  menuItemSubtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: colors.text.tertiary,
    marginTop: 2,
  },
  logoutText: {
    color: colors.status.error,
  },
});