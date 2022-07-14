import { ViewProps } from 'react-native';
import { useTheme } from 'react-native-paper';

import S from './index.style';

const Page: React.FC<ViewProps> = ({
    style,
    children
}) => {
  const { colors } = useTheme();
  console.log('COLOR: ', colors.background)
  return <S.Container color={colors.background} style={style}>
    {children}
  </S.Container>
}

export default Page;