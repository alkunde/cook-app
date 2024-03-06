import { ScrollView } from 'react-native';

import { Ingredient } from '@/components/Ingredient';

import { styles } from './styles';

export function Ingredients() {
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {Array.from({ length: 100 }).map((item, index) => (
        <Ingredient key={index} />
      ))}
    </ScrollView>
  )
}