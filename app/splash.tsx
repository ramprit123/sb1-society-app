import { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Chrome as Home } from 'lucide-react-native';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  Easing,
} from 'react-native-reanimated';

export default function SplashScreen() {
  const router = useRouter();
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.8);
  const textOpacity = useSharedValue(0);
  const indicatorWidth = useSharedValue(0);

  useEffect(() => {
    // Animate the logo
    scale.value = withTiming(1, {
      duration: 700,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });

    opacity.value = withTiming(1, {
      duration: 800,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });

    // Animate the text with a delay
    textOpacity.value = withDelay(
      400,
      withTiming(1, {
        duration: 800,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      })
    );

    // Animate the indicator
    indicatorWidth.value = withDelay(
      1200,
      withTiming(120, {
        duration: 800,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      })
    );

    // Navigate to the main app after splash
    const timer = setTimeout(() => {
      router.replace('/(tabs)');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const logoAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: scale.value }],
    };
  });

  const textAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: textOpacity.value,
    };
  });

  const indicatorAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: indicatorWidth.value,
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Animated.View style={[styles.logoContainer, logoAnimatedStyle]}>
          <View style={styles.logo}>
            <Home color="white" size={50} />
          </View>
        </Animated.View>

        <Animated.View style={[styles.textContainer, textAnimatedStyle]}>
          <Text style={styles.title}>MySociety</Text>
          <Text style={styles.subtitle}>Smart Living, Connected Community</Text>

          <View style={styles.indicatorContainer}>
            <Animated.View style={[styles.indicator, indicatorAnimatedStyle]} />
          </View>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
    position: 'relative',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
  },
  logoContainer: {
    marginBottom: spacing.xl,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: colors.primary.DEFAULT,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.primary.DEFAULT,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 10,
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
    color: colors.text.primary,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: colors.text.tertiary,
    marginBottom: spacing.xl,
  },
  indicatorContainer: {
    height: 4,
    width: 120,
    backgroundColor: colors.border.light,
    borderRadius: 2,
    overflow: 'hidden',
    marginTop: spacing.xl,
  },
  indicator: {
    height: '100%',
    width: 0,
    backgroundColor: colors.primary.DEFAULT,
    borderRadius: 2,
  },
  backgroundCircle: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: colors.background.tertiary,
  },
  topRight: {
    top: -100,
    right: -100,
  },
  bottomLeft: {
    bottom: -100,
    left: -100,
  },
});
