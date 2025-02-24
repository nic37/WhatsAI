import {WASocket} from '@WhiskeySockets/Baileys'

export const Add = async (socket: WASocket, numero: string, groupID: string, participant: string) => {
  const num = numero.replace('$add ', '').replace('@', '')
   
  await socket.groupParticipantsUpdate(
    groupID, 
    [num+"@s.whatsapp.net"],
    "add"
  );
};