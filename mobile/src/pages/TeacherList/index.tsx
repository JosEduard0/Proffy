import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

function TeacherList() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');
  const [teachers, setTeachers] = useState([]);
  
  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }
  
  async function handleFiltersSubmit() {
    try {
      const response = await api.get("/classes", {
        params: {
          subject,
          week_day,
          time,
        },
      });
      
      setTeachers(response.data);
    } catch (error) {
      console.log(error);
    };
  }
  
  
  return (
    <ScrollView style={styles.container}>
     <PageHeader 
      title="Proffys disponíveis" 
      headerRight={(
        <RectButton onPress={handleToggleFiltersVisible} style={styles.filterButton}>
          <Feather name="filter" size={20} color="#FFF" />
        </RectButton>
      )}
    >
      { isFiltersVisible && (
        <View style={styles.searchForm}>
          <Text style={styles.label}>Matéria</Text>
          <TextInput 
            style={styles.input} 
            value={subject}
            onChangeText={text => setSubject(text)}
            placeholder="Qual a matéria?" 
            placeholderTextColor="#C1BCCC"
          />
          
          <View style={styles.inputGroup}>
            <View style={styles.inputBlock}>
             <Text style={styles.label}>Dia da semana</Text>
              <TextInput 
                style={styles.input} 
                value={week_day}
                onChangeText={text => setWeekDay(text)}
                placeholder="Qual o dia?"
                placeholderTextColor="#C1BCCC"
              />
            </View>
            
            <View style={styles.inputBlock}>
             <Text style={styles.label}>Horário</Text>
              <TextInput 
                style={styles.input}
                value={time}
                onChangeText={text => setTime(text)}
                placeholder="Qual o horário?"
                placeholderTextColor="#C1BCCC"
              />
            </View>
          </View>
          
          <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Filtrar</Text>
          </RectButton>
        </View>
      )}
     </PageHeader>
     
     <View
      nestedScrollEnabled={true}
      style={styles.teacherList}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 16,
      }}
    >
      {teachers.map((teacher: Teacher) => {
        <TeacherItem key={teacher.id} teacher={teacher} />
      })}
     </View>
    </ScrollView>
  );
}

export default TeacherList;