import React from "react";

import { ScrollView } from "react-native";
import { Message } from "../Message";

import { styles } from "./styles";

export function MessageList() {
  const message = {
    id: "1",
    text: "Oi Nat, essa é uma mensagem de teste para você ver o que to praticando!",
    user: {
      name: "Lila",
      avatar_url: "https://github.com/ElieneMontenegro.png",
    },
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
    </ScrollView>
  );
}
