import { Image, Pressable, PressableProps, Text } from 'react-native';

import { styles } from './styles';

export type IngredientProps = PressableProps & {
  name: string;
  image: string;
  selected?: boolean;
}

export function Ingredient({ name, image, selected = false, ...rest }: IngredientProps) {
  return (
    <Pressable
      style={[styles.container, selected && styles.selected]}
      {...rest}
    >
      <Image source={require('@/assets/tomato.png')} style={styles.image} />

      <Text style={styles.title}>Maça</Text>
    </Pressable>
  )
}