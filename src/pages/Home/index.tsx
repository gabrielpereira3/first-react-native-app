import React from 'react';
import {
  Platform,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {TaskList} from '../../components/TaskList';
import {TasksContext} from '../../context/TasksContext';

export const Home = () => {
  const [newTask, setNewTask] = React.useState('');
  const tasks = React.useContext(TasksContext);
  console.log(tasks);

  const handleNewTask = () => {
    const data = {
      id: String(new Date().getTime()),
      title: newTask ? newTask : 'Task empty',
    };
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Lista de tarefas</Text>

        <TextInput
          onChangeText={setNewTask}
          placeholderTextColor="#999"
          placeholder="Nova tarefa..."
          style={styles.input}
        />

        <TouchableOpacity
          onPress={handleNewTask}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>

        <Text style={styles.titleTasks}>Minhas tarefas</Text>

        <TaskList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121214',
  },
  container: {
    flex: 1,
    backgroundColor: '#121214',
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  title: {
    color: '#f1f1f1',
    fontSize: 32,
    fontWeight: 'bold',
  },
  titleTasks: {
    color: '#f1f1f1',
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 50,
  },
  input: {
    backgroundColor: '#29292a',
    color: '#f1f1f1',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 12,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    backgroundColor: '#eba417',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#121214',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
