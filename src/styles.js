import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 280,
    padding: 20,
    backgroundColor: '#1E1E1E',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#61dafb',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#61dafb',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#61dafb',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  }
});