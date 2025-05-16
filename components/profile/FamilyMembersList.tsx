import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Plus, Trash2 } from 'lucide-react-native';
import { colors } from '@/constants/colors';
import { spacing, borderRadius } from '@/constants/spacing';
import Card from '@/components/ui/Card';

interface FamilyMember {
  id: string;
  name: string;
  relation: string;
  avatar: string;
}

interface FamilyMembersListProps {
  members: FamilyMember[];
  onAddMember: () => void;
  onRemoveMember: (id: string) => void;
}

export default function FamilyMembersList({
  members,
  onAddMember,
  onRemoveMember,
}: FamilyMembersListProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={onAddMember}
        activeOpacity={0.7}
      >
        <Plus size={20} color={colors.text.inverse} />
        <Text style={styles.addButtonText}>Add Family Member</Text>
      </TouchableOpacity>

      {members.map((member) => (
        <Card key={member.id} style={styles.memberCard}>
          <View style={styles.memberInfo}>
            <Image source={{ uri: member.avatar }} style={styles.avatar} />
            <View style={styles.memberText}>
              <Text style={styles.memberName}>{member.name}</Text>
              <Text style={styles.memberRelation}>{member.relation}</Text>
            </View>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => onRemoveMember(member.id)}
            >
              <Trash2 size={20} color={colors.status.error} />
            </TouchableOpacity>
          </View>
        </Card>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    gap: spacing.sm,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary.DEFAULT,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.md,
    gap: spacing.xs,
  },
  addButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: colors.text.inverse,
  },
  memberCard: {
    padding: spacing.sm,
  },
  memberInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: spacing.sm,
  },
  memberText: {
    flex: 1,
  },
  memberName: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: colors.text.primary,
    marginBottom: 2,
  },
  memberRelation: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: colors.text.tertiary,
  },
  removeButton: {
    padding: spacing.xs,
  },
});