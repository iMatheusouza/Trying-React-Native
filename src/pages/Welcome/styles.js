import {StyleSheet} from 'react-native';
import {colors} from '../../styles';
import {metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secundary,
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  title: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },

  subtitle: {
    color: colors.white,
    textAlign: 'center',
    marginVertical: metrics.baseMargin,
    fontSize: 16,
  },

  form: {
    marginHorizontal: metrics.baseMargin * 4,
  },

  input: {
    backgroundColor: colors.white,
    height: 44,
    marginVertical: metrics.baseMargin,
    paddingHorizontal: metrics.basePadding,
    borderRadius: metrics.baseRadius,
  },

  button: {
    backgroundColor: colors.primary,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: metrics.baseRadius,
  },

  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
