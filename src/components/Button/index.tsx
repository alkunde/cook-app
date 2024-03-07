import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={[styles.button]}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={[styles.text]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}