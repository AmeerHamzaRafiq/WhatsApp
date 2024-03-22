import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

function Chats() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const flatListRef = useRef(null);

  const handleSend = () => {
    if (inputText.trim() === '') return;
    const newMessage = {
      id: messages.length.toString(),
      text: inputText,
      sentByUser: true, 
    };
    setMessages(prevMessages => [...prevMessages, newMessage]);
    setInputText('');
    // Scroll to the end of the list
    flatListRef.current.scrollToEnd();
  };

  const renderMessage = ({ item }) => (
    <View style={[styles.messageContainer, item.sentByUser && styles.sentMessage]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
<FlatList
  ref={flatListRef}
  data={messages}
  renderItem={renderMessage}
  keyExtractor={item => item.id}
  onContentSizeChange={() => flatListRef.current.scrollToEnd({ animated: true })}
/>
 


    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Type a message..."
        value={inputText}
        onChangeText={setInputText}
      />
      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <Text style={styles.sendButtonText}>Send</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
  },
  messageContainer: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    alignSelf: 'flex-start',
    maxWidth: '80%',
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#dcf8c6',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
    backgroundColor: '#ffffff',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  sendButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default Chats;
